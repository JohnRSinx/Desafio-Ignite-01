import { CheckCircle, Circle, Trash } from 'phosphor-react'
import { TasksProps } from '../Main'
import { CheckBox, CheckBoxTitleTask, Container, TrashButton } from './style'
interface Task {
  task: TasksProps
  onDeleteTask: (task: TasksProps) => void
  onCompletedTask: (task: TasksProps) => void
}
export function Card({ task, onDeleteTask, onCompletedTask }: Task) {
  function handleDeleteTask() {
    onDeleteTask(task)
  }
  function handleCompletedTask() {
    onCompletedTask(task)
  }
  return (
    <Container>
      <CheckBoxTitleTask>
        <CheckBox onClick={handleCompletedTask}>
          {task.isCompleted ? (
            <CheckCircle size={24} color="#5e60ce" weight="fill" />
          ) : (
            <Circle size={24} weight="bold" />
          )}
        </CheckBox>
        <p>{task.title}</p>
      </CheckBoxTitleTask>

      <TrashButton onClick={handleDeleteTask}>
        <Trash size={24} />
      </TrashButton>
    </Container>
  )
}
