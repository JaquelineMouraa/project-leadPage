import styled from "styled-components";

export const Container = styled.div`
  height: 17rem;
  width: 12rem;

  display: flex;
  align-items: flex-end;
`;

export const Content = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 2rem;
  z-index: 4;
  position: absolute;
`;

export const Details = styled.p`
  color: var(--white);
  font-size: 8px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
`;
