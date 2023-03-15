import { Form, Container } from "./styles";

import { api } from "../../services/api";

import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function SignUp () {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isScreenDesktop, setIsScreenDesktop] = useState(false);

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        if(password.length < 6) {
            return alert("A senha precisa ter no mínimo 6 caracteres")
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Conta criada com sucesso!")
            navigate(-1)
        }).catch(error => {
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar.");
            }
        })

    }

    useEffect(() => {
        const handleWindowResize = () => {
            setIsScreenDesktop(window.innerWidth > 800);
        }

        handleWindowResize();

        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    return (
        <Container>

                <Title/>
                <Form>

                <Title/>
                <h1>Crie sua conta</h1>

                <label htmlFor="name">Seu nome</label>
                <Input
                    id="name"
                    type="text"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    onChange={e => setName(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <Input
                    id="email"
                    type="text"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="password">Senha</label>
                <Input
                    id="password"
                    type="password"
                    placeholder="No mínimo 6 caracteres"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button 
                title="Criar conta"
                onClick={handleSignUp}
                />

                <Link to="/">Já tenho uma conta</Link>

                </Form>

        </Container>
    )
}


