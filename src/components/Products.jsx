import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { popularProducts } from '../data';
import Product from './Product';
const Container = styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
justify-content: space-between;
`
export default function Products({ cat, filters, sort }) {
  const [products, setproducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])
  useEffect(() => {
    const getProducts=async()=>{
      try {
        const res=await axios.get("../data")
        console.log(res);
      } catch (err) {
        
      }
    }
    getProducts();
  }, [cat])
  console.log(cat, filters, sort);
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}
