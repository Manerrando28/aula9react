import {useRef, useState,useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
//import Dashboard from './Dashboard'
import { LoginStyle } from '../css/LoginStyle';
import LogoLogin from '../assets/Login.jpg'


const Login =()=>{

    //Hook-useRef- pega a referencia de um componente ou elemento do DOM
    const usuario =useRef();
    const senha =useRef();

    //Hook-useState - Manipula o estado da variavel
    const [usuarios,setUsuarios]=useState([]);

    //Hook - useNavigate - redireciona para o componente
    const navigate = useNavigate();

    //criando validação de login

    function validade(){
        for(let i =0; i <usuarios.length; i++){
            if(
                usuarios[i].usuario ==usuario.current.value &&
                usuarios[i].senha == senha.current.value
            ){
                return true;
            }
        }
    }

    //criando a função handleSubmit

    const handleSubmit =(e)=>{
        //previne que sua pagina faça qualquer modificação ex. load
        e.preventDefault();
        if(validade()){
            //criando a autenticação 
            let token =
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)
                sessionStorage.setItem("usuario",usuario.current.value);
                sessionStorage.setItem("senha", token);
                //chama o componente dashboard ao logar corretamente.
                navigate("/Dashboard")       
        }else{
            alert("usuario/senha inválidos")
        }
    }

    //Hook- useEffect vai buscar os dados para o login

    useEffect(()=>{
        //url que o json server criou (API)
        fetch("http://localhost:5000/usuarios/")
        //promise
        .then((res)=>{
            return res.json();
        })
        //setUsuarios recebe as alterações 
        .then((res)=>{
            setUsuarios(res);
        })
        //retorna um array vazio
    },[])

    return(
        <LoginStyle>
        <section className="container">
            <div className="container-login">
            <div className="login">

                {/*Form*/}
                <form className="login-form" onSubmit={handleSubmit}>
                    {/*Titulo do login*/}
                    <span className="titulo-login">Faça seu Login</span>
                    {/*Campo input do usuario*/}
                    <div className="w-input">
                        <input
                            type="text"
                            className="input-form"
                            id="usuario"
                            ref={usuario}                        
                        />
                        <span placeholder="usuario"></span>
                    </div>
                        {/*Campo input do senha*/}
                    <div className="w-input">
                        <input
                            type="password"
                            className="input-form"
                            id="senha"
                            ref={senha}
                        />
                        <span placeholder="Senha"></span>
                    </div>

                    {/*Botão do Login */}

                    <div className="login-btn">
                        <button type="submit" className="login-form-btn">Login</button>
                    </div>

                    {/*Utils*/}
                    
                    <ul className="utilidades">
                        <li>
                            <span className="text1">Esqueçeu sua senha?</span>
                        </li>

                        <li>
                            <span className="text1">Não tem conta?</span>
                           <Link to="/cadastrarUsuario" className="text2">
                                Criar
                           </Link>
                        </li>
                    </ul>
                </form>
            </div>
            <img src={LogoLogin} alt="Imagem logo"/>
            </div>
        </section>
        </LoginStyle>
    )
}
export default Login