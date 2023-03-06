import { Container, WindowMobile, WindowDesktop } from "./styles";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { FiX } from "react-icons/fi";

import { FiLogOut, FiSearch } from "react-icons/fi";
import { ButtonText } from "../ButtonText";
import { Input } from "../Input";

import { useEffect, useState } from "react";

import logo from "../../assets/polygonTitle.svg";
import { Link, useNavigate } from "react-router-dom";

export function Header () {
    const [isScreenMobile, setIsScreenMobile] = useState(true);
    const [openMenu, setOpenMenu] = useState(true);
    const navigate = useNavigate();
    
    function handleClickRequests () {
        navigate("/requests")
    };

    function handleClickOpenMenu () {
        setOpenMenu(false)
    }

    function handleClickCloseMenu () {
        setOpenMenu(true)
    }

    useEffect(() => {
        const handleWindowResize = () => {
            setIsScreenMobile(window.innerWidth < 820);
        };
            handleWindowResize();
            window.addEventListener("resize", handleWindowResize);

            return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <Container>
            {
                isScreenMobile ?
            (
            <WindowMobile>
                {
                    openMenu ?
                    (
                <a onClick={handleClickOpenMenu}>
                    <AiOutlineMenu/>
                </a>
                )
                :
                (
            <nav>
                <a onClick={handleClickCloseMenu}><FiX/></a>

                <ul>
                <li><a>Histórico de pedidos</a></li>
                <li><a>Menu</a></li>
                <li><a>Meus favoritos</a></li>
                <li><a>Home</a></li>
                </ul>
            </nav>
                )
            }

            <header>
                <img src={logo} alt="logo" />
                <Link to="/">food explorer</Link>
            </header>

            <div>
                <button onClick={handleClickRequests}>
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