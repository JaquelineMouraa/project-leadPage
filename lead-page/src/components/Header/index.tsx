import { Container, Content, Image, Infos, Div, Details } from "./styles";

import icon from "../../images/patt.png";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";


export function Header() {
  return (
    <>
      <Container>
        <Content>
          <Infos>
            <Div>
              <strong> CÂMBIO </strong>
              <Details>01 DE OUT 2021 </Details>
              <Details>$1 USD-BRA = R$ 5,66 </Details>
              <Details>$1 EUR-BRA = R$ 6,56 </Details>
            </Div>
            <Div>
              <BsFillTelephoneFill style={{ width: "15px", height: "15px" }} />
              <Details>4000.1798 </Details>
              <RiSendPlaneFill
                style={{ width: "15px", height: "15px", marginLeft: "10px" }}
              />
              <Details>99999.9999 </Details>
            </Div>
          </Infos>
          <Image src={icon}></Image>
        </Content>
      </Container>
    </>
  );
}
