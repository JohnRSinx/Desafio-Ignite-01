import { Container } from './style'
import icon from '../../assets/icon.svg'
import todo from '../../assets/todo.svg'

export function Header() {
  return (
    <Container>
      <div>
        <img src={icon} alt="" />
        <img src={todo} alt="" />
      </div>
    </Container>
  )
}
