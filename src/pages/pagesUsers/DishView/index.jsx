import { Container, Content } from "./styles";
import { HeaderUsers } from "../../../components/HeaderUsers";
import { Footer } from "../../../components/Footer";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";

import { api } from "../../../services/api";
import { useCart } from "../../../hooks/cart";

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

    const [amount, setAmount] = useState(1);
    const [cart, setCart] = useCart();
    
    function handleNavigate () {
        navigate(-1)
    };

    function handleIncrease () {
        if(amount >= 15) {
            return alert("Só são permitidos quinze pratos por pedido.")
        }
        setAmount(prevState => prevState + 1);
    }

    function handleDecrease () {
        if(amount <= 1) {
            return alert("o valor mínimo é um prato por pedido.");
        }

        setAmount(prevState => prevState - 1);
    }

    function handleAddNewItemCart () {
        const newCartItem = {
            id: data.id,
            name: data.name,
            amount,
            imageDish: image,
            unit_price: data.price,
            total_price: amount * data.price
        };

        setCart(prevCart => [...prevCart, newCartItem]);
        setAmount(1);
    }

    useEffect(() => {
        async function fetchDishes() {
            const response = await api.get(`/dishes/${params.id}`);
            setData(response.data);
        }

        fetchDishes();
    }, []);

    useEffect(() => {
        function fetchImage() {
            if(data) {
                setImage(`${api.defaults.baseURL}/files/${data.avatar_dish}`);
            }
        }

        fetchImage();
    }, [data]);
    
    return (
        <Container 
        {...rest}
        >
            <HeaderUsers
            cartItems={cart.length}
            />

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
                    <button 
                    type="button"
                    onClick={handleDecrease}
                    >
                        <FiMinus/>
                    </button>
                    <span
                    >
                        {amount}
                    </span>

                    <button 
                    type="button"
                    onClick={handleIncrease}
                    >
                        <FiPlus/>
                    </button>

                    <Button 
                    icon={AiOutlineShoppingCart} 
                    title={`Incluir - ${data.price}`}
                    onClick={handleAddNewItemCart}
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