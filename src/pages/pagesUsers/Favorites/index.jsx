import { Container } from "./styles";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { DishFavorites } from "../../../components/DishFavorites";

export function Favorites () {
    return (
        <Container>
            <Header/>

            <Section title="Meus favoritos">

                <ul>
                    <li><DishFavorites data={{ 
                    title: "Salada Ravanelo",
                    }}/></li>

                    <li><DishFavorites data={{ 
                    title: "Salada Ravanelo",
                    }}/></li>                    
                        
                    <li><DishFavorites data={{ 
                        title: "Salada Ravanelo",
                    }}/></li>                    
                    
                    <li><DishFavorites data={{ 
                        title: "Salada Ravanelo",
                    }}/></li>                    
                    
                    <li><DishFavorites data={{ 
                        title: "Salada Ravanelo",
                    }}/></li>
                </ul>

            </Section>

            <Footer/>
        </Container>
    )
}