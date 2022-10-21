
import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../responsive'


const Container = styled.div``
const Wrapper = styled.div`
    display: flex;
    padding: 30px;
    ${mobile({flexDirection:"column" ,padding: "30px"})}
`
const ImgContainer = styled.div`flex: 1;`
const Image = styled.img` width: 100%;height: 60vh;
object-fit:cover;
${mobile({height:"40vh"})}
`
const Title = styled.h2`

`
const Desc = styled.p`
margin: 20px 0px;`
const Price = styled.span`font-size:30px; `  
const InfoContainer = styled.div`   
    flex: 1px;
    padding: 0px 50px;
    ${mobile({padding: "0px 10px"})}
`
const FilterContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin: 20px 0px;
    ${mobile({width:"100%"})}
`

const Filter = styled.div`
    display: flex;align-items: center;
`


const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 20px;
    padding: 6px;                              
`

const FilterSizeOption = styled.option``


const AddContainer = styled.div`display: flex;
width: 50%;
justify-content: space-between;
align-items: center;
${mobile({width:"100%"})}
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid darkgrey;
    background-color: white;
    cursor: pointer;

    &:hover{
        background-color: aliceblue;
    }
    
`
const AmountContainer = styled.div`display: flex;
    align-items: center;
    font-weight: 700;
    /* cursor: pointer; */
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid darkgray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

export default function Product() {
    return (
        <Container>
            <Announcements />
            <Navbar />

            <Wrapper>
                <ImgContainer>
                    <Image src='https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quia molestiae quo commodi rem architecto numquam est vel ad! Iste reiciendis nesciunt libero laudantium. Veniam, vitae autem! Doloribus, fugit ea?</Desc>
                    <Price>2000 Rs</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color = "black"/>
                        <FilterColor color = "blue"/>
                        <FilterColor color = "grey"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon style={{cursor:"pointer"}}/>
                        <Amount>1</Amount>
                        <AddIcon style={{cursor:"pointer"}}/>
                    </AmountContainer>
                    <Button>Add To Cart</Button>
                </AddContainer>
                </InfoContainer>
            </Wrapper>

            <NewsLetter />
            <Footer />
        </Container>
    )
}
