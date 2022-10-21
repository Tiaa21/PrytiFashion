import React,{useState} from 'react'
import styled from 'styled-components'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {sliderItems} from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    /* background-color: peachpuff; */
    position: relative;
    overflow: hidden;
    ${mobile({display:"none"})}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    bottom: 0px;
    margin: auto;
    left:${props => props.position === "left" && "10px"};
    right :${props => props.position === "right" && "10px"};
    cursor: pointer;
    opacity: 0.8;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    transform: translateX(${props=>props.slideIndex*-100}vw);
    transition: all 1.5s ease;
`
const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #${props=> props.bg};
`
const ImgContainer = styled.div`
flex: 1;
height: 100%;
display: flex;
align-items: center;

`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
flex: 1;
padding: 50px;


`
const Title = styled.h1`
    font-size: 60px;

`
const Desc = styled.p`
    letter-spacing: 3px;
    font-style: 20px;
    font-weight: 500;
    margin: 50px 0px;
`
const Button = styled.button`
    padding: 13px;
    font-style: 20px;
    background-color: transparent;
    cursor: pointer;
   
`


export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick =(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0 ? slideIndex-1:2)
        }else{
            setSlideIndex(slideIndex<2 ? slideIndex+1 :0)
        }
    }
    return (
        <Container>
            <Arrow position="left" onClick={()=>handleClick("left")}>
                <ArrowBackIosNewOutlinedIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(

                    <Slide bg={item.bg} >
                    <ImgContainer>
                        <Image src={item.img} alt='#' />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                </Slide>
                
                ))}
            </Wrapper>
            <Arrow position="right"  onClick={()=>handleClick("right")}>
                <ArrowForwardIosOutlinedIcon />
            </Arrow>
        </Container>
    )
}
