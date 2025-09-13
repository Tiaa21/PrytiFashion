import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { popularProducts } from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcements from "../components/Announcements";
import { Star, StarBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 60px 70px;
  gap: 50px;
`;

const ImgSection = styled.div`
  flex: 1;
`;

const MainImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
`;

const Thumbnails = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
`;

const Thumb = styled.img`
  width: 90px;
  height: 90px;
  cursor: pointer;
  border: ${(props) => (props.active ? "2px solid black" : "1px solid #ccc")};
  border-radius: 5px;
`;

const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Category = styled.p`
  font-size: 14px;
  color: gray;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin: 0px;
  font-weight: bold;
`;

const ReviewRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #444;
`;

const Price = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #222;

  span {
    text-decoration: line-through;
    margin-left: 12px;
    color: gray;
    font-size: 20px;
    font-weight: normal;
  }
`;

const Desc = styled.p`
  color: #555;
  line-height: 1.5;
`;

const Selector = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ColorBox = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
`;

const Color = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${(props) => props.color};
  cursor: pointer;
  border: ${(props) => (props.active ? "2px solid black" : "1px solid #ccc")};
`;

const SizeSelect = styled.select`
  padding: 6px 10px;
`;

const Stock = styled.p`
  color: green;
  font-weight: 600;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const QtyButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  font-size: 16px;
`;

const QtyNumber = styled.div`
  width: 40px;
  text-align: center;
  font-size: 16px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  flex: 1;
  padding: 14px 20px;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 600;
  font-size: 15px;
  border: none;

  background: ${(props) => (props.primary ? "black" : "#facc15")};
  color: ${(props) => (props.primary ? "white" : "black")};

  &:hover {
    opacity: 0.9;
  }
`;

const Divider = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ddd;
`;

const ReviewSection = styled.div`
  margin-top: 40px;
  padding-bottom: 70px;
  padding-left: 70px;
  padding-right: 70px;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReviewItem = styled.div`
  border-top: 1px solid #ddd;
  padding: 15px 0;
`;

export default function ProductDetail() {
  const { id } = useParams();
  const product = popularProducts.find((p) => p.id === parseInt(id));

  const [mainImg, setMainImg] = useState(product.photos[0]);
  const [selectedColor, setSelectedColor] = useState(product.color[0]);
  const [selectedSize, setSelectedSize] = useState(product.size[0]);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  return (
    <Container>
      <Announcements />
      <Navbar />
      <div className="m-10">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
        >
          ← Back
        </button>
      </div>
      <Wrapper>
        {/* Image Section */}
        <ImgSection>
          <MainImg src={mainImg} />
          <Thumbnails>
            {product.photos.map((img, idx) => (
              <Thumb
                key={idx}
                src={img}
                onClick={() => setMainImg(img)}
                active={mainImg === img}
              />
            ))}
          </Thumbnails>
        </ImgSection>

        {/* Info Section */}
        <InfoSection>
          <Category>{product.category}</Category>
          <Title>{product.title}</Title>
          <ReviewRow>
            {[...Array(5)].map((_, i) =>
              i < Math.round(product.rating) ? (
                <Star key={i} style={{ color: "gold", fontSize: 20 }} />
              ) : (
                <StarBorder key={i} style={{ fontSize: 20 }} />
              )
            )}
            <span>({product.reviews.length} Reviews)</span>
          </ReviewRow>

          <Price>
            Rp. {product.price}.000 <span>Rp. {product.oldPrice}.000</span>
          </Price>

          <Desc>{product.desc}</Desc>

          <Selector>
            <strong>Color:</strong>
            <ColorBox>
              {product.color.map((c) => (
                <Color
                  key={c}
                  color={c}
                  active={selectedColor === c}
                  onClick={() => setSelectedColor(c)}
                />
              ))}
            </ColorBox>
          </Selector>

          <Selector>
            <strong>Size:</strong>
            <SizeSelect
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {product.size.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </SizeSelect>
          </Selector>

          <Stock>In Stock</Stock>

          <Quantity>
            <QtyButton
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </QtyButton>
            <QtyNumber>{quantity}</QtyNumber>
            <QtyButton onClick={() => setQuantity(quantity + 1)}>+</QtyButton>
          </Quantity>

          <Buttons>
            <Button primary>Add To Cart</Button>
            <Button>Buy Now</Button>
          </Buttons>

          <Divider />
        </InfoSection>
      </Wrapper>

      {/* Reviews */}
      <ReviewSection>
        <h3>Customer Reviews</h3>
        <ReviewHeader>
          <div>
            <strong>{product.rating}</strong> out of 5 ⭐
          </div>
          <div>{product.reviews.length} Reviews</div>
        </ReviewHeader>
        {product.reviews.map((r) => (
          <ReviewItem key={r.id}>
            <p>
              <strong>{r.user}</strong> ({r.date})
            </p>
            <p>
              {[...Array(5)].map((_, i) =>
                i < r.rating ? (
                  <Star key={i} style={{ color: "gold" }} />
                ) : (
                  <StarBorder key={i} />
                )
              )}
            </p>
            <p>{r.comment}</p>
            {r.images && (
              <div style={{ display: "flex", gap: "10px" }}>
                {r.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="review"
                    style={{ width: "80px", borderRadius: "6px" }}
                  />
                ))}
              </div>
            )}
          </ReviewItem>
        ))}
      </ReviewSection>
      <Footer />
    </Container>
  );
}
