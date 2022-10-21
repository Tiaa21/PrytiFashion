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
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:  10px 0px;
    padding: 15px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 5px;
`
const Link = styled.a`
    text-decoration: underline;
    margin: 6px 0px;
    cursor: pointer;
`
export default function Login() {
    return (
        <Container>
            <Wrapper>
                <Title>Login</Title>
                <Form>
                    <Input placeholder="UserName" />
                    <Input placeholder="Password" />
                    <Button>Login</Button>
                    <Link>Forget Password</Link>
                    <Link>Create Account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}
