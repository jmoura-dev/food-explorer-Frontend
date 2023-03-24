import { Container, Form, UploadImage } from "./styles";

import { HeaderAdmin } from "../../../components/HeaderAdmin";
import { Footer } from "../../../components/Footer";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";
import { DishItem } from "../../../components/DishItem";

import { FiChevronLeft, FiUpload } from 'react-icons/fi';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

export function EditDish () {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Refeição");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const params = useParams();

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);

    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  function handleClickBack () {
    navigate(-1)
  }

  async function handleSaveDish () {
    const formData = new FormData();
    const filterIngredients = ingredients.filter(ingredient => !data.ingredients.includes(ingredient));

    if(!name || !price || !description || !ingredients || !image){
      return alert("Preencha todos os campos para criar o prato.")
    }
    
    if(newIngredient) {
      return alert("Você deixou o campo de ingrediente incompleto, finalize ou apague o conteúdo para adicionar o ingrediente.")
    }

    formData.append("name", name);
    formData.append("category_name", category);
    formData.append("price", price);
    formData.append("ingredients", filterIngredients);
    formData.append("description", description);
    formData.append("avatar_dish", image);

    try{
      await api.put(`/dishes/${params.id}`, formData);
      alert("Prato atualizado com sucesso.")
      navigate("/");

    } catch (error){
      console.error(response.error.data.message)
    }
  }

  useEffect(() => {
    async function fetchDishes () {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDishes();
  }, [])

  return (
    <Container>
      <HeaderAdmin/>

      <Form>
        <ButtonText 
        icon={FiChevronLeft} 
        title="Voltar"
        onClick={handleClickBack}
        />

        <h1>Editar prato</h1>

      {
        data &&
      <main>
      <div className="inputWrapperOne">
        <UploadImage>
        <label>Imagem do prato</label>
        <input 
        type="file" 
        id="imageDish"
        onChange={e => setImage(e.target.files[0])}
        />
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
        placeholder={data.name}
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
        <option value="Sobremesa">Sobremesas</option>
        </select>
        </div>
        </div>

      </div>

      <div className="inputWrapperTwo">

      <div>
        <label htmlFor="ingredients">Ingredientes</label>
        {
          data.ingredients &&
        <div className="ingredients" id="ingredients">
          {
            ingredients.map((ingredient, index) => (
              <DishItem
              key={index}
              value={ingredient}
              onClick={() => handleRemoveIngredient(ingredient)}
              />
            ))
          }
            <DishItem
            placeholder="Adicionar"
            isNew
            onChange={e => setNewIngredient(e.target.value)}
            value={newIngredient}
            onClick={handleAddIngredient}
            />
        </div>
        }

      </div>
        
      <div>
        <label htmlFor="price">Preço</label>
        <input 
        type="number" 
        placeholder={`R$ ${data.price}`}
        onChange={e => setPrice(e.target.value)}
        />

      </div>

      </div>

        <label htmlFor="textarea">Descrição</label>
        <textarea 
        id="textarea" 
        cols="30" rows="7"
        placeholder={data.description}
        onChange={e => setDescription(e.target.value)}
        />
      

      <footer>
        <Button title="Excluir prato"/>
        <Button 
        title="Salvar prato"
        onClick={handleSaveDish}
        />
      </footer>

      </main>
      }
      </Form>

      <Footer/>
    </Container>
  )
}