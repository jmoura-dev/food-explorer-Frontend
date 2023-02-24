import { Form } from "./styles";

import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";


export function SignIn () {
    return (
        <Form>

            <Title/>

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
    )
}


