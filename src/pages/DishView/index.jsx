import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

import { FiChevronLeft } from 'react-icons/fi';
import { FiMinus, FiPlus } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import imageDish from "../../assets/imageDish.svg";
import { Ingredients } from "../../components/Ingredients";


export function DishView ({ data, ...rest }) {
    return (
        <Container 
        {...rest}
        >
            <Header/>

            <Content>

            <ButtonText 
            icon={FiChevronLeft}
            title="Voltar"
            />

            <div>
                <img src={imageDish} alt="Imagem da refeição" />

                <h1>
                    Salada Ravanello
                </h1>

                <p>
                    Rababetes, folhas verdes e molho agridoce salpicados com gergelim.
                </p>
            </div>

            <div>
                <Ingredients title="Alface"/>
                <Ingredients title="Alface"/>
                <Ingredients title="Alface"/>
                <Ingredients title="Alface"/>
                <Ingredients title="Alface"/>
                <Ingredients title="Alface"/>
            </div>

            <footer>
                <button>
                    <FiMinus/>
                </button>
                <span>01</span>

                <button>
                    <FiPlus/>
                </button>

                <Button icon={AiOutlineShoppingCart} title="pedir - R$ 25,00"/>
            </footer>
            </Content>

            <Footer/>
        </Container>
    )
}