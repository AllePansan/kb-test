import styled from 'styled-components';
import Image from 'next/image'
import Link from 'next/link';
import CarouselCard from './CarouselCard';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
let cart = [];
export default function Body(props) {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    

    const router = useRouter();

    const CallBackCard = (data) => {
        //console.log(data)
        //setCart(data)
        cart.push(data)
        console.log(cart)
        props.cbCart(cart)
        router.replace(router.asPath);
    }
    useEffect(() => {
        fetch("/api/hello")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setData(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Container>
    
                <Image src='/../public/assets/body/banner.png' width={1440} height={600} layout='responsive' />
                <View>
                    <div className="card">
                        <p style={{ fontWeight: '800', fontSize: '24px' }}>BLACK FRIDAY</p>
                        <Timer >
                            <span style={{ fontSize: '16px' }}>A PROMOÇÃO TERMINA EM:</span>
                            <Image src='/../public/assets/body/clock.png' width={22} height={24} />
                            <span style={{ fontSize: '25px' }}>13d 18:15:56</span>
                        </Timer>
                    </div>
                    <Carrousel>
                        <div className="prev">
                            <Image src='/../public/assets/body/Back.png' width={24} height={24} />
                        </div>
    
                        {/*  carrousel over here*/}
                        <div className="carousel">
                            {data.map(d => {
                                return(<CarouselCard cbFunc={CallBackCard} item={d}></CarouselCard>)
                            })}
                            
    
                        </div>
    
    
                        <div className="next">
                            <Image src='/../public/assets/body/Forward.png' width={24} height={24} />
                        </div>
                    </Carrousel>
                </View>
    
            </Container>
        );
    }

    
}



//styled components
const Container = styled.div`
    max-width:1440px;
    height:100%;
    margin:auto;
    //border:1px solid;
`
const View = styled.div`
    //border:1px solid;
    max-width:1360px;
    margin:auto;
    top:-290px;
    position:relative;
    background: #FAFAFB;
    color:#42464D;
    .card{
        background: #FF6500;
        width:100%;
        height: 70px;
        color:#FFF;
        display:flex;
        flex-direction: row;
        justify-content:space-between;
        align-items:center;
        padding:20px 70px;
        p{
            padding:0px;
            margin:0;
        }
    }
`

const Timer = styled.p`
    display:flex;
    flex-direction: row;
    align-items:center;
    gap:5px;
`

const Carrousel = styled.div`
    padding:30px;
    display:flex;
    flex-direction:row;
    align-items:center;
    .prev{
        
        width:30px;
        margin:au
    }
    .next{
        
        width:30px;
        
    }
    .carousel{
        display:flex;
        flex-direction:row;
        gap:10px;
        width: auto;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        -ms-overflow-style: none;
        scrollbar-width: none;
        ::-webkit-scrollbar {
            display: none;
        }
    }
`

