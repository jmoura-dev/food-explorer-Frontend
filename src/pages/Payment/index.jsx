import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";

import imagePix from "../../assets/imagePix.svg"

import { useEffect, useState } from "react";
import { ButtonText } from "../../components/ButtonText";

export function Payment() {
    const [buttonPix, setButtonPix] = useState(true);
    const [buttonCard, setButtonCard] = useState(false);

    function handleButtonPix() {
        setButtonPix(true)
        setButtonCard(false)
    }

    function handleButtonCard() {
        setButtonPix(false)
        setButtonCard(true)
    }

    return (
        <Container>
            <Header/>
            <Section title="Pagamento">
            <main>
                <div>
                    <ButtonText 
                    title="PIX"
                    isActive={buttonPix}
                    onClick={handleButtonPix}
                    />
                    <ButtonText 
                    title="Cartão" 
                    isActive={buttonCard}
                    onClick={handleButtonCard}
                    />
                </div>

                {
                    buttonPix ? (                
                        <img 
                        src={imagePix} 
                        alt="imagem do código pix" 
                        />) 
                        : 
                        (
                        <Form>
                            
                        </Form>
                        )
                }

            </main>
            </Section>
            <Footer/>
        </Container>
    )
}