import React from 'react';
import {useSelector} from 'react-redux';

const User = () => {
    const gitUser = useSelector((state) => state.gitUser);

    if(gitUser.gitUsername === '' ) {
        return null;

    }else if(gitUser.gitUsername === undefined){
        return <p>No se encontró el usuario</p>
        
    }else{

        return(
            <>
                <h2>Datos del usuario</h2>
                <ul>
                    <img src={gitUser.image} alt={gitUser.gitUsername}/>
                    <li><span>Nombre: </span>{gitUser.name}</li>
                    <li><span>Nombre de usuario: </span>{gitUser.gitUsername}</li>
                    <li><span>Seguidores: </span>{gitUser.followers}</li>
                    <li><span>Repositorios públicos: </span>{gitUser.publicRepos}</li>
                </ul>
            </>
        );
    };
};

export default User;
