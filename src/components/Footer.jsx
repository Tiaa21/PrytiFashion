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
background-color: #faf7f3;
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
            <Desc>With over 2 years of experience, we specialize in creating clothing that blends comfort, elegance, and individuality. Pryti Fashion is not just a clothing store — it’s a lifestyle brand designed for women who embrace confidence and beauty in their daily lives. Our mission is to provide high-quality, sustainable, and fashionable clothing at an affordable price.</Desc>
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
                <ListItems>Women's Fashion</ListItems>
                <ListItems>About Us</ListItems>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><LocationOnIcon style={{"margin-right":"10px"}}/>Gading Serpong, Tangerang</ContactItem>
            <ContactItem><PhoneIcon style={{"margin-right":"10px"}}/>+62 85921774621</ContactItem>
            <ContactItem><EmailIcon style={{"margin-right":"10px"}}/>pryti.fashion@gmail.com</ContactItem>
            {/* <Payment src="https://i.ibb.co/FD4QpTX/USPayment-Methods-Klarna-JPG-1.jpg"></Payment> */}
        </Right>
    </Container>
  )
}
