import { Container, Content, Scrolling } from "./styles";
import { useRef, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { useAuth } from "../../../hooks/auth";

import { HeaderUsers } from "../../../components/HeaderUsers";
import { About } from "../../../components/About";
import { Section } from "../../../components/Section";
import { DishUsers } from "../../../components/DishUsers";
import { Footer } from "../../../components/Footer";

export function Home () {
    const { fetchDishes, dataDishes } = useAuth();
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

      useEffect(() => {
        fetchDishes();
      },[])
  return (
    <Container>

        <HeaderUsers/>

        <Content>
        <About/>

        <Section title="Refeições">
        <div ref={scrollMealList}>
          {
            dataDishes.filter(dish => dish.category_id === 1).length === 0 ?
              ( <p>Você ainda não adicionou nenhuma refeição.</p> )
              :
              (
                dataDishes.filter(dish => dish.category_id === 1).map(dish => (
                  <DishUsers
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
            dataDishes.filter(dish => dish.category_id === 2).length === 0 ?
              ( <p>Você ainda não adicionou nenhuma bebibda.</p> )
              :
              (
                dataDishes.filter(dish => dish.category_id === 2).map(dish => (
                  <DishUsers
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
            dataDishes.filter(dish => dish.category_id === 3).length === 0 ?
              ( <p>Você ainda não adicionou nenhuma sobremesa.</p> )
              :
              (
                dataDishes.filter(dish => dish.category_id === 3).map(dish => (
                  <DishUsers
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
