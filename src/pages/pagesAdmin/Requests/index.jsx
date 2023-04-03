import { Container, Content } from "./styles";
import { HeaderAdmin } from "../../../components/HeaderAdmin";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Button } from "../../../components/Button";

import { api } from "../../../services/api";

import { FiArrowLeft } from "react-icons/fi";
import { ButtonText } from "../../../components/ButtonText";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ListRequests } from "../../../components/ListRequests";

export function Requests() {
    const [itemsOrder, setItemsOrder] = useState([]);

    const navigate = useNavigate();
    console.log(itemsOrder)

    useEffect(() => {
        async function fetchRequests () {
            const response = await api.get(`/requests`);
            setItemsOrder(response.data)
        }

        fetchRequests();
    }, [])

    function handleClickBack () {
        navigate(-1)
    }

    return (
        <Container>
            <HeaderAdmin/>
            <Content>
                
            <ButtonText 
            icon={FiArrowLeft}
            title="Voltar"
            onClick={handleClickBack}
            />

            <Section title="Pedidos">
            {
                itemsOrder &&
            <form>
                <nav>
                <span>
                    Status
                </span>

                <span>
                    Código
                </span>

                <span>
                    Detalhamento
                </span>

                <span>
                    Data e hora
                </span>
                </nav>
            {
                itemsOrder.map((item, index) => (
                        <ListRequests
                            key={index}
                            data={{
                                status: item.id,
                                code: item.id,
                                created_at: item.created_at
                            }}
                            details={item.items.map((i, index) => `${i.amount} x ${i.dish_name}${index > item.items.length -2 ? '': ', '}  `)}
                        />
                ))
            }
            </form>
            }

            </Section>

            <Button 
            title="Atualizar pedidos"
            />
            </Content>
            <Footer/>
        </Container>
    )
}