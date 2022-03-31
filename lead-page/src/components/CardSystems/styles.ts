import styled from "styled-components";

export const Container = styled.div`
  /* background: var(--navy); */
  height: 17.7rem;
  width: 12.5rem;
  height: 20rem;
  width: 15rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: flex-end;
`;

export const Content = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 0 2rem 2rem 2rem;
  z-index: 1;
`;

export const Details = styled.p`
  color: var(--white);
  font-size: 8px;
  /* margin-top: 0.5rem; */
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
`;
