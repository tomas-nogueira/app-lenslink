import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function UserProvider({children}) {

    const[usuario, setUsuario] = useState(null);
    const[logado, setLogado] = useState(false)

    async function Login( email, senha) {
        if(email == 'tomas@mail.com' && senha == '123') {
            setLogado(true);
        }
    }

    async function InfoUsuario() {
        const usuario = await AsyncStorage.getItem("usuario");
        if(usuario) {
            setUsuario( usuario )
            setLogado( true )
        }
    }
    useEffect( () => {
        InfoUsuario();
    }, [] );

    return(
        <UserContext.Provider value={ {usuario: usuario, logado: logado, Login, InfoUsuario} }>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;