

export const postLogin = async ( objAuth) =>{
    const peticion = await fetch(`${URL_BACKEND}/login`,{
        method : "POST",
        headers : {
            "Content-type": "application/json" 
        },
        body : JSON.stringify(objAuth)
    });
    let data = await peticion.json();
    return data 
}

export const postVerificarToken = async ( token) =>{
    const peticion = await fetch(`${URL_BACKEND}/verificar`,{
        method : "POST",
        headers : {
             "Authorization" : `Bearer ${token}`
        }
        });
    let data = await peticion.json();
    return data 
}