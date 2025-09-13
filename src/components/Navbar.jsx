import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  z-index: 999;
  height: 95px;
  background-color: #faf7f3;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  ${mobile({ padding: "10px 0px" })}
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  ${mobile({ fontSize: "25px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: 2 })}
`;
const MenuItem = styled.div`
  font-style: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <img src="/images/logo_trans.png" alt="logo" style={{ height: "80px" }} />
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo>Pryti Fashion</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>Products</MenuItem>
          </Link>
          <Link
            to="/aboutus"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>About Us</MenuItem>
          </Link>

          <MenuItem>
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              <Badge badgeContent={3} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
