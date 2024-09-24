import {Link} from 'react-router-dom'


const Nav =()=>{

    //Pegando o usuario logado

    const getUsuario = sessionStorage.getItem("usuario")


    return(
        <>
        <Link to='/'>Home</Link>
        <Link to="/login">Login</Link>

        <span>
            {getUsuario ? (
                <p className="infoUsuario">
                    Usuário Logado: {getUsuario}
                </p>
            ):(
                <div></div>
            ) }
        </span>
        </>
    )
}
export default Nav