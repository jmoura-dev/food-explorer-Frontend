import { Container } from "./styles";
import { FiChevronLeft } from "react-icons/fi";

import { HeaderUsers } from "../../../components/HeaderUsers";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { DishFavoritesUsers } from "../../../components/DishFavoritesUsers";

import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

export function Favorites () {
    const [image, setImage] = useState({});
    const navigate = useNavigate();
    const { fetchDishes, dataDishes } = useAuth();

    function handleNavigate () {
        navigate(-1)
    };

    useEffect(() => {
        fetchDishes();
    }, [])

    useEffect(() => {
        function fetchImageDish () {
            if(dataDishes) {
                setImage((prevState) => ({
                    ...prevState,
                    ...dataDishes.reduce((acc, dish) => {
                        if (dish.avatar_dish) {
                            acc[dish.id] = `${api.defaults.baseURL}/files/${dish.avatar_dish}`;
                        }
                        return acc;
                    }, {}),
                }));
            }
        };

        fetchImageDish();
    }, [dataDishes])


    return (
        <Container>
            <HeaderUsers/>

            <Section title="Meus favoritos">

            {
                dataDishes && 
                <ul>
                    <li>
                    {
                        dataDishes.map((dish, index) => (
                            <DishFavoritesUsers
                            key={String(index)}
                            data={{
                                title: dish.name,
                                imageDish: image[dish.id],
                            }}
                            />
                        ))
                    }
                    </li>
                </ul>
            }

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