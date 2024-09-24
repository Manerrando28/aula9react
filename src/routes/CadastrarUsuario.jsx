import {useParams,Link, useNavigate} from 'react-router-dom'
import { ImCancelCircle } from "react-icons/im";
import { useState,useEffect } from 'react';
import ListarUsuarios from './ListarUsuarios';


const CadastrarUsuario=()=>{

    //Hook- useParams - serve para receber paramentros como por ex. codigo  na rota
    //do Router
    let {id} =useParams();
    //Hooke - useState- Manipula o estado da variavel - cadastrar
    const [usuarios,setUsuarios]= useState({
        id,
        usuario:'',
        senha:'',
    });

    //Hook-useNavigate- redireciona para outro componente
     const navigate = useNavigate();

    //criando uma variavel com post/put
    let metodo ="post";
    if(id){
        metodo="put";
    }
   

     //criando a função handleChange
     //... spreed( junta o que estava cadastrado com o que for cadastrado novo)
     //evento target- captura o que foi digitado em um campo input pelo seu name
     const handleChange=(e)=>{
        setUsuarios({...usuarios, [e.target.name]: e.target.value});
     }

  
     //criando a função handleSubmit 

     const handleSubmit=(e)=>{
        //previne qualquer alteração no seu formulario
        e.preventDefault();
        //buscando o link da api e verificando se tem ou não id
        fetch(`http://localhost:5000/usuarios/${id ? id:''}`,{
        // metodo que vai decidir se cadastra ou altera
        method: metodo,
        //Cabeçalho da pagina
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(usuarios),
        }).then(()=> {
            navigate("/login")
        });
     }

     //Hook- useEffect - realiza o efeito colateral ele vai na api e mostra os dados cadastrados.

     useEffect(()=>{
        if(id) {
        fetch(`http://localhost:5000/usuarios/${id}`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setUsuarios(data);
        });
    }
     },[id])


    return (
        <section className="usuario">

            <form onSubmit={handleSubmit}>
                <h1>Cadastrar Usuário</h1>
                <input
                    type="text"
                    name="usuario"
                    placeholder="Digite seu Usuário"
                    value={usuarios.usuario}
                    /*O onChange é utilizado em situções que é necessario reagir a cada alteração do input */
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="senha"
                    placeholder="Digite sua senha"
                    value={usuarios.senha}
                    onChange={handleChange}
                />

                <button type="submit">Cadastrar</button>
                <Link to="/login">
                    <ImCancelCircle />
                </Link>

                <ListarUsuarios/>



            </form>
        </section>
    )
}
export default CadastrarUsuario