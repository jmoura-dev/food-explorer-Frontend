import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { DishFavorites } from "../../components/DishFavorites";

export function Favorites () {
    return (
        <Container>
            <Header/>

            <Section title="Meus favoritos">

                <div>
                <DishFavorites data={{ 
                    title: "Salada Ravanelo",
                }}/>
                <DishFavorites data={{
                    title: "Macarronada"
                }}/>

                <DishFavorites data={{
                    title: "Macarronada"
                }}/>

                <DishFavorites data={{
                    title: "Macarronada"
                }}/>

                <DishFavorites data={{ 
                    title: "Salada Ravanelo"
                }}/>
                </div>

            </Section>

            <Footer/>
        </Container>
    )
}