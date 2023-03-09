import { Container, Content } from "./styles";
import { HeaderAdmin } from "../../../components/HeaderAdmin";
import { Footer } from "../../../components/Footer";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";

import { FiChevronLeft } from 'react-icons/fi';

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
            <HeaderAdmin/>

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

                <Button title="Editar prato"/>

            </div>
            </form>

            </Content>

            <Footer/>
        </Container>
    )
}