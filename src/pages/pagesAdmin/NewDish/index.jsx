import { Container, Form, UploadImage } from "./styles";

import { HeaderAdmin } from "../../../components/HeaderAdmin";
import { Footer } from "../../../components/Footer";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";

import { FiChevronLeft, FiUpload } from 'react-icons/fi';
import { Input } from "../../../components/Input";

export function NewDish () {
  return (
    <Container>
      <HeaderAdmin/>

      <Form>
        <ButtonText icon={FiChevronLeft} title="Voltar"/>

        <h1>Novo prato</h1>

        <UploadImage>
        <label>Imagem do prato</label>
        <input type="file" id="imageDish"/>
        <label htmlFor="imageDish">
          <FiUpload/>
          Selecione imagem
          </label>
        </UploadImage>

        <label htmlFor="name">Nome</label>
        <input 
        type="text"
        id="name"
        placeholder="Ex: Salada Ceasar"
        />

        <label htmlFor="name">Categoria</label>
        <div className="buttonSelect">
        <select id="name">
        <option value="Refeição">Refeição</option>
        <option value="Bebidas">Bebidas</option>
        <option value="Sobremesas">Sobremesas</option>
        </select>
        </div>

        <label htmlFor="ingredients">Ingredientes</label>
        <input type="text" id="ingredients"/>
        
        <label htmlFor="price">Preço</label>
        <input type="number" placeholder="R$ 00,00"/>

        <label htmlFor="textarea">Descrição</label>
        <textarea id="textarea" cols="30" rows="10" 
        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
      

      <Button title="Salvar prato"/>
      </Form>

      <Footer/>
    </Container>
  )
}