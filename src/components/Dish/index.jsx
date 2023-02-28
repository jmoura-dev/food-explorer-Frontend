import { Container, DishImage } from "./styles";
import dishImage from "../../assets/imageDish.svg";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";

import { Button } from "../Button";

export function Dish ({ data, ...rest }) {
    return (
        <Container {...rest}>
            <button>
                <FiHeart/>
            </button>
            
            <DishImage>
                <img
                src={dishImage} 
                alt="imagem da refeição"
                />
            </DishImage>

            <p>Salada Ravanello</p>
            
            <span>R$ 49,97</span>

            <div>
            <button>
                <FiMinus/>
            </button>

            <span>01</span>

            <button>
                <FiPlus/>
            </button>
            </div>

            <Button title="incluir"/>
        </Container>
    )
}