import { CheckCircle, Circle, Trash } from 'phosphor-react'
import { CheckBox, Container, TrashButton } from './style'

export function Card() {
  return (
    <Container>
      <CheckBox>
        <Circle size={24} weight="bold" />
        {/* <CheckCircle size={24} color="#5e60ce" weight="fill" /> */}
      </CheckBox>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <TrashButton>
        <Trash size={24} />
      </TrashButton>
    </Container>
  )
}
