import { Container } from "./styles";
import { useState } from "react";

export function ListRequests ({ title, data, details, onChange, children, ...rest }) {
  const [color, setColor] = useState("#AB222E");

  function handleColorChange(event) {
    const value = event.target.value;
    switch (value) {
      case "Pendente":
        setColor("#AB222E");
        break;
      case "Preparando":
        setColor("#FBA94C");
        break;
      case "Entregue":
        setColor("#04D361");
        break;
      default:
        setColor("");
        break;
    }
  }

  return (
    <Container
    {...rest}
    >

      <div className="status">
      <p style={{color}}>•</p>
      <select onChange={onChange} onInput={handleColorChange}>
      <option className="pendent" value="Pendente">Pendente</option>
      <option className="preparing" value="Preparando">Preparando</option>
      <option className="delivered" value="Entregue">Entregue</option>
      </select>
      </div>

      <li className="code">
      {data.code}
      </li>

        <li className="details">
      {details}
        </li>

      <li className="date">
      {data.created_at}
      </li>
    </Container>
  )
}