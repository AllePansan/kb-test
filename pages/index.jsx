
import Body from "./component/Body"
import Header from "./component/Header"
import React, { useState, useEffect } from 'react';

export default function Index() {
  const [cart, setCart] = useState([]);
  const CallBackCart = (data) => {
    //console.log(data)
    //setCart(data)
    setCart(data)
    //console.log(data)
}

  
  return (
    <>
      <Header cart={cart}>
        
      </Header>
      <Body cbCart={CallBackCart}>
        
      </Body>
    </>
      

  )
}