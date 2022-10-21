import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({width:"80%"})}
`
const Title = styled.h1``
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 15px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 12px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Radio = styled.input``
export default function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Email" />
                    <Input placeholder="UserName" />
                    <Input placeholder="Phone Number" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    
                    
                    <Agreement><Radio type="radio" />By Creating an account you agree to the terms and conditions and give consent to everything in accordance with our <b>
                        privacy policy
                    </b>
                    </Agreement>
                    <Button>Create Account</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}
