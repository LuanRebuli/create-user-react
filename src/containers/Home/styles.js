import styled from "styled-components";
import BackgroundAbs from "../../assets/bg-abs.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: url("${BackgroundAbs}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
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
`;

export const H1 = styled.h1`
  font-size: 34px;
  color: white;
  font-weight: 700;

  text-align: center;
  margin: 30px 0 50px 0;
`;

export const InputLabel = styled.p`
  font-size: 18px;
  color: white;
  text-align: left;
  margin-left: 20px;
  font-weight: 700;
`;

export const Input = styled.input`
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #ffffff40;
  width: 342px;
  height: 58px;
  border-radius: 14px;
  outline: none;
  border: 0 none;
  margin-bottom: 34px;

  font-size: 24px;
  color: #ffffff;
  padding-left: 25px;
  font-weight: 400;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-top: 30px;
  width: 342px;
  height: 74px;

  background: #000000cc;
  border-radius: 14px;

  outline: none;
  border: none;
  cursor: pointer;

  color: white;
  font-size: 17px;
  font-weight: 700;

  &:hover {
    opacity: 0.9;
  }
`;

export const Nav = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-top: 30px;
  width: 342px;
  height: 74px;

  background: #000000cc;
  border-radius: 14px;

  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;

  color: white;
  font-size: 17px;
  font-weight: 700;

  &:hover {
    opacity: 0.9;
  }
`;
