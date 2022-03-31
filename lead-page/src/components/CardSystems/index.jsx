import { Container, Details, Content, Image } from "./styles";

export default function CardSystems({ title, details, image }) {
  return (
    <Container>
      <Image src={image}/>
      <Content>
        <strong style={{ color: "#ffffff" }}> {title} </strong> 
        <Details> {details} </Details>
      </Content>
    </Container>
  );
}
