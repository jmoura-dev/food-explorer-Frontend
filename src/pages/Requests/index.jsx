import { Container, Content, Request } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import imageDish from "../../assets/imageDish.svg";

import { FiArrowRight } from "react-icons/fi";

export function Requests() {
    return (
        <Container>
            <Header/>
            <Content>
                
            <Section title="Meu pedido">
                <Request>
                <span>
                <img src={imageDish} alt="imagem da refeição" />
                </span>

                <div>
                    <h2>
                    Salada Radish
                    </h2>

                    <ButtonText title="Excluir pedido"/>
                </div>
                </Request>
                
            </Section>

            <span>Total: R$ 103,88</span>


            <Button 
            icon={FiArrowRight}
            title="Avançar"
            />
            </Content>
            <Footer/>
        </Container>
    )
}