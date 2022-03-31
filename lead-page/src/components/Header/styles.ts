import styled from "styled-components";

export const Container = styled.div`
  background: var(--grayLigth);
  height: 30rem;
`;

export const Content = styled.div`
  background: var(--gray);
  padding: 0 1rem 1.6rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  opacity: 0.3;
`;

export const Image = styled.img`
  width: 2.1rem;
  height: 0.5rem;
  margin: 1rem 0 0.5rem 0;
`;

export const Infos = styled.div`
  height: 3rem;
  width: 70%;
  font-size: 8px;
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