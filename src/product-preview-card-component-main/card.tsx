import React, { useEffect, useState } from "react";
import styled from "styled-components";
import mobileImage from "./images/image-product-mobile.jpg";
import desktopImage from "./images/image-product-desktop.jpg";
import logo from "./images/icon-cart.svg";
const Card = () => {
  const [windoWidth, setWindowWidth] = useState(window.innerWidth);
  const handelResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handelResize);
  }, []);
  return (
    <Container>
      <div className="main">
        <div className="container">
          <img
            src={window.innerWidth <= 375 ? mobileImage : desktopImage}
            alt="product"
            className={`${window.innerWidth <= 375 ? "mobile" : "desktop"}`}
          />
          <div className="content">
            <p className="product-type">perfume</p>
            <p className="name">Gabrielle Essence Eau De Parfum </p>
            <p className="main-text">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="cost">
              <p className="last-cost">$149.99</p>
              <p className="first-cost">$169.99</p>
            </div>

            <button className="product-button">
              <img src={logo} alt="buy-logo" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
const Container = styled.div`
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: -10px;
  .main {
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&display=swap");
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3eae3;
    width: 1440px;
    height: 85vh;
    /* margin: -10px; */
  }
  .container {
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    width: 680px;
    height: 500px;
    background-color: #ffffff;

    .content {
      padding: 20px 40px;
      .product-type {
        letter-spacing: 5px;
        text-transform: uppercase;
        color: #8d8e93;
        font-family: "Inter", sans-serif;
      }

      .name {
        width: 200px;
        font-size: 35px;
        font-weight: 700;
        color: balck;
        font-family: "Fraunces", serif;
        line-height: 2ex;
      }
      .main-text {
        width: 250px;
        color: gray;

        font-family: "Inter", sans-serif;
      }
      .cost {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: gray;
        font-family: "Inter", sans-serif;
      }
      .last-cost {
        color: #41826a;
        font-size: 2.5rem;
        font-weight: 1200;
        padding-right: 25px;
        font-family: "Fraunces", serif;
      }
      .first-cost {
        text-decoration: line-through;
      }
      .product-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        background-color: #3d8168;
        border-radius: 10px;
        border: none;
        font-weight: 800;
        color: white;
        width: 280px;
        height: 50px;
        cursor: pointer;
        font-family: "Fraunces", serif;
      }
    }
    .desktop {
      border-radius: 10px 0px 0px 10px;
      height: 500px;
    }
  }
  @media (max-width: 375px) {
    background-color: #f3eae3;
    .main {
      height: 100vh;
    }
    .container {
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      width: 350px;
      height: 610px;
      background-color: #ffffff;
      .content {
        padding: 10px 20px;
        .product-type {
          font-weight: 100;
          font-size: smaller;
        }
        .name {
          margin-top: 0px;
          width: 300px;
        }
        .main-text {
          margin-top: -5px;
          width: 320px;
          line-height: 1.5rem;
          font-size: 14px;
        }
        .cost {
          margin-top: -30px;
        }
        .last-cost {
          font-size: 2rem;
        }
        .product-button {
          margin: -15px 5px;
          width: 300px;
        }
      }
    }
    .mobile {
      border-radius: 10px 10px 0px 0px;
    }
  }
`;
