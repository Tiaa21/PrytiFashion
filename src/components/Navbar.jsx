import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
const Container = styled.div`
  height: 95px;
  ${mobile({height:"50px"})}
`;

const Wrapper = styled.div`
     ${mobile({padding:"10px 0px"})}
  padding: 10px 20px;
  display:flex;
  justify-content:space-between;
  align-items: center;
`;
const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  `;
const Language = styled.span`
    cursor: pointer;
    font-size: 14px;
    ${mobile({display:"none"})}
    `
const SearchContainer = styled.div`
    border: 2px solid lightgrey;
    display: flex;
    align-items: center;
    margin:10px;
    padding: 10px;
    justify-content: space-between;
`
const Input = styled.input`
    border: none;
    ${mobile({width:"50px"})}
`
const Logo = styled.h1`
     ${mobile({fontSize:"25px"})}
`
const Center = styled.div`
  flex:1;
  text-align: center;
  `;

const Right = styled.div`
  flex:1;
  display: flex;
  justify-content: flex-end;
  ${mobile({justifyContent:"center",flex:2})}
  
`;
const MenuItem = styled.div`
    font-style: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px",marginLeft:"10px"})}
`


export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input></Input>
                        <SearchIcon style={{color:"lightgrey",fontSize:"25px"}}/>
                    </SearchContainer>
                </Left>
                <Center>
                <Link to="/" style={{ textDecoration: 'none',color:"black" }}>


                    <Logo>Fateh.</Logo>
</Link>
                </Center>
                <Right>
                    <Link to='/register' style={{ textDecoration: 'none',color:"black" }}>
                    <MenuItem>Register</MenuItem>
                    </Link>
                    <Link to='/login' style={{ textDecoration: 'none',color:"black" }}>
                    <MenuItem>login</MenuItem>
                    </Link>
                    
                    <MenuItem>
                        <Link to="/cart" style={{ textDecoration: 'none',color:"black" }}>

                        <Badge badgeContent={3} color="secondary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                        </Link>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}
