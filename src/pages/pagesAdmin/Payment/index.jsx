import { Container, Content, Form, Request } from "./styles";

import { AiOutlineCreditCard, AiOutlineCheckCircle } from "react-icons/ai";
import { BsFillXDiamondFill } from "react-icons/bs";


import { HeaderAdmin } from "../../../components/HeaderAdmin";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Input } from "../../../components/Input";
import { DishFavoritesAdmin } from "../../../components/DishFavoritesAdmin";

import imagePix from "../../../assets/imagePix.svg";

import { useEffect, useState } from "react";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";

import { useNavigate } from "react-router-dom";

export function Payment() {
    const [buttonPix, setButtonPix] = useState(true);
    const [buttonCard, setButtonCard] = useState(false);
    const [whenFinish, setWhenFinish] = useState(true);

    const [isScreenDesktop, setIsScreeDesktop] = useState(window.innerWidth > 820); 

    const navigate = useNavigate();

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
        navigate("/")
    }

    useEffect(() => {
        const handleWindowResize = () => {
            setIsScreeDesktop(window.innerWidth > 820);
        }
        handleWindowResize();

        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [isScreenDesktop]);

    return (
        <Container>
            <HeaderAdmin/>

        <Content>

            {
                isScreenDesktop &&
            <Request>
                <h1>Meus pedidos</h1>

                <ul>
                    <li><DishFavoritesAdmin data={{
                        title: "Macarronada",
                        amount: "2",
                        price: "28,99"
                    }}/></li>

                    <li><DishFavoritesAdmin data={{
                        title: "Peixada",
                        amount: "3",
                        price: "30,00"
                    }}/></li>      

                    <li><DishFavoritesAdmin data={{
                        title: "Salada Ravanello",
                        amount: "2",
                        price: "18,99"
                    }}/></li>

                    <li><DishFavoritesAdmin data={{
                        title: "Cuscuz",
                        amount: "1",
                        price: "14,99"
                    }}/></li>                   
            
            <li><DishFavoritesAdmin data={{
                        title: "Cuscuz",
                        amount: "1",
                        price: "14,99"
                    }}/></li>  

                </ul>

                <span>Total: R$ 103,99</span>
            </Request>
            }

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

            </Content>

            <Footer/>
        </Container>
    )
}