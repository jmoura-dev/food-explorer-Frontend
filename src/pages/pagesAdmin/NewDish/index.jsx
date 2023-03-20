import { Container, Form, UploadImage } from "./styles";

import { api } from "../../../services/api";

import { HeaderAdmin } from "../../../components/HeaderAdmin";
import { Footer } from "../../../components/Footer";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";
import { DishItem } from "../../../components/DishItem";


import { FiChevronLeft, FiUpload } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function NewDish () {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [ingredientes, setIngredientes] = useState([]);
  const [newIngrediente, setNewIngrediente] = useState("");


  const navigate = useNavigate();

  function handleAddIngredient() {
      setIngredientes(prevState => [...prevState, newIngrediente]);

      setNewIngrediente("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredientes(prevState => prevState.filter(ingrediente => ingrediente !== deleted))
  }

  function handleClickBack () {
    navigate(-1);
  }

  async function handleAddNewDish () {
    await api.post("/dishes", { 
      name,
      category_name: category,
      price,
      ingredients: ingredientes,
      description
    });

    alert("Prato adicionado!");
    navigate(-1);
  }

  return (
    <Container>
      <HeaderAdmin/>

      <Form>
        <ButtonText 
        icon={FiChevronLeft} 
        title="Voltar"
        onClick={handleClickBack}
        />

        <h1>Novo prato</h1>
        <h2>Adicionar prato</h2>
      <main>
      <div className="inputWrapperOne">
        <UploadImage>
        <label>Imagem do prato</label>
        <input type="file" id="imageDish"/>
        <label htmlFor="imageDish">
          <FiUpload/>
          Selecione imagem
          </label>
        </UploadImage>

        <div>
        <label htmlFor="name">Nome</label>
        <input
        autoComplete="off"
        type="text"
        id="name"
        placeholder="Ex: Salada Caesar"
        onChange={e => setName(e.target.value)}
        />
        </div>

        <div>
        <label htmlFor="category">Categoria</label>
        <div className="buttonSelect">
        <select 
        id="category"
        onChange={e => setCategory(e.target.value)}
        >
        <option value="Refeição">Refeição</option>
        <option value="Bebidas">Bebidas</option>
        <option value="Sobremesa">Sobremesa</option>
        </select>
        </div>
        </div>

      </div>

      <div className="inputWrapperTwo">

      <div>
        <label htmlFor="ingredients">Ingredientes</label>
        <div className="ingredients" id="ingredients">
        {
          ingredientes.map((ingrediente, index) => (
            <DishItem 
            value={ingrediente}
            key={index}
            onClick={() => handleRemoveIngredient(ingrediente)}
            />
          ))
        }

        <DishItem 
        placeholder="Adicionar" 
        isNew
        onChange={e => setNewIngrediente(e.target.value)}
        value={newIngrediente}
        onClick={handleAddIngredient}
        />
        </div>
      </div>
        
      <div>
        <label htmlFor="price">Preço</label>
        <input 
        type="number" 
        placeholder="R$ 00,00"
        onChange={e => setPrice(e.target.value)}
        />

      </div>

      </div>

        <label htmlFor="textarea">Descrição</label>
        <textarea id="textarea" cols="30" rows="7"
        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
        onChange={e => setDescription(e.target.value)}
        />
      

      <Button 
      title="Salvar prato"
      onClick={handleAddNewDish}
      />

      </main>
      </Form>

      <Footer/>
    </Container>
  )
}