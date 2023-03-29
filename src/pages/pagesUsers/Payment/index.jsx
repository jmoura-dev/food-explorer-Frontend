import { Container, Content, Form, Request } from "./styles";

import { AiOutlineCreditCard, AiOutlineCheckCircle } from "react-icons/ai";
import { BsFillXDiamondFill } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";


import { HeaderUsers } from "../../../components/HeaderUsers";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Input } from "../../../components/Input";
import { DishFavoritesUsers } from "../../../components/DishFavoritesUsers";

import imagePix from "../../../assets/imagePix.svg";

import { useEffect, useState } from "react";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";

import { useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/cart";

export function Payment() {
    const [cart, setCart] = useCart();
    const [totalPrice, setTotalPrice] = useState("");
    const [buttonPix, setButtonPix] = useState(true);
    const [buttonCard, setButtonCard] = useState(false);
    const [whenFinish, setWhenFinish] = useState(true);
    const [finish, isFinish] = useState(false);

    const [isScreenDesktop, setIsScreeDesktop] = useState(window.innerWidth > 820); 

    const navigate = useNavigate();

    function handleRemoveItemCart (deleted) {
        setCart(prevCart => prevCart.filter(item => item !== deleted));
    }

    function handleBack () {
        if(!finish) {
            navigate(-1);
        } else {
            navigate("/")
        }
    }

    function handleButtonPix() {
        setButtonPix(true)
        setButtonCard(false)
    }

    function handleButtonCard() {
        setButtonPix(false)
        setButtonCard(true)
    }

    function handleWhenFinish () {
        setWhenFinish(false);
        isFinish(true);
    }

    function handleClickReturn() {
        setWhenFinish(true)
        navigate("/")
    }

    useEffect(() => {
        const carts = cart.map(item => item.total_price);
        const sum = carts.reduce((acc, curr) => acc + curr, 0);
        setTotalPrice(sum.toFixed(2));
    }, [cart]);

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
            <HeaderUsers/>

        <Content>

            {
                isScreenDesktop &&
            <Request>
                <h1>Meus pedidos</h1>

                <ul>
                {
                    cart &&
                    <li>
                    {
                        cart.map((item, index) => (
                            <DishFavoritesUsers
                            key={index}
                            data={{
                                title: item.name,
                                amount: item.amount,
                                price: item.unit_price
                            }}
                            onClick={() => handleRemoveItemCart(item)}
                            loading={finish}
                            />
                        ))
                    }
                    </li>
                }
                </ul>

                <span>Total: R$ {totalPrice}</span>

                <Button
                icon={FiArrowLeft}
                title="Voltar"
                onClick={handleBack}
                />
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
                                loading={finish}
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