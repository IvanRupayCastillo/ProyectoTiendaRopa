export const getProductos = async () =>{
    const peticion  = await fetch(`${URL_BACKEND}/producto`);
    const data = await peticion.json();
    return data ;
}
