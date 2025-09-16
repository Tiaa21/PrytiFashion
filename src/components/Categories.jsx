import {categories} from '../data';
import styled from 'styled-components'
import CategoryItem from './CategoryItem';
import { mobile } from '../responsive';

const Container = styled.div`
   display: flex;
   padding: 10px;
   justify-content: space-between;
   margin-bottom: 50px;
   ${mobile({padding:"0px", flexDirection:"column",marginTop:"25px"})}
`

export default function Categories() {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem item = {item}/>
        ))}
    </Container>
  )
}
