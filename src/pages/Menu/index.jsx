import { Container } from "./styles";
import { FiX } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";

export function Menu () {
    return (
        <Container>
            <header>
            <FiX/>
            <h2>Menu</h2>
            </header>

            <Input 
            type="text"
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredients"
            />

            <Section>
            <ButtonText title="Meus favoritos"/>
            </Section>

            <Section>
            <ButtonText title="Sair"/>
            </Section>

            <Footer/>

        </Container>
    )
}