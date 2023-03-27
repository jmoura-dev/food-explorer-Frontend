import { Container, Content } from "./styles";
import { HeaderUsers } from "../../../components/HeaderUsers";
import { Footer } from "../../../components/Footer";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";

import { api } from "../../../services/api";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FiChevronLeft } from 'react-icons/fi';
import { FiMinus, FiPlus } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Ingredients } from "../../../components/Ingredients";



export function DishView ({ ...rest }) {
    const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [image, setImage] = useState(null);
    
    function handleNavigate () {
        navigate(-1)
    };

    useEffect(() => {
        async function fetchDishes() {
            const response = await api.get(`/dishes/${params.id}`);
            setData(response.data)
        }

        fetchDishes();
    }, [])

    useEffect(() => {
        function fetchImage() {
            if(data) {
                setImage(`${api.defaults.baseURL}/files/${data.avatar_dish}`);
            }
        }

        fetchImage();
    }, [data])

    console.log(image)
    console.log(data)
    
    return (
        <Container 
        {...rest}
        >
            <HeaderUsers/>

            <Content>

            <ButtonText 
            icon={FiChevronLeft}
            title="Voltar"
            onClick={handleNavigate}
            />

        {
            data &&

            <form>

                <img src={image} alt="Imagem da refeição" />

            <div>
                <h1>
                    {data.name}
                </h1>

                <p>
                    {data.description}
                </p>

            {
                data.ingredients &&
                <span>
                    {
                        data.ingredients.map(ingredient => (
                            <Ingredients
                            key={String(ingredient.id)}
                            title={ingredient.name}
                            />
                        ))
                    }
                </span>
            }


                
                <footer>
                    <button type="button">
                        <FiMinus/>
                    </button>
                    <span>01</span>

                    <button type="button">
                        <FiPlus/>
                    </button>

                    <Button 
                    icon={AiOutlineShoppingCart} 
                    title={`Incluir - ${data.price}`}
                    />
                </footer>

            </div>
            </form>
        }


            </Content>

            <Footer/>
        </Container>
    )
}