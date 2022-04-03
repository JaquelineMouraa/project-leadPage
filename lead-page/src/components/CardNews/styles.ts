import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  height: 18rem;
  width: 15rem;
  border-radius: 0.5rem;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 10rem;
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const Div = styled.div`
padding: 0.5rem 1.5rem 0 1.5rem;
`

export const Title = styled.strong`
 color: var(--navy);
`;

export const Details = styled.p`
  color: var(--gray);
  font-size: 10px;
  margin-top: 0.5rem;
`;

export const Data = styled.p`
  color: var(--gray);
  font-size: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 1.5rem 1rem 1.5rem;
`;

