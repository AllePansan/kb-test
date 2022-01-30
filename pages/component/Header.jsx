import styled from 'styled-components';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Header(props) {
    //console.log(props)
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [search, setSearch] = useState('')

    function openSideMenu(){
        console.log('Open side menu')
    }
    function applySearch(e){
        e.preventDefault()
        console.log('applying search : ', search)
    }
    function redirectMainPage(){
        console.log('Redirects to KaBum.com.br')
    }
    function login(e){
        e.preventDefault();
        //console.log(e.target[0].value) //username
        //console.log(e.target[1].value) //password
        let username = e.target[0].value;
        let password = e.target[1].value;
        /* , {
            body: JSON.stringify({
                username: username,
                password:password
            })
        }) */
            fetch("/api/user?"+ new URLSearchParams({username: username,
                password:password
            }))
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    if(!data.message){
                        setUser(data);
                    
                    }
                    console.log(data)
                },
                (error) => {
                    console.log(error)
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }
    function account(){
        console.log('opens users account')
    }
    function exit(){
        setUser('')
    }
    //console.log(props.cart.length)
    //cart = props.cart.lenght
    return (
        <HeaderContainer>
            <Menu>
                <div style={{ minWidth: '30px', cursor:"pointer" }} onClick={openSideMenu}>
                    <Image
                        src={'/../public/assets/Header/menu.png'}
                        width={30}
                        height={20}
                    />
                </div>
                <div style={{ minWidth: '157px', cursor:"pointer"  }} onClick={redirectMainPage}>
                    <Image
                        src='/../public/assets/Header/logo.png'
                        width={157}
                        height={54}
                    />
                </div>

                <SearchBar>
                    <form  onSubmit={applySearch}>
                        <input onChange={event => setSearch(event.target.value)} />
                        <div style={{ width: '67px', position: 'absolute', zIndex: '2', right: 0, top: -5 , cursor:"pointer"}} onClick={applySearch}>
                            <Image
                                src='/../public/assets/Header/p.png'
                                width={67}
                                height={44}
                            />
                        </div>
                    </form>

                </SearchBar>
                <Login>
                    <div style={{ position: 'relative', borderRadius: '20px', width: '40px', height: '40px', overflow: 'hidden', flex: '0 0 40px', border: '3px solid #347BBE' }}>
                        <Image alt="avatar" src={user == ''? '/../public/assets/header/avatar.png': user.picture} layout="fill" objectFit="cover" />
                    </div>
                    <div className="text">
                        {user != ''? 
                            <>
                                <div className="greetings"><p>Olá,  {user.fullName}</p></div>
                                <div className="options"><span onClick={account}>MINHA CONTA</span> | <span onClick={exit}>SAIR</span></div>
                            </>
                            :
                            <>
                                <p>Faça 

                                    <StyledPopup trigger={<b style={{cursor:'pointer'}}> Login </b> } 
                                        position="bottom center">
                                        <form onSubmit={login}>
                                            <label htmlFor="username">Usuário</label>
                                            <input type="text" name="username" id="username" />
                                            <label htmlFor="password">Senha</label>
                                            <input type="password" name="password" id="password" />
                                            <button type="submit">Entrar</button>
                                        </form>
                                    </StyledPopup>
                                    
                                    ou crie seu 
                                    
                                    <StyledPopup trigger={<b style={{cursor:'pointer'}}> Cadastro </b>} 
                                        position="bottom center">
                                        <form onSubmit={login}>
                                            <label htmlFor="username">Usuário</label>
                                            <input type="text" name="username" id="username" />
                                            <label htmlFor="password">Senha</label>
                                            <input type="password" name="password" id="password" />
                                            <button type="submit">Entrar</button>
                                        </form>
                                    </StyledPopup>
                                </p> 
                                
                            </>
                    
                        }
                    </div>
                    
                    
                </Login>
                <HeaderOptions>
                    <Link href={'/#'}>
                        <div style={{ minWidth: '30px', cursor: 'pointer' }}><Image alt="favorites" src='/../public/assets/Header/favorites.png' width={30} height={30} /></div>
                    </Link>
                    <Link href={'/#'}>
                        <div style={{ minWidth: '30px', cursor: 'pointer' }}><Image alt="cart" src='/../public/assets/Header/cart.png' width={30} height={30} /> {props.cart.length == '0'? <></>:<CartBouble>{props.cart.length}</CartBouble>}</div>
                    </Link>
                    <Link href={'/#'}>
                        <div style={{ minWidth: '30px', cursor: 'pointer' }}><Image alt="sac" src='/../public/assets/Header/sac.png' width={30} height={30} /></div>
                    </Link>
                </HeaderOptions>
                
            </Menu>
        </HeaderContainer>
    )
}

//Styled components 
const HeaderContainer = styled.header`
    /* font-size: 1.5em;
    text-align: center;
    color: palevioletred; */
    background: #355EAE;
    width:100%;
    padding:29px;
    
`;

const Menu = styled.div`
    display:flex;
    align-items:center;
    gap:20px;
    max-width:1200px;
    margin:auto;
`;


const SearchBar = styled.div`
    flex:1 1 100%;
    position:relative;
    input {
        width: calc(100% - 38px);
        height:35px;
        border-bottom-right-radius:30px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        border:0;
        padding:10px;
        &:focus {
            outline: none;
            
        }
    }
`;

const Login = styled.div`
    display:flex;
    flex:0 0 170px;
    flex-direction:row;
    align-items:center;
    gap: 5px;
    .text{
        display: flex;
        flex-direction: column;
        user-select: none;
        & p{
            font-size: 12px;
            padding: 0;
            margin:0
        }
        .greetings{
            white-space: nowrap;
            overflow: hidden;     
            text-overflow: ellipsis;
        }
        .options{
            font-size: 12px;
        }
        span{cursor:pointer;}
    }
        
`;

const HeaderOptions = styled.div`
    display:flex;
    flex-direction: row;
    gap:20px;7
    
`;

const CartBouble = styled.div`
    position:relative;
    top:-10px;
    left:20px;
    height:15px;
    width:15px;
    text-align:center;
    border-radius:100%;
    font-size:10px;
    background: #FF6500;

`

const ImgLink = styled.div`
    min-width:'30px';
    cursor:pointer;
`;

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    
  }
  // use your custom style for ".popup-content"
  &-content {
    //background:#FF6500;
    //border 1px solid #FFF;
    color:#42464D;
    text-align: center;
    padding:10px;
    input{
        height:35px;
        border:1px solid #FF6500;
        padding:10px;
        width:100%;
    }
    button{
        width:100%;
        background: #FF6500;
        height:40px;
        border:none;
        border-radius:5px;
        color:#FFF;
        cursor:pointer;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-top:10px;
    }
  }
`;
