import { Container, Form, UploadImage } from "./styles";

import { HeaderAdmin } from "../../../components/HeaderAdmin";
import { Footer } from "../../../components/Footer";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";
import { DishItem } from "../../../components/DishItem";

import { FiChevronLeft, FiUpload } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

export function EditDish () {
  const navigate = useNavigate();

  function handleClickBack () {
    navigate(-1)
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

        <h1>Editar prato</h1>

        <UploadImage>
        <label>Imagem do prato</label>
        <input type="file" id="imageDish"/>
        <label htmlFor="imageDish">
          <FiUpload/>
          Selecione imagem para alterá-la
          </label>
        </UploadImage>

        <label htmlFor="name">Nome</label>
        <input
        autoComplete="off"
        type="text"
        id="name"
        placeholder="Salada Ceasar"
        />

        <label htmlFor="category">Categoria</label>
        <div className="buttonSelect">
        <select id="category">
        <option value="Refeição">Refeição</option>
        <option value="Bebidas">Bebidas</option>
        <option value="Sobremesas">Sobremesas</option>
        </select>
        </div>

        <label htmlFor="ingredients">Ingredientes</label>
        <div className="ingredients" id="ingredients">
        <DishItem value="Pão Naan"/>
        <DishItem placeholder="Adicionar" isNew/>
        
        </div>
        
        <label htmlFor="price">Preço</label>
        <input type="number" placeholder="R$ 40,00"/>

        <label htmlFor="textarea">Descrição</label>
        <textarea id="textarea" cols="30" rows="7"
        placeholder="A Salada Caesar é uma opção refrescante para o verão."/>
      

      <footer>
      <Button title="Excluir prato"/>

      <Button title="Salvar alterações"/>

      </footer>
      </Form>

      <Footer/>
    </Container>
  )
}