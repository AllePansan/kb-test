
import Body from "./component/Body"
import Header from "./component/Header"
import React, { useState, useEffect } from 'react';
import Head from 'next/head'

export default function Index() {
  const [cart, setCart] = useState([]);
  const CallBackCart = (data) => {
    setCart(data)
}

  
  return (
    <>
      <Head>
        <title>KaBum - Simplificada</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Encontre as melhores ofertas em Tecnologia e Games aqui no KaBum." />
        <meta name="language" content="pt-br" />
        <meta name="keywords" content="kabum, loja, kabum loja, tecnologia, ofertas, games, loja online, compras, hardware, kabum.com.br, ofertas de hardware, promoçoes, kabum é boa, kabum é seguro, kabum é confiavel"/>
        <meta name="author" content="KaBUm! | Maior E-comerce de técnologia da américa latina"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header cart={cart}>
        
      </Header>
      <Body cbCart={CallBackCart}>
        
      </Body>
    </>
      

  )
}