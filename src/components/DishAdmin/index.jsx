import { Container, DishImage } from "./styles";
import dishImage from "../../assets/imageDish.svg";
import { BsPencil } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

export function DishAdmin ({ data, ...rest }) {
    const navigate = useNavigate();

    function handleClickImage () {
        navigate("/dishview/3")
    }

    function handleClickEditDish () {
        navigate("/editdish")
    }

    return (
        <Container {...rest}>
            <button onClick={handleClickEditDish}>
                <BsPencil/>
            </button>
            
            <DishImage>
                <img
                src={dishImage} 
                alt="imagem da refeição"
                onClick={handleClickImage}
                />
            </DishImage>

            <p>Salada Ravanello</p>
            
            <span>R$ 49,97</span>

        </Container>
    )
}