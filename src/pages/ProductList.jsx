import { useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import Products from "../components/Products"
import { mobile } from "../responsive"

const Container = styled.div`
    

`
const Title = styled.h1`
    margin: 20px;

`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`
const Filter = styled.div`
    margin: 20px;

`
const FilterText = styled.div`
    font-size: 20px;
    font-weight: 500;
    margin-right: 10px;
    ${mobile({display:"flex",flexDirection:"column"})}

`
const Select = styled.select`
    margin: 0px 10px;
    padding: 6px;
    ${mobile({margin:"10px 0px"})}
`
const Option = styled.option`
    

`

export default function ProductList() {
  const location = useLocation();
  const cat=location.pathname.split('/')[2];
  const [filter, setFilters] = useState({});
  const [sort, setSort] = useState("Newest")
  const handleFilters=(e)=>{
  const value=e.target.value;
    setFilters({
      ...filter,
      [e.target.name]:value,
    });
  };
  // console.log(filter);
  // console.log(sort);
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>
            Filter Products: 
          <Select name="color" onChange={handleFilters}>
            <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Teal</Option>
          </Select >
          <Select name="size" onChange={handleFilters}>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
          </FilterText>
        </Filter>
        <Filter>
          <FilterText>
            Sort Products: 
            <Select onChange={(e)=>setSort(e.target.value)}>
            {/* <Option disabled selected>Sort By</Option> */}
            <Option value="newest">Newest</Option>
            <Option  value="asc">Price(from low to high)</Option>
            <Option  value="desc">Price(from high to low)</Option>
          </Select>
          </FilterText>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filter} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  )
}
