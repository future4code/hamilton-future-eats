import axios from "axios";
import { push, replace } from "connected-react-router";
import { routes } from "../containers/Router"


//Síncrona
export function setFullAddress(fullAddress) {
  return {
    type: 'SET_FULL_ADDRESS',
    payload: {
      fullAddress: fullAddress
    }
  }
}

export function setProfile(profile) {
  return {
    type: 'SET_PROFILE',
    payload: {
      user: profile
    }
  }
}

//Assíncrona
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
    dispatch(push(routes.addressRegistration))
  } catch (err) {
    console.error(err);
  }
};


export const addAddress = (body) => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.put('https://us-central1-missao-newton.cloudfunctions.net/futureEats/address',
      body, {
      headers: {
        auth: token,
      },
    });
    localStorage.setItem("token", response.data.token);
    console.log("OK!", localStorage.getItem("token"));

    dispatch(push(routes.feed))
  } catch (err) {
    console.error(err);

  }
};
export const updateAddress = (body) => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.put('https://us-central1-missao-newton.cloudfunctions.net/futureEats/address',
      body, {
      headers: {
        auth: token,
      },
    });
    localStorage.setItem("token", response.data.token);
    console.log("OK!", localStorage.getItem("token"));

    dispatch(replace(routes.profile))
  } catch (err) {
    console.error(err);

  }
};

export const getFullAddress = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEats/profile/address', {
      headers: {
        auth: token,
      }
    });
    dispatch(setFullAddress(response.data.address))
  } catch (error) {
    console.error(error);
  }
}

export const getProfile = (token) => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEats/profile', {
      headers: {
        auth: token,
      }
    })
    dispatch(setProfile(response.data.user))
  } catch (error) {
    console.error(error)
  }
}

export const updateProfile = (body) => async (dispatch) => {
  const token = localStorage.getItem("token");

  try{
    await axios.put('https://us-central1-missao-newton.cloudfunctions.net/futureEats/profile', body, {
      headers: {
        auth: token,
      }
    })
    dispatch(push(routes.profile))
  }catch (error) { 
    console.error(error)
  }
}