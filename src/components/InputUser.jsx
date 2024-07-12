import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/gitUserSlice";
import { setInputUsername } from "../redux/gitUserSlice";

const InputUser = () => {
    const dispatch = useDispatch();
    const inputUsername = useSelector((state) => state.gitUser.inputUsername);
   
    const handleButton = () => {
        if(inputUsername) {            
            fetch(`https://api.github.com/users/${inputUsername}`)
            .then((res) => res.json())
            .then((data) => dispatch(addUser(data)))
            .catch((error) => console.error("Error en la solicitud: ", error));
        };
    };

    return(
        <>
            <input type="text" value={inputUsername} placeholder='Indica un nombre de usuario' onChange={(e) => dispatch(setInputUsername(e.target.value))}/>
            <button onClick={handleButton}>Buscar</button>
        </>
    );
};

export default InputUser;
