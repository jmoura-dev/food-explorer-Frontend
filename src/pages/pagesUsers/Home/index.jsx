import { Container, Content, Scrolling } from "./styles";
import { useRef, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { useAuth } from "../../../hooks/auth";

import { HeaderUsers } from "../../../components/HeaderUsers";
import { About } from "../../../components/About";
import { Section } from "../../../components/Section";
import { DishUsers } from "../../../components/DishUsers";
import { Footer } from "../../../components/Footer";
import { api } from "../../../services/api";

export function Home () {
    const [favorites, setFavorites] = useState([]);
    const [search, setSearch] = useState("");
    const { fetchDishes, dataDishes, user } = useAuth();
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

      async function handleAddFavorites (dishId) {

        try {
          const response = await api.get(`favorites/${user.id}`);
          const dishesFavorites = response.data;
          const isFavorite = dishesFavorites.filter(item => item.id === dishId).length;

          if(isFavorite) {
            await api.delete(`favorites/${dishId}`);
            setFavorites(favorites.filter(dish => dish !== dishId));
            alert("Prato removido dos favoritos.");

          } else {
            await api.post("favorites", {
              dish_id : dishId,
              user_id: user.id
            });
            setFavorites([...favorites, dishId]);
            alert("Prato salvo em favoritos.");
          }

      }catch (error) {
        console.error(error)
        alert("Não foi possível adicionar aos favoritos.");
      }
      }

      // useEffect(() => {
      //   async function searchDishes() {
      //     const response = await api.get(`/dishes?name=${search}&ingredients=${searchIngredients}`);
      //     setDishes(response.data);
      //   }

      //   searchDishes();
      // }, [])

      useEffect(() => {
        async function fetchFavorites () {
          const response = await api.get(`favorites/${user.id}`);
          const listFavorites = response.data.map(item => item.id);
          setFavorites(listFavorites);
        }

        fetchFavorites();
      }, []);

      useEffect(() => {
        fetchDishes();
      }, []);
      console.log(dataDishes)

  return (
    <Container>

        <HeaderUsers
        onChange={e => setSearch(e.target.value)}
        />

        <Content>
        <About/>

        <Section title="Refeições">
        <div ref={scrollMealList}>
          {
            dataDishes.filter(dish => dish.category_id === 1).length === 0 ?
              ( <p>Nenhuma refeição disponível.</p> )
              :
              (
                dataDishes.filter(dish => dish.category_id === 1).map(dish => (
                  <DishUsers
                  key={String(dish.id)}
                  data={dish}
                  onClick={() => handleAddFavorites(dish.id)}
                  isFavorite={favorites.includes(dish.id)}
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

        <Section title="Sobremesas">
        <div ref={scrollDessertList}>
          {
            dataDishes.filter(dish => dish.category_id === 3).length === 0 ?
              ( <p>Nenhuma sobremesa disponível.</p> )
              :
              (
                dataDishes.filter(dish => dish.category_id === 3).map(dish => (
                  <DishUsers
                  key={String(dish.id)}
                  data={dish}
                  onClick={() => handleAddFavorites(dish.id)}
                  isFavorite={favorites.includes(dish.id)}
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


        <Section title="Bebidas">
        <div ref={scrollDrinkList}>
          {
            dataDishes.filter(dish => dish.category_id === 2).length === 0 ?
              ( <p>Nenhuma bebida disponível.</p> )
              :
              (
                dataDishes.filter(dish => dish.category_id === 2).map(dish => (
                  <DishUsers
                  key={String(dish.id)}
                  data={dish}
                  onClick={() => handleAddFavorites(dish.id)}
                  isFavorite={favorites.includes(dish.id)}
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

        </Content>
        
        <Footer/>

    </Container>
  )
}
