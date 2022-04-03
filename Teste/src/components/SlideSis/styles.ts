import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  height: 55rem;
  padding-top: 2rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 2.1rem;
  height: 0.5rem;
  margin: 1rem 0 0.5rem 0;
`;

export const Title = styled.h3`
  font-size: 18px;
  color: var(--navy);
`;

export const Details = styled.p`
  font-size: 10px;
  margin-top: 0.3rem;
  color: var(--gray);
`;

export const Div = styled.div`
  width: 55%;
  margin-top: 5rem;
  margin-left: calc(60% - 40%);
`;
