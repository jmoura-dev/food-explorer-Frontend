import { Container, WindowMobile, WindowDesktop } from "./styles";
import { AiOutlineMenu, AiOutlineSchedule, AiOutlineBank, AiOutlineDatabase } from "react-icons/ai";
import { FiX } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import { FiLogOut, FiSearch, FiHeart, FiClipboard } from "react-icons/fi";
import { ButtonText } from "../ButtonText";
import { Input } from "../Input";

import { useEffect, useState } from "react";

import logo from "../../assets/polygonTitle.svg";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function HeaderAdmin () {
    const [ordersAmount, setOrdersAmount] = useState([]);
    const navigate = useNavigate();
    const [isScreenMobile, setIsScreenMobile] = useState(window.innerWidth < 820);
    const [openMenu, setOpenMenu] = useState(true);

    const { signOut } = useAuth();

    function handleSignOut () {
        const confirm = window.confirm("Deseja mesmo sair ?");

        if(confirm) {
        navigate("/")
        signOut();
        }
    }

    console.log(ordersAmount)

    function handleClickOpenMenu () {
        setOpenMenu(false);
    }

    function handleClickCloseMenu () {
        setOpenMenu(true)
        document.querySelector('nav').classList.add('exit');
    }

    useEffect(() => {
        const handleWindowResize = () => {
            setIsScreenMobile(window.innerWidth < 820);
        };
            handleWindowResize();
            window.addEventListener("resize", handleWindowResize);

            return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    useEffect(() => {
        async function fetchOrders () {
            const response = await api.get("/requests");
            setOrdersAmount(response.data);
        }
        fetchOrders();
    }, [ordersAmount.length]);

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
                <Link onClick={handleClickCloseMenu}><FiX/></Link>

                <ul>
                <li>
                    <Link to="/"><AiOutlineBank/>Home</Link>
                </li>

                <li>
                    <Link to="/menu"><FiClipboard/>Menu</Link>
                <li>

                </li>
                    <Link to="/requests"><AiOutlineDatabase/>Pedidos</Link>
                </li>

                <li>
                    <Link to="/favorites"><FiHeart/>Favoritos</Link>
                </li>
                
                <li>
                    <a onClick={handleSignOut}><FiLogOut/>Sair</a>
                </li>
                </ul>

            </nav>
                )
            }

            <header>
                <span>
                <img src={logo} alt="logo" />
                <Link to="/">food explorer</Link>
                </span>

                <p>admin</p>
            </header>


            </WindowMobile>
            ) 
              :
                (
                <WindowDesktop>
                    
                        <div>
                            <span>
                            <img src={logo} alt="logo" />
                            <Link to="/">food explorer</Link>
                            </span>

                            <p>admin</p>
                        </div>

                        <Input 
                        icon={FiSearch}
                        placeholder="Busque por pratos ou ingredientes"
                        />               
                    
                    <Link to="/favorites">Meus favoritos</Link>
                    <Link to="/newdish">Novo prato</Link>

                    <Link to="/requests">
                    <AiOutlineSchedule/>
                        Pedidos ({ordersAmount.length})
                    </Link>

                    <ButtonText 
                    icon={FiLogOut}
                    onClick={handleSignOut}
                    />
                    
                </WindowDesktop>
                )

            }
        </Container>
    )
}