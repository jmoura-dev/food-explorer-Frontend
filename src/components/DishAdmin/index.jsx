import { Container, DishImage } from "./styles";
import { BsPencil } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function DishAdmin ({ data, ...rest }) {
    const navigate = useNavigate();

    const [imageDish, setImageDish] = useState(null);
    const { id } = data;

    function handleClickImage () {
        navigate(`/dishview/${id}`);
    }

    function handleClickEditDish () {
        navigate(`/editdish/${id}`);
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
            {
                data &&
            <>
            <button onClick={handleClickEditDish}>
                <BsPencil/>
            </button>
            
            <DishImage>
                <img
                src={imageDish}
                alt={data.name}
                onClick={handleClickImage}
                />
            </DishImage>


            <p>{data.name}</p>    

            <span>{`R$ ${data.price}`}</span>
            </>
           }
        </Container>
    )
}