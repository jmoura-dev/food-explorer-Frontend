import { Container } from "./styles";
import { FiChevronLeft } from "react-icons/fi";

import { HeaderAdmin } from "../../../components/HeaderAdmin";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { DishFavoritesAdmin } from "../../../components/DishFavoritesAdmin";

import { api } from "../../../services/api";

import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { useEffect, useState } from "react";

export function Favorites () {
    const [image, setImage] = useState({});
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);

    function handleNavigate () {
        navigate(-1)
    };

    async function handleRemoveFavorites (deleted) {
        await api.delete(`/favorites/${deleted}`);
        const response = await api.get("/favorites");
        setFavorites(response.data);
        alert("Prato removido dos favoritos.")
    }

    useEffect(() => {
        async function fetchFavorites() {
            const response = await api.get("/favorites");
            setFavorites(response.data);
        }

        fetchFavorites();
    }, [])

    useEffect(() => {
        function fetchImageDish () {
            if(favorites) {
                setImage((prevState) => ({
                    ...prevState,
                    ...favorites.reduce((acc, dish) => {
                        if (dish.avatar_dish) {
                            acc[dish.id] = `${api.defaults.baseURL}/files/${dish.avatar_dish}`;
                        }
                        return acc;
                    }, {}),
                }));
            }
        };

        fetchImageDish();
    }, [favorites])


    return (
        <Container>
            <HeaderAdmin/>

            <Section title="Meus favoritos">

            {
                favorites && 
                <ul>
                    <li>
                    {
                        favorites.map((dish, index) => (
                            <DishFavoritesAdmin
                            key={String(index)}
                            data={{
                                title: dish.name,
                                imageDish: image[dish.id],
                            }}
                            onClick={() => handleRemoveFavorites(dish.id)}
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