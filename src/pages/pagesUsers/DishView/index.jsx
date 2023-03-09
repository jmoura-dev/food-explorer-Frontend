import { Container, Content } from "./styles";
import { HeaderUsers } from "../../../components/HeaderUsers";
import { Footer } from "../../../components/Footer";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";

import { FiChevronLeft } from 'react-icons/fi';
import { FiMinus, FiPlus } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import imageDish from "../../../assets/imageDish.svg";
import { Ingredients } from "../../../components/Ingredients";

import { useNavigate } from "react-router-dom";


export function DishView ({ data, ...rest }) {
    const navigate = useNavigate();

    function handleNavigate () {
        navigate(-1)
    };

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

            <form>

                <img src={imageDish} alt="Imagem da refeição" />

            <div>
                <h1>
                    Salada Ravanello
                </h1>

                <p>
                    Rababetes, folhas verdes e molho agridoce salpicados com gergelim.
                </p>

                <span>
                <Ingredients title="Alface"/>
                <Ingredients title="Alface"/>
                <Ingredients title="Alface"/>     
                </span>

                
                <footer>
                    <button type="button">
                        <FiMinus/>
                    </button>
                    <span>01</span>

                    <button type="button">
                        <FiPlus/>
                    </button>

                    <Button icon={AiOutlineShoppingCart} title="Incluir - R$ 25,00"/>
                </footer>

            </div>
            </form>

            </Content>

            <Footer/>
        </Container>
    )
}