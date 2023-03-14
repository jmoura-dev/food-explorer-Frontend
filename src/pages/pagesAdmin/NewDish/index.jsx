import { Container, Form, UploadImage } from "./styles";

import { HeaderAdmin } from "../../../components/HeaderAdmin";
import { Footer } from "../../../components/Footer";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";
import { DishItem } from "../../../components/DishItem";

import { FiChevronLeft, FiUpload } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

export function NewDish () {
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
        />
        </div>

        <div>
        <label htmlFor="category">Categoria</label>
        <div className="buttonSelect">
        <select id="category">
        <option value="Refeição">Refeição</option>
        <option value="Bebidas">Bebidas</option>
        <option value="Sobremesas">Sobremesas</option>
        </select>
        </div>
        </div>

      </div>

      <div className="inputWrapperTwo">

      <div>
        <label htmlFor="ingredients">Ingredientes</label>
        <div className="ingredients" id="ingredients">
        <DishItem value="Pão Naan"/>
        <DishItem placeholder="Adicionar" isNew/>
        </div>
      </div>
        
      <div>
        <label htmlFor="price">Preço</label>
        <input type="number" placeholder="R$ 00,00"/>

      </div>

      </div>

        <label htmlFor="textarea">Descrição</label>
        <textarea id="textarea" cols="30" rows="7"
        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."/>
      

      <Button title="Salvar prato"/>

      </main>
      </Form>

      <Footer/>
    </Container>
  )
}