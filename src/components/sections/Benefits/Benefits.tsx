"use client";

import {
  Container,
  Wrapper,
  Card,
  Icon,
  Number,
  Label,
  Content,
} from "./Benefits.styles";

import {
  FaShieldAlt,
  FaUser,
  FaGem,
  FaStar,
} from "react-icons/fa";

export default function Benefits() {
  return (
    <Container>
      <Wrapper>

        <Card>
          <Icon>
            <FaShieldAlt />
          </Icon>

          <Content>
            <Number>Segurança e ética</Number>
            <Label>
              Procedimentos realizados com máxima segurança e ética profissional.
            </Label>
          </Content>
        </Card>


        <Card>
          <Icon>
            <FaUser />
          </Icon>

          <Content>
            <Number>Atendimento humanizado</Number>

            <Label>
              Escuta ativa e cuidado individualizado em todas as etapas.
            </Label>
          </Content>
        </Card>


        <Card>
          <Icon>
            <FaGem />
          </Icon>

          <Content>
            <Number>Resultados naturais</Number>

            <Label>
              Harmonização e realce da sua beleza com resultados naturais.
            </Label>
          </Content>
        </Card>


        <Card>
          <Icon>
            <FaStar />
          </Icon>

          <Content>
            <Number>Tecnologia avançada</Number>

            <Label>
              Técnicas modernas e tecnologia de ponta para sua saúde e bem-estar.
            </Label>
          </Content>
        </Card>


      </Wrapper>
    </Container>
  );
}