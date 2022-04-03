import { Container, Details, Content, Image, Div } from "./styles";

export default function CardSystems({ title, details, image }) {
  return (
    <Container img= {image}>
      <Image src={image}/>

      <Content>
        <Div>
        <strong style={{ color: "#ffffff" }}> {title} </strong> 
        <Details> {details} </Details>

        </Div>
      </Content>
    </Container>
  );
}
