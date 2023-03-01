import { Container, Form } from "./styles";

import { AiOutlineCreditCard, AiOutlineCheckCircle } from "react-icons/ai";
import { BsFillXDiamondFill } from "react-icons/bs";


import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";

import imagePix from "../../assets/imagePix.svg";

import { useState } from "react";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

export function Payment() {
    const [buttonPix, setButtonPix] = useState(true);
    const [buttonCard, setButtonCard] = useState(false);
    const [whenFinish, setWhenFinish] = useState(true);

    function handleButtonPix() {
        setButtonPix(true)
        setButtonCard(false)
    }

    function handleButtonCard() {
        setButtonPix(false)
        setButtonCard(true)
    }

    function handleWhenFinish () {
        setWhenFinish(false)
    }

    function handleClickReturn() {
        setWhenFinish(true)
    }

    return (
        <Container>
            <Header/>
            <Section title="Pagamento">
            <main>
                <div>
                    <ButtonText
                    icon={BsFillXDiamondFill}
                    title="PIX"
                    isActive={buttonPix}
                    onClick={handleButtonPix}
                    />
                    <ButtonText
                    icon={AiOutlineCreditCard}
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
                            <div>
                            {
                                whenFinish ? 
                        ( <Form>
                            <label htmlFor="numberCard">Número do Cartão</label>
                            <Input 
                                placeholder="0000 0000 0000 0000" 
                                type="number"
                                id="numberCard"
                            />

                            <div>
                                <div>
                                <label htmlFor="validity">Validade</label>
                                <Input 
                                placeholder="04/25" 
                                type="data"
                                id="validity"
                                />
                                </div>

                                <div>
                                <label htmlFor="code">CVC</label>
                                <Input 
                                placeholder="000" 
                                type="number"
                                id="code"
                                />
                                </div>
                            </div>

                            <Button 
                            onClick={handleWhenFinish}
                            title="Finalizar pagamento"
                            className="buttonFinalize"
                            />
                        </Form>
                        ) : 
                            (
                            <div className="paymentFinalize">
                                <AiOutlineCheckCircle/>
                                <p>Pagamento aprovado!</p>

                                <Button 
                                onClick={handleClickReturn}
                                title="Voltar"
                                />
                            </div>
                        )
                        }
                        </div>
                        )
                }

            </main>
            </Section>
            <Footer/>
        </Container>
    )
}