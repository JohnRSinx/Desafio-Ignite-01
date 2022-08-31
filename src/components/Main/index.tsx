import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { Card } from '../Card'
import { v4 as uuidv4 } from 'uuid'
import { CardsContainer, Container, FormTask, TitleCards } from './style'

export interface TasksProps {
  id?: string
  title: string
  isCompleted: boolean
}
export function Main() {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [textTask, setTextTaks] = useState('')
  const [completedTask, setCompletedTasks] = useState(null)

  const filteredConcludedsTasks = tasks.filter(
    (task) => task.isCompleted === true,
  )

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    const newTask = {
      id: uuidv4(),
      title: textTask,
      isCompleted: false,
    }
    event.preventDefault()
    setTasks((state) => [...state, newTask])
  }
  function onDeleteTask(taskDelete: TasksProps) {
    const taskWithoutDeleteOn = tasks.filter((task) => {
      return task !== taskDelete
    })
    setTasks(taskWithoutDeleteOn)
  }
  function onCompletedTask(taskCompleted: TasksProps) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskCompleted.id) {
          return {
            ...task,
            isCompleted: true,
          }
        } else {
          return task
        }
      }),
    )
  }
  return (
    <Container>
      <FormTask onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={(e) => setTextTaks(e.target.value)}
        />
        <button>
          Criar <PlusCircle size="16" weight="bold" />
        </button>
      </FormTask>
      <CardsContainer>
        <TitleCards>
          <p className="task">
            Tarefas criadas <span>{tasks.length} </span>
          </p>
          <p className="concludeds">
            Concluídas{' '}
            <span>
              {filteredConcludedsTasks.length} de {tasks.length}
            </span>
          </p>
        </TitleCards>
        {tasks.map((task) => {
          return (
            <Card
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              onCompletedTask={onCompletedTask}
            />
          )
        })}
      </CardsContainer>
    </Container>
  )
}
