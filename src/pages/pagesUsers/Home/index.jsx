import { Container, Content, Scrolling } from "./styles";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { Header } from "../../../components/Header";
import { About } from "../../../components/About";
import { Section } from "../../../components/Section";
import { Dish } from "../../../components/Dish";
import { Footer } from "../../../components/Footer";

export function Home () {
        const scrollMealList = useRef(null);
        const scrollDrinkList = useRef(null);
        const scrollDessertList = useRef(null);
      
    
        const handlePrevMealList = () => {
            scrollMealList.current.scrollBy({
            left: -120,
            behavior: 'smooth'
          });
        }
      
        const handleNextMealList = () => {
            scrollMealList.current.scrollBy({
            left: 120,
            behavior: 'smooth'
          });
        }

        const handlePrevDrinkList = () => {
            scrollDrinkList.current.scrollBy({
              left: -120,
              behavior: 'smooth'
            });
          }
        
          const handleNextDrinkList = () => {
            scrollDrinkList.current.scrollBy({
              left: 120,
              behavior: 'smooth'
            });
          }

          const handlePrevDessertList = () => {
            scrollDessertList.current.scrollBy({
              left: -120,
              behavior: 'smooth'
            });
          }
        
          const handleNextDessertList = () => {
            scrollDessertList.current.scrollBy({
              left: 120,
              behavior: 'smooth'
            });
          }
    return (
        <Container>

            <Header/>

            <Content>
            <About/>

            <Section title="Refeições">
            <div ref={scrollMealList}>
                <Dish/>
                <Dish/>
                <Dish/>
                <Dish/>
                <Dish/>
                <Dish/>
                <Dish/>
                <Dish/>
                <Dish/>

            </div>

            
            <Scrolling 
            direction="prev" 
            onClick={handlePrevMealList}
            >
                <FiChevronLeft/>
            </Scrolling>

            <Scrolling direction="next" onClick={handleNextMealList}>
                <FiChevronRight/>
            </Scrolling>
            
            </Section>

            <Section title="Bebidas">
            <div ref={scrollDrinkList}>
                <Dish/>
                <Dish/>
                <Dish/>
            </div>

            <Scrolling 
            direction="prev" 
            onClick={handlePrevDrinkList}
            >
                <FiChevronLeft/>
            </Scrolling>

            <Scrolling 
            direction="next" 
            onClick={handleNextDrinkList}
            >
                <FiChevronRight/>
            </Scrolling>

            </Section>

            <Section title="Sobremesas">
            <div ref={scrollDessertList}>
                <Dish/>
                <Dish/>
                <Dish/>
            </div>

            <Scrolling 
            direction="prev" 
            onClick={handlePrevDessertList}
            >
                <FiChevronLeft/>
            </Scrolling>

            <Scrolling 
            direction="next" 
            onClick={handleNextDessertList}
            >
                <FiChevronRight/>
            </Scrolling>
            </Section>

            </Content>
            
            <Footer/>

        </Container>
    )
}
