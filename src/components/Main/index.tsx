import { PlusCircle } from 'phosphor-react'
import { Card } from '../Card'
import { CardsContainer, Container, FormTask, TitleCards } from './style'

export function Main() {
  return (
    <Container>
      <FormTask>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar <PlusCircle size="16" weight="bold" />
        </button>
      </FormTask>
      <CardsContainer>
        <TitleCards>
          <p className="task">
            Tarefas criadas <span>5</span>
          </p>
          <p className="concludeds">
            Concluídas <span>1 de 5</span>
          </p>
        </TitleCards>
        <Card />
      </CardsContainer>
    </Container>
  )
}
