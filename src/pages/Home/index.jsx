import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { About } from "../../components/About";

export function Home () {
    return (
        <Container>
            <Header/>
            <Content>
            <About/>

            </Content>
            <Footer/>
        </Container>
    )
}