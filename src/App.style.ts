import styled from "styled-components";
import { between } from "polished";

//colors

export const ColorPrimary = "#e8e8e8";

export const ColorSecondary = "#42e8cb";

export const ColorAdditional = "#383838";

//headers

export const H1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: ${between("36px", "54px", "320px", "640px")};
  font-weight: 800;

  @media (min-width: 640px) {
    font-size: 54px;
  }
`;

export const H2 = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: ${between("27px", "36px", "320px", "640px")};
  font-weight: 700;

  @media (min-width: 640px) {
    font-size: 36px;
  }
`;

export const H3 = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 27px;
  font-weight: 600;
`;

export const H4 = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-size: ${between("18px", "27px", "320px", "640px")};
  font-weight: 500;

  @media (min-width: 640px) {
    font-size: 27px;
  }
`;

export const H5 = styled.h5`
  font-family: "Montserrat", sans-serif;
  font-size: ${between("12px", "18px", "320px", "640px")};
  font-weight: 400;
  margin: 0;

  @media (min-width: 640px) {
    font-size: 18px;
  }
`;

export const H6 = styled.h6`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 400;
`;

//containers

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  background: #ebebeb;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 90%;
  height: 100%;

  padding-top: 30px;

  display: flex;
  flex-direction: column;

  align-items: center;
`;
