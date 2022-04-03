import styled from "styled-components";

export const Container = styled.div`
  height: 6rem;
`;

export const Content = styled.div`
  background: var(--withe);
  height: 60%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Infos = styled.div`
  background: var(--grayLigth);
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 2.1rem;
  height: 0.5rem;
  margin: 1rem 0 0.5rem 0;
`;

export const Text = styled.p`
  font-size: 10px;
`

export const TextAdress = styled.p`
  font-size: 8px;
`
