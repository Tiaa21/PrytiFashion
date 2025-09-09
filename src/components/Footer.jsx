import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from '../responsive';



const Container=styled.div`
display: flex;
${mobile({flexDirection:"column"})}
`
const Left=styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo=styled.h1`

`
const Desc=styled.p`

`
const SocialContainer=styled.div`
    display: flex;

`
const SocialIcon=styled.h1`
margin-right: 20px;


`
const Center=styled.div`
flex: 1;
padding: 20px;

`
const Title=styled.h2`
margin-bottom: 30px;

`
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;

`
const ListItems=styled.li`
width: 50%;
margin-bottom: 15px;
`

const Right=styled.div`
flex: 1;
padding: 20px;
`
const ContactItem=styled.div`
margin-bottom: 40px;
display: flex;
align-items: center;
`
// const Payment =styled.img`

// `



export default function Footer() {
  return (
    <Container>
        <Left>
            <Logo>Pryti Fashion</Logo>
            <Desc>There are many Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, porro ducimus! Iste cumque rem beatae delectus sequi ex inventore soluta cum explicabo veniam sed nam odio, maxime amet architecto repellendus libero sunt, aut eum.</Desc>
            <SocialContainer>
                <SocialIcon>
                   <FacebookIcon/>
                </SocialIcon>
                <SocialIcon>
                   <InstagramIcon/>
                </SocialIcon>
                <SocialIcon>
                   <TwitterIcon/>
                </SocialIcon>
                <SocialIcon>
                   <PinterestIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItems>Home</ListItems>
                <ListItems>Cart</ListItems>
                <ListItems>Men's Fashion</ListItems>
                <ListItems>Women's Fashion</ListItems>
                <ListItems>Accessories</ListItems>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><LocationOnIcon style={{"margin-right":"10px"}}/>Room # 34, Floor # 5, Al-Barkat Plaza, Blue Area Islamabad</ContactItem>
            <ContactItem><PhoneIcon style={{"margin-right":"10px"}}/>+92 300 1551042</ContactItem>
            <ContactItem><EmailIcon style={{"margin-right":"10px"}}/>Fatehmehmood123@gmail.com</ContactItem>
            {/* <Payment src="https://i.ibb.co/FD4QpTX/USPayment-Methods-Klarna-JPG-1.jpg"></Payment> */}
        </Right>
    </Container>
  )
}
