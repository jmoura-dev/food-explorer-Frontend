import { Form, Container } from "./styles";

import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { useState, useEffect } from "react";

export function SignIn () {
    const [isScreenDesktop, setIsScreenDesktop] = useState(false);

    useEffect(() => {
        const handleWindowResize = () => {
            setIsScreenDesktop(window.innerWidth > 800);
        }

        handleWindowResize();

        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <Container>

                <Title/>
                <Form>

                <Title/>
                <h1>Faça Login</h1>

                <label htmlFor="email">Email</label>
                <Input
                    id="email"
                    type="text"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                />

                <label htmlFor="password">Senha</label>
                <Input
                    id="password"
                    type="password"
                    placeholder="No mínimo 6 caracteres"
                />

                <Button title="Entrar"/>

                <ButtonText title="Criar uma conta"/>

                </Form>

        </Container>
    )
}


