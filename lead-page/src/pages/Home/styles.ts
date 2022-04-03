import styled from "styled-components";

export const Container = styled.div`
  background: var(--grayLigth);
  height: 30rem;
  width: auto;
`;

export const Content = styled.div`
  background-color: black;
  padding: 0 1rem 1.6rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  opacity: 0.5;
  position: absolute;
  z-index: 4;
  width: 100%;
`;

export const Infos = styled.div`
  height: 3rem;
  width: 70%;
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  color: var(--grayLigth);
  border-bottom: solid 1px var(--white);
`;

export const Div = styled.div`
  display: flex ;
  flex-direction: row;
  align-items: center;
`;

export const Details = styled.p`
  margin-left: 10px;
`;

export const ContainerSlider = styled.div`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;