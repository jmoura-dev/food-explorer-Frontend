import { Container } from "./styles";

export function Input({ icon: Icon, ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={19.5}/>}
            <input {...rest}/>
        </Container>
    )
}