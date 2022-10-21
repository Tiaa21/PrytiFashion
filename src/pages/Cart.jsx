import styled from "styled-components"
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from "../responsive";


const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({})}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TopButton = styled.button`
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
    `
const TopTexts = styled.div`
    ${mobile({display:"none"})}
    `
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    `

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
    `
const Info = styled.div`
    flex: 3;
    `
const Product = styled.div` 
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
    `
const ProductDetail = styled.div`  
        flex: 2;
        display: flex;
    `
const ProductName = styled.span``
const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
    `
const ProductId = styled.span``
const ProductSize = styled.span``
const Image = styled.img`
    width: 220px;
    `
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    `
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    `
const ProductAmountContainer = styled.div`
   display: flex;
   align-items: center;
   /* border: 1px solid grey; */

`
const ProductAmmount = styled.div`
   font-size: 25px;
   margin: 5px;
   /* margin-bottom: 20px; */
   `
const ProductPrice = styled.div`
   font-size: 30px;
   margin-top: 20px;
   `
const Hr=styled.hr`
    background-color: #eee;
    height: 1px;
    width: 90%;
    `
    const Summary = styled.div`
        flex: 1;
        border: 1px solid lightgrey;
        padding: 20px;
        height: 60vh;
        border-radius: 10px;
        margin-top: 10px;
        `
const SummaryTitle=styled.h1`
    font-weight: 300;
    
    `
const SummaryItem=styled.div`
    margin: 40px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total" && "500"};
    font-size: ${props=>props.type==="total" && "24px"};
    `
const SummaryItemText=styled.span`
    
`
const SummaryItemPrice=styled.span`
    
`
const Button=styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;   
`
export default function Cart() {
    return (
        <Container>
            <Announcements />
            <Navbar />
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>WishList (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CheckOut Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
                                <Details>
                                    <ProductName><b>Product:</b> Jessie Thunder Cap</ProductName>
                                    <ProductId><b>ID:</b> 897238947823</ProductId>
                                    <ProductColor />
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <RemoveIcon />
                                    <ProductAmmount>2</ProductAmmount>
                                    <AddIcon />
                                </ProductAmountContainer>
                                <ProductPrice>699 Rs</ProductPrice>
                            </PriceDetail>
                        </Product>
                  
                      
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png" />
                                <Details>
                                    <ProductName><b>Product:</b> Jessie Thunder Cap</ProductName>
                                    <ProductId><b>ID:</b> 897238947823</ProductId>
                                    <ProductColor />
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <RemoveIcon />
                                    <ProductAmmount>2</ProductAmmount>
                                    <AddIcon />
                                </ProductAmountContainer>
                                <ProductPrice>699 Rs</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>3000 Rs</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>250 Rs</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Discount</SummaryItemText>
                            <SummaryItemPrice>-250 Rs</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>3000 Rs</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}
