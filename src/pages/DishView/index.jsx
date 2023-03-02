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