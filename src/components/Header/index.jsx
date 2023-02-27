import { Container } from "./styles";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { ButtonText } from "../ButtonText";

import logo from "../../assets/polygonTitle.svg";

export function Header () {
    return (
        <Container>
            <button>
                <AiOutlineMenu/>
            </button>

            <header>
                <img src={logo} alt="logo" />
                <ButtonText title="food explorer"/>
            </header>

            <div>
                <button>
                    <AiOutlineShoppingCart/>
                </button>
                <span>0</span>
            </div>
        </Container>
    )
}