import styled from 'styled-components'

export const LoginStyle = styled.section`

.container{
    width:100%;
    margin: 0 auto;
}

.container-login{
    width:100%;
    min-height: 100vh;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    padding:15px;
    background:transparent;
}
.login{
    width:350px;
    margin-right:50px;
    background:transparent;
}
.login-form{
    width:100%
}

.titulo-login{
    display:block;
    font-size:40px;
    line-height:1.3;
    text-align:center;
}
.w-input{
    width:100%;
    position:relative;
    margin-top:30px;
    margin-bottom:30px;
    border-bottom:2px solid #d9d9d9;
    
}
.w-input:hover{
    border-bottom:2px solid blue;
}

.input-form{
    font-size:1rem;
    line-height:1.2;
    display:block;
    width:100%;
    height:30px;
    padding:0 5px;
    border:none;
    outline:0;
    
}
.login-btn{
    width:100%;
    display:flex;
    justify-content:center;
}
.login-form-btn{
    font-size:1rem;
    width:100%;
    height:50px;
    background:#213550;
    color:#fff;
    text-transform:uppercase;
    border-radius:20px;
    transition: all 0.4s;
    cursor:pointer;
}
.login-form-btn:hover{
    box-shadow:10px 10px 10px blue;
}
.utilidades{
    margin-top:20px;
    margin-bottom:10px;
}
.text1{
    color:#555;
}
.text2{
    color:blue;
}
img{
    width:300px;
    height:300px;
    margin-left:50px;
}
img:hover{
    border-radius:100%;
    box-shadow:10px 10px 10px blue;

}


`