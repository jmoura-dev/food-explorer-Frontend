import { Container, Content } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Button } from "../../../components/Button";
import { DishFavorites } from "../../../components/DishFavorites";

import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { ButtonText } from "../../../components/ButtonText";

import { useNavigate } from "react-router-dom";

export function Requests() {
    const navigate = useNavigate();

    function handleClickBack () {
        navigate(-1)
    }

    function handleClickProgress () {
        navigate("/payment")
    }

    return (
        <Container>
            <Header/>
            <Content>
                
            <ButtonText 
            icon={FiArrowLeft}
            title="Voltar"
            onClick={handleClickBack}
            />

            <Section title="Meu pedido">
                <ul>
                    <li><DishFavorites data={{
                    title: "Macarronada"
                    }}/></li>
                    
                    <li>
                    <DishFavorites data={{
                    title: "Salada Ravanello"
                    }}/>
                    </li>

                    <li>
                    <DishFavorites data={{
                    title: "Salada Ravanello"
                    }}/>
                    </li>
                    <li>
                    <DishFavorites data={{
                    title: "Salada Ravanello"
                    }}/>
                    </li>                    <li>
                    <DishFavorites data={{
                    title: "Salada Ravanello"
                    }}/>
                    </li>

                    <li>
                    <DishFavorites data={{
                    title: "Salada Ravanello"
                    }}/>
                    </li>
                </ul>


            </Section>

            <span>Total: R$ 103,88</span>


            <Button 
            icon={FiArrowRight}
            title="Avançar"
            onClick={handleClickProgress}
            />
            </Content>
            <Footer/>
        </Container>
    )
}