import { Container, Content } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Button } from "../../../components/Button";
import { DishFavorites } from "../../../components/DishFavorites";

import { FiArrowRight } from "react-icons/fi";

export function Requests() {
    return (
        <Container>
            <Header/>
            <Content>
                
            <Section title="Meu pedido">
                <DishFavorites data={{
                    title: "Macarronada"
                }}/>
                <DishFavorites data={{
                    title: "Salada Ravanello"
                }}/>
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