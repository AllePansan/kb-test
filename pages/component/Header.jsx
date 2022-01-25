import styled from 'styled-components';
import Image from 'next/image'
import Link from 'next/link';

export default function Header(props) {
    console.log(props)

    const Header = styled.header`
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
                          `


    const SearchBar = styled.div`
                        flex:1 1 100%;
                        position:relative;
                        input {
                            width: calc(100% - 38px);
                            height:35px;
                            border-bottom-right-radius:30px;
                            
                            border:0;
                            &:focus {
                                outline: none;
                               
                            }
                        }
                        
                        
                        `

    const Login = styled.div`
                          display:flex;
                          flex:0 0 170px;
                          flex-direction:row;
                          align-items:center;
                          gap: 5px;
                          .text{
                              display: flex;
                              flex-direction: column;
                              & p{
                                  
                                  padding: 0;
                                  margin:0
                              }
                          }
                          
                        `
    const HeaderOptions = styled.div`
                        display:flex;
                        flex-direction: row;
                        
                        gap:20px;
                        `
    return (
        <Header>
            <Menu>
                <div style={{ minWidth:'30px'}}>
                    <Image
                        src='/../public/assets/Header/menu.png'
                        width={30}
                        height={20}
                    />
                </div>
                <div style={{ minWidth:'157px'}}>
                <Image 
                    src='/../public/assets/Header/logo.png'
                    width={157}
                    height={54}
                />
                </div>
                
                <SearchBar>
                    <input/>
                    <div style={{ width:'67px', position:'absolute', zIndex:'2', right:0, top:-5}}>
                        <Image
                            src='/../public/assets/Header/p.png'
                            width={67}
                            height={44}
                        />
                    </div>
                    
                </SearchBar>
                <Login>
                    <div style={{ position: 'relative', borderRadius:'20px', width: '40px', height: '40px', overflow:'hidden', flex:'0 0 40px', border: '3px solid #347BBE' }}>
                        <Image alt="Mountains" src='/../public/assets/Header/p.png' layout="fill" objectFit="cover" />
                    </div>
                    
                    <div className="text">
                        <p>Faça <b>Login</b> ou crie se <b>Cadastro</b></p>
                    </div>
                </Login>
                <HeaderOptions>
                    <Link href={'/'}>
                        <div style={{ minWidth:'30px'}}><Image alt="favorites" src='/../public/assets/Header/favorites.png' width={30} height={30} /></div>
                    </Link>
                    <Link  href={'/'}>
                        <div style={{ minWidth:'30px'}}><Image alt="cart" src='/../public/assets/Header/cart.png' width={30} height={30} /></div>
                    </Link>
                    <Link  href={'/'}>
                        <div style={{ minWidth:'30px'}}><Image alt="sac" src='/../public/assets/Header/sac.png' width={30} height={30} /></div>
                    </Link>
                </HeaderOptions>
            </Menu>
        </Header>
    )
}