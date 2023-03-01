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
                <DishFavorites/>
                <DishFavorites/>
                <DishFavorites/>
                <DishFavorites/>
                <DishFavorites/>
                <DishFavorites/>
                <DishFavorites/>
                <DishFavorites/>
                </div>
            </Section>

            <Footer/>
        </Container>
    )
}