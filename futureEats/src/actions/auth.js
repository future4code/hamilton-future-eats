import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router"

// const baseUrl = `https://us-central1-missao-newton.cloudfunctions.net/futureEats`;

export const login = (email, password) => async (dispatch) => {
  const body = {
    email,
    password,
  };
  try {
    
    const response = await axios.post(
        'https://us-central1-missao-newton.cloudfunctions.net/futureEats/login', body
        );
    localStorage.setItem("token", response.data.token);
    
    response.data.user.hasAddress ? dispatch(push(routes.feed)) : dispatch(push(routes.addressRegistration))
  } catch (err) {
    console.error(err);
  }
};

export const signUp = (name, email, cpf, password) => async (dispatch) => {
    const body = {
      name,
      email,
      cpf,
      password,
    };
  
    try {
      const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureEats/signup', body);
      localStorage.setItem("token", response.data.token);
      alert("Usuário criado com sucesso")
      dispatch(push(routes.addressRegistration))
    } catch (err) {
      console.error(err);
    }
  };

  
// export const addAddress = (body) => async (dispatch) => {
//     const token = localStorage.getItem("token");
  
//     try {
//       const response = await axios.put('https://us-central1-missao-newton.cloudfunctions.net/futureEats/address', 
//       body, {
//         headers: {
//           auth: token,
//         },
//       });
//       localStorage.setItem("token", response.data.token);
//       console.log("OK!", localStorage.getItem("token"));
      
//       dispatch(push(routes.feed))
//     } catch (err) {
//       console.error(err);
//     }
//   };

