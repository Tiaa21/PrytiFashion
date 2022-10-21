import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60vh;
    background-color: #ffe7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0px 20px;
`
const Title = styled.h1`
    font-size:70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 34px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign:"center"})}
`
const InputContainer = styled.div`
    width : 50%;
    height: 40px;
    background-color: white;
    display: flex;
    border: 1px solid lightgrey;
    justify-content: space-between;
    ${mobile({width:"80%"})}
`
const Button = styled.button`
    flex:1;
    border: none;
    background-color: teal;
    color: white;
`
const Input = styled.input`
    border: none;
    flex:8;
    font-size: 20px;
`


export default function NewsLetter() {
    return (
   <Container>
    <Title>NewsLetter</Title>
    <Desc>Get Timely Updates from your favourite Products</Desc>
    <InputContainer>
        <Input placeholder='Enter your Email'/>
        <Button>
            <Send/>
        </Button>
    </InputContainer>
   </Container>


    )
}
