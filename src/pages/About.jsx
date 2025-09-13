import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hero = styled.div`
  width: 100%;
  background-color: #D9A299;
  color: white;
  text-align: center;
  padding: 80px 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const SubText = styled.p`
  font-size: 16px;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.8;
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: -50px;
  padding: 0 20px;
`;

const ImageCard = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
`;

const AboutSection = styled.div`
  max-width: 1000px;
  padding: 60px 20px;
  text-align: left;
`;

const AboutTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

const AboutText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #444;
`;

const StatsSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1000px;
  padding: 40px 20px;
  gap: 20px;
`;

const Stat = styled.div`
  flex: 1;
  min-width: 200px;
  text-align: center;

  h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #0a1f29;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <Container>
        {/* Hero Section */}
        <Hero>
          <Title>Your trusted fashion partner</Title>
          <SubText>
            Founded in August 2023, Pryti Fashion has been dedicated to
            empowering women through modern, elegant, and timeless clothing
            styles.
          </SubText>
        </Hero>

        {/* Images */}
        <ImageSection>
          <ImageCard>
            <img
              src="https://i.pinimg.com/1200x/1f/f5/89/1ff5899de37992b7fe02d4886957e38c.jpg"
              alt="fashion 1"
            />
          </ImageCard>
          <ImageCard>
            <img
              src="https://i.pinimg.com/736x/a8/e2/81/a8e2812c72ea90d5779b84eb1fa3f8eb.jpg"
              alt="fashion 2"
            />
          </ImageCard>
          <ImageCard>
            <img
              src="https://i.pinimg.com/736x/e5/90/90/e59090c8cc9f34f92be74d6646e40b97.jpg"
              alt="fashion 3"
            />
          </ImageCard>
        </ImageSection>

        {/* About Section */}
        <AboutSection>
          <AboutTitle>About Pryti Fashion</AboutTitle>
          <AboutText>
            With over 2 years of experience, we specialize in creating clothing
            that blends comfort, elegance, and individuality. Pryti Fashion is
            not just a clothing store — it’s a lifestyle brand designed for
            women who embrace confidence and beauty in their daily lives. Our
            mission is to provide high-quality, sustainable, and fashionable
            clothing at an affordable price.
          </AboutText>
        </AboutSection>

        {/* Stats Section */}
        <StatsSection>
          <Stat>
            <h2>95%</h2>
            <p>Customer satisfaction</p>
          </Stat>
          <Stat>
            <h2>200+</h2>
            <p>Unique collections released</p>
          </Stat>
          <Stat>
            <h2>$1M+</h2>
            <p>Revenue generated since 2023</p>
          </Stat>
          <Stat>
            <h2>50k+</h2>
            <p>Happy women worldwide</p>
          </Stat>
        </StatsSection>
      </Container>
      <Footer />
    </div>
  );
}
