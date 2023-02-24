import { Container } from "./styles";
import logo from "../../assets/polygon.svg"

export function Title({ title }) {
    return (
        <Container>
            <img src={logo} alt="imagem do logo" />
            {title}
        </Container>
    )
}