import { Container, Content } from "./styles";
import { FiX } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

import { Input } from "../../../components/Input";
import { ButtonText } from "../../../components/ButtonText";
import { Section } from "../../../components/Section";
import { Footer } from "../../../components/Footer";

import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Ingredients } from "../../../components/Ingredients";
import { ThreeDots } from "react-loader-spinner";

export function Menu () {
    const { isLoading, setIsLoading } = useAuth();
    const [image, setImage] = useState({});
    const [search, setSearch] = useState("");
    const [dishes, setDishes] = useState("");
    const navigate = useNavigate();

    function handleClickFavorites () {
        navigate("/favorites")
    }

    function handleClickBack () {
        navigate("/")
    }

    function viewDetails (dishId) {
        navigate(`/dishview/${dishId}`);
    }

    useEffect(() => {
        async function searchDishes () {
            setIsLoading(true);
            const response = await api.get(`/dishes?dish=${search}&ingredients=${search}`);
            setDishes(response.data);
            setIsLoading(false);
        }

        searchDishes();
    }, [search]);

    useEffect(() => {
        function fetchImageDish () {
            if(search.length > 0) {
                setImage((prevState) => ({
                    ...prevState,
                    ...dishes.reduce((acc, dish) => {
                        if (dish.avatar_dish) {
                            acc[dish.id] = `${api.defaults.baseURL}/files/${dish.avatar_dish}`;
                        }
                        return acc;
                    }, {}),
                }));
            }
        };

        fetchImageDish();
    }, [dishes]);

    return (
        <Container>
            <header>
            <ButtonText
            icon={FiX}
            onClick={handleClickBack}
            />
            <h2>Menu</h2>
            </header>

            <Content>

            {
                isLoading ?
            (
                <div className="loader">
                    <ThreeDots
                    color="#126b37"
                    width="100"
                    height="100"
                    />
                </div>
            )
            :
            (
                <>
            <Input 
            type="text"
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredients"
            onChange={e => setSearch(e.target.value)}
            />

            {
                search.length > 0 ?
                (
            <li>
                    {
                    dishes.map(dish => (
                        <a
                        key={dish.id}
                        onClick={() => viewDetails(dish.id)}
                        >
                            <img 
                            src={image[dish.id]} 
                            alt={`imagem do prato - ${dish.name}`} 
                            />

                            <h2>{dish.name}</h2>

                            <p
                            className="ingredients"
                            >
                                {dish.ingredients.map(ingredient =>
                                <Ingredients
                                key={String(ingredient.id)}
                                title={ingredient.name}
                                />)}
                            </p>

                        </a>
                    )
                    )}
            </li>
            )
            :
            (    
            <>
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
            </>
            )
            }
            </>
            )
        }

            </Content>

            <Footer/>

        </Container>
    )
}