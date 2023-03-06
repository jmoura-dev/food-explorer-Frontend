import { Container, WindowMobile, WindowDesktop } from "./styles";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { ButtonText } from "../ButtonText";
import { Button } from "../Button";
import { Input } from "../Input";

import { useEffect, useState } from "react";

import logo from "../../assets/polygonTitle.svg";
import { Link } from "react-router-dom";

export function Header () {
    const [isScreenMobile, setIsScreenMobile] = useState(false)
    
    useEffect(() => {
        const handleWindowResize = () => {
            setIsScreenMobile(window.innerWidth < 820);
        };
            handleWindowResize();
            window.addEventListener("resize", handleWindowResize);

            return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    return (
        <Container>
            {
                isScreenMobile ?
            (
            <WindowMobile>
            <button>
                <AiOutlineMenu/>
            </button>

            <header>
                <img src={logo} alt="logo" />
                <Link to="/">food explorer</Link>
            </header>

            <div>
                <button>
                    <AiOutlineShoppingCart/>
                </button>
                <span>0</span>
            </div>
            </WindowMobile>
            ) 
              :
                (
                <WindowDesktop>
                    
                        <span>
                            <img src={logo} alt="logo" />
                            <Link to="/">food explorer</Link>
                        </span>

                        <Input 
                        icon={FiSearch}
                        placeholder="Busque por pratos ou ingredientes"
                        />               
                    
                    <Link to="/favorites">Meus favoritos</Link>
                    <Link to="#">Histórico de pedidos</Link>

                    <Link to="/requests">
                    <AiOutlineShoppingCart/>
                        Pedidos (0)
                    </Link>

                    <ButtonText icon={FiLogOut}/>
                    
                </WindowDesktop>
                )

            }
        </Container>
    )
}