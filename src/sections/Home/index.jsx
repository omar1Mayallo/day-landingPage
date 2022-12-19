import React from "react";
import {Container} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";
import {HomeSectionStyled} from "./home.styled";
import homeImg from "../../assets/home-bg.jpg";
const Home = () => {
  return (
    <HomeSectionStyled
      id={"home"}
      className="home-sec d-flex align-items-center"
      style={{
        background: `url(${homeImg}) top center no-repeat`,
        height: "calc(100vh - 100px)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Container className="home-container animate__animated animate__lightSpeedInLeft">
        <h1>WELCOME TO DAY</h1>
        <h2>
          We are team of talented designers making websites with Bootstrap
        </h2>
        <CustomButton type="btn-on-img">GET STARTED</CustomButton>
      </Container>
    </HomeSectionStyled>
  );
};

export default Home;
