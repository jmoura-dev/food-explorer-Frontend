import { Container, Content } from "./styles";
import { HeaderUsers } from "../../../components/HeaderUsers";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Button } from "../../../components/Button";
import { DishFavoritesUsers } from "../../../components/DishFavoritesUsers";

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
            <HeaderUsers/>
            <Content>
                
            <ButtonText 
            icon={FiArrowLeft}
            title="Voltar"
            onClick={handleClickBack}
            />

            <Section title="Meu pedido">
                <ul>
                    <li><DishFavoritesUsers data={{
                    title: "Macarronada"
                    }}/></li>
                    
                    <li>
                    <DishFavoritesUsers data={{
                    title: "Salada Ravanello"
                    }}/>
                    </li>

                    <li>
                    <DishFavoritesUsers data={{
                    title: "Salada Ravanello"
                    }}/>
                    </li>
                    <li>
                    <DishFavoritesUsers data={{
                    title: "Salada Ravanello"
                    }}/>
                    </li>                    <li>
                    <DishFavoritesUsers data={{
                    title: "Salada Ravanello"
                    }}/>
                    </li>

                    <li>
                    <DishFavoritesUsers data={{
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