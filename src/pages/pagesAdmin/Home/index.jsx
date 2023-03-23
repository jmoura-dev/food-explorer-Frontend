import { Container, Content, Scrolling } from "./styles";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { api } from "../../../services/api";

import { HeaderAdmin} from "../../../components/HeaderAdmin";
import { About } from "../../../components/About";
import { Section } from "../../../components/Section";
import { DishAdmin } from "../../../components/DishAdmin";
import { Footer } from "../../../components/Footer";

export function Home () {
        const scrollMealList = useRef(null);
        const scrollDrinkList = useRef(null);
        const scrollDessertList = useRef(null);
        const [dishes, setDishes] = useState([]);
        
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

        useEffect(() => {
          async function fetchDishes() {
            const response = await api.get("/dishes")
            setDishes( response.data )
          }

          fetchDishes();
        }, []);

    return (
        <Container>

            <HeaderAdmin/>

            <Content>
            <About/>

            <Section title="Refeições">
            <div ref={scrollMealList}>

              {
                dishes.filter(dish => dish.category_id === 1).length === 0 ?
                ( <p>Você ainda não adicionou nenhum prato.</p> )
                :
                (
                  dishes.filter(dish => dish.category_id === 1).map(dish => (
                    <DishAdmin
                    key={String(dish.id)}
                    data={dish}
                    />
                  ))
                )
              }
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
            {
                dishes.filter(dish => dish.category_id === 2).length === 0 ?
                ( <p>Você ainda não adicionou nenhum prato.</p> )
                :
                (
                  dishes.filter(dish => dish.category_id === 2).map(dish => (
                    <DishAdmin
                    key={String(dish.id)}
                    data={dish}
                    />
                  ))
                )
              }
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
            {
                dishes.filter(dish => dish.category_id === 3).length === 0 ?
                ( <p>Você ainda não adicionou nenhum prato.</p> )
                :
                (
                  dishes.filter(dish => dish.category_id === 3).map(dish => (
                    <DishAdmin
                    key={String(dish.id)}
                    data={dish}
                    />
                  ))
                )
              }
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
