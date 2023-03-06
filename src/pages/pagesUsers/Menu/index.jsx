import { Container, Content } from "./styles";
import { FiX } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

import { Input } from "../../../components/Input";
import { ButtonText } from "../../../components/ButtonText";
import { Section } from "../../../components/Section";
import { Footer } from "../../../components/Footer";

import { useNavigate } from "react-router-dom";

export function Menu () {
    const navigate = useNavigate();

    function handleClickFavorites () {
        navigate("/favorites")
    }

    function handleClickBack () {
        navigate("/")
    }

    return (
        <Container>
            <header>
            <FiX/>
            <h2>Menu</h2>
            </header>

            <Content>

            <Input 
            type="text"
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredients"
            />

            <Section>
            <ButtonText 
            onClick={handleClickFavorites}
            title="Meus favoritos"/>
            </Section>

            <Section>
            <ButtonText 
            onClick={handleClickBack}
            title="Sair"/>
            </Section>

            </Content>

            <Footer/>

        </Container>
    )
}