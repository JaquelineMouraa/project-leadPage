import { Container, Details, Content, Image, Div, Title, Data } from "./styles";

export default function CardNews({ title, details, date, image }) {
  return (
    <Container>
      <Content>
        <Image src={image} />
        <Div>
        <Title > {title} </Title>
        <Details>{details}</Details>
        <Data>
          Campanha válida até {date}
        </Data>
        </Div>
      </Content>
    </Container>
  );
}
