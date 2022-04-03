import styled from "styled-components";

export const Container = styled.div`
  height: 21rem;
  width: 16rem;
  position: absolute;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 0 2rem 2rem 2rem;

  position: relative;
  width: 80%;
  height: calc(100% - 38px);
  margin: 0 auto;
  top: 19px;
  border-radius: 3px;
`;
export const Div = styled.div`
    width: 100px;
  height: 50px;
  float: left;
`;

export const Details = styled.p`
  color: var(--navy);
  font-size: 8px;
  overflow: auto;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
`;
