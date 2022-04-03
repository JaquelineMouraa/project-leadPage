import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  height: 33rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.4rem;
`;

export const Image = styled.img`
  width: 2.1rem;
  height: 0.5rem;
  margin: 1rem 0 0.5rem 0;
`;

export const Title = styled.h3`
  font-size: 18px;
`;

export const Details = styled.p`
  font-size: 10px;
  margin-top: 0.3rem;
  color: var(--gray);
`;

export const Div = styled.div`
  width: 650px;
  margin-left: 350px;
  margin-top: 2.4rem;
  
  .slick-prev:before,
  .slick-next:before {
    color: var(--orange);
    font-size:  30px;
    margin: 0 auto;
  }
`;
