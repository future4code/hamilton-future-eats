import { setFullAddress, setProfile, signUp } from '../actions/user'
import axios from 'axios';


describe("User Actions", () => {
    //-------------------------Sync--------------------    
    test("Trás o endereço atualizado da api", () => {
        //preparação
        const mockAddress = "Oi eu sou um endereço";

        //execução  
        const action = setFullAddress(mockAddress);

        //verificação
        expect(action.type).toBe("SET_FULL_ADDRESS");
        expect(action.payload.fullAddress).toBe(mockAddress);

    })
    test("Trás o perfil do usuário atualizado da api", () => {
        //preparação
        const mockPerfil = "Sou um perfil";

        //execução
        const action = setProfile(mockPerfil);

        //verificação
        expect(action.type).toBe("SET_PROFILE");
        expect(action.payload.user).toBe(mockPerfil);
    })
    //-------------------------Async--------------------      
    // test("Teste de login", async () => {
    //     //Mock do axios
    //     const mockLogin = {
    //         email: "chaves@gmail.com",
    //         password: "123456"
    //     }
    //     axios.post = jest.fn();

    //     //mock do dispatch
    //     const dispatch = jest.fn()

    //     //executa a ação assíncrona
    //     await login(mockLogin)(dispatch);

    //     //verificar se o dispatch foi chamado com a ação correta
    //     expect(axios.post).toHaveBeenCalledWith(
    //         'https://us-central1-missao-newton.cloudfunctions.net/futureEats/login',
    //         mockLogin
    //     )
    // })

    test("SignUp", async () => {
        const name = "Chaves";
        const email = "chaves@chaves.com";
        const cpf = "123.123.444-52";
        const password = "123456";
        const mockBody = {
            name,
            email,
            cpf,
            password,
        };

        axios.post = jest.fn(async () => {
            return {
                data: [{ token: "token" }],
            }
        });

        await signUp(name, email, cpf, password)();

        expect(axios.post).toHaveBeenCalledWith(
            'https://us-central1-missao-newton.cloudfunctions.net/futureEats/signup',
            mockBody
        )
    })
})