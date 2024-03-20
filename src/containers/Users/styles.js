import styled from "styled-components";
import BackgroundBlocks from "../../assets/bg-blocks.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: url("${BackgroundBlocks}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100vh;
`;

export const Image = styled.img`
  margin-top: 83px;
  margin-bottom: 20px;
`;

export const ContainerItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );

  padding: 50px 36px;
  border-radius: 61px 61px 61px 61px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const H1 = styled.h1`
  font-size: 34px;
  color: white;
  font-weight: 700;

  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-top: 30px;
  width: 342px;
  height: 74px;

  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 14px;

  outline: none;
  cursor: pointer;
  text-decoration: none;

  color: white;
  font-size: 17px;
  font-weight: 700;

  &:hover {
    opacity: 0.9;
  }

  img {
    transform: rotate(180deg);
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;

  box-shadow: 0px 4px 4px 0px #00000040;
  background: #ffffff40;
  width: 342px;
  height: 58px;
  border-radius: 14px;
  outline: none;
  border: 0 none;
  margin-top: 25px;

  p {
    font-size: 24px;
    font-weight: 400;
    color: white;
  }
  button {
    cursor: pointer;
    background: none;
    border: none;
  }
`;
