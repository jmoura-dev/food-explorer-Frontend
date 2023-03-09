import { Container } from "./styles";
import { FiChevronLeft } from "react-icons/fi";

import { HeaderUsers } from "../../../components/HeaderUsers";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { DishFavoritesUsers } from "../../../components/DishFavoritesUsers";

import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";

export function Favorites () {
    const navigate = useNavigate();

    function handleNavigate () {
        navigate(-1)
    };

    return (
        <Container>
            <HeaderUsers/>

            <Section title="Meus favoritos">

                <ul>
                    <li><DishFavoritesUsers data={{ 
                    title: "Salada Ravanelo",
                    }}/></li>

                    <li><DishFavoritesUsers data={{ 
                    title: "Salada Ravanelo",
                    }}/></li>                    
                        
                    <li><DishFavoritesUsers data={{ 
                        title: "Salada Ravanelo",
                    }}/></li>                    
                    
                    <li><DishFavoritesUsers data={{ 
                        title: "Salada Ravanelo",
                    }}/></li>                    
                    
                    <li><DishFavoritesUsers data={{ 
                        title: "Salada Ravanelo",
                    }}/></li>
                </ul>

                    <footer>
                    <Button
                    icon={FiChevronLeft}
                    title="Voltar"
                    onClick={handleNavigate}
                    />
                    </footer>
            </Section>

            <Footer/>
        </Container>
    )
}