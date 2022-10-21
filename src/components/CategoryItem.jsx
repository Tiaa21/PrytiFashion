
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   ${mobile({height:"30vh"})}
  
    `
const Button = styled.button`
    background-color: transparent;
    padding: 15px;
    color: white;
    font-size: 20px;
    border:3px solid white;

`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


`

export default function CategoryItem({ item }) {
    return (

        <Container>
            <Link to={`/products/${item.cat}`}>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
            </Link>
        </Container>
    )
}
