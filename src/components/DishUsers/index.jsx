import { Container, DishImage } from "./styles";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";

import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function DishUsers ({ data, ...rest }) {
    const navigate = useNavigate();
    const { id } = data;
    const [imageDish, setImageDish] = useState(null);

    function handleClickImage () {
        navigate(`/dishview/${id}`);
    }

    useEffect(() => {
        async function fetchImageDish () {
            if(data) {
            setImageDish(`${api.defaults.baseURL}/files/${data.avatar_dish}`);
        }
        }

        fetchImageDish();
    }, [data])

    return (
        <Container {...rest}>
            <button>
                <FiHeart/>
            </button>
            
            <DishImage>
                <img
                src={imageDish} 
                alt={data.name}
                onClick={handleClickImage}
                />
            </DishImage>

            <h1>{data.name}</h1>

            <h2>{data.description}</h2>
            
            <span>{`R$ ${data.price}`}</span>

        <footer>
            <div>
            <button>
                <FiMinus/>
            </button>

            <span>01</span>

            <button>
                <FiPlus/>
            </button>
            </div>

            <Button 
            title="incluir"
            />
        </footer>
        </Container>
    )
}