import { Container } from "./styles";
import { FiChevronLeft } from "react-icons/fi";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { DishFavorites } from "../../../components/DishFavorites";

import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";

export function Favorites () {
    const navigate = useNavigate();

    function handleNavigate () {
        navigate(-1)
    };

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