import { Container } from "./styles";
import { BiAdjust } from "react-icons/bi";

export function ListRequests ({ title, data, details, children, ...rest }) {
  return (
    <Container
    {...rest}
    >

      <div>
      <select>
      <option className="pendent" value="pendent">Pendente</option>
      <option className="preparing" value="preparing">Preparando</option>
      <option className="delivered" value="delivered">Entregue</option>
      </select>
      </div>

      <li>
      {data.code}
      </li>

        <li>
      {details}
        </li>

      <li>
      {data.created_at}
      </li>
    </Container>
  )
}