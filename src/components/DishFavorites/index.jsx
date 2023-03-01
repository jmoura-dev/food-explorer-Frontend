import { Container } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { AiOutlineDelete } from "react-icons/ai";

import imageDish from "../../assets/imageDish.svg";

export function DishFavorites () {
    return (
        <Container>
                <span>
                <img src={imageDish} alt="imagem da refeição" />
                </span>

                <div>
                    <h2>
                    Salada Radish
                    </h2>

                    <ButtonText
                    icon={AiOutlineDelete}
                    title="Excluir prato"
                    />
                </div>               
        </Container>
    )
}