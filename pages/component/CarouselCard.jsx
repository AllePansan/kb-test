import styled from 'styled-components';
import Image from 'next/image'
import Link from 'next/link';
import Rating from './Rating';

const favEmpty = '/../public/assets/body/card/fav-empty.png'
const favFull = '/../public/assets/body/card/fav-full.png'

export default function CarouselCard(props) {
    //console.log(props)
    const handleClick = (event) =>{
        event.preventDefault()
        //console.log(props.item)
        props.cbFunc(props.item)
    }
    return (
        <Card>
            <CardFavStars>
                <div>
                    <Image src={props.item.favorite ? favFull : favEmpty} width={24} height={24} />
                </div>
                
                <div>
                    <Rating stars={props.item.rating} />
                    
                    {props.item.rating}
                </div>
            </CardFavStars>
            
            <div style={{ position: 'relative',  width: '220px',height:'110px'}}>
                <Image
                    src={props.item.img}
                    layout="responsive"
                    width={220}
                    height={110}
                    objectFit='scale-down'
                />
                
            </div>
            <Maker>
                {props.item.maker}
            </Maker>
            <Item>
                {props.item.name}
            </Item>
            <PriceFrom>
                {currencyFormat(props.item.priceFrom)}
            </PriceFrom>
            <PriceTo>
            {currencyFormat(props.item.priceTo)}
            </PriceTo>
            <div style={{fontSize:'12px'}}>
                A VISTA
            </div>
            <DOContainer>
                {props.item.freeDispatching? <><Image src={'/../public/assets/body/card/Dispatch.png'} width={18} height={18} /> <span style={{fontSize:'12px'}}>FRETE GRÁTIS</span></> : null}
                {props.item.openBox? <><Image src={'/../public/assets/body/card/OpenBox.png'} width={18} height={18} /> <span style={{fontSize:'12px'}}>OPEN BOX</span></> : null}
            </DOContainer>
            <ButtonBuy onClick={handleClick}><Image src={'/../public/assets/body/card/Cart.png'} width={20} height={20} />Comprar</ButtonBuy>
        </Card>
    )
}
function currencyFormat(num) {
    return 'R$ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}



const Card = styled.div`
    height:410px;
    width:220px;
    background-color:#FFF;
    border-radius:5px;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content: normal;
`

const CardFavStars = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-between
`

const Maker = styled.p`
    font-size: 12px;
    color: #7F858D;
`

const Item = styled.div`
    font-weight: bold;
    font-size: 14px;
    color: #42464D;
    white-space: normal;
`

const PriceFrom = styled.p`
    font-size: 12px;
    color: #565C69;
    text-decoration: line-through;
    margin-bottom:0;
`

const PriceTo = styled.p`
    font-weight: bold;
    font-size: 24px;
    line-height: 34px;
    color: #FF6500;
    padding:0;
    margin:0;
`

const DOContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex:0 0 18px;
    gap:10px;
`

const ButtonBuy = styled.button`
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
`