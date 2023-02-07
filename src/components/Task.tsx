import { ITask } from "../App"
import styles from "./task.module.css"
import TaskArea from "./TaskArea"
import Clipborad from "../assets/Clipboard.svg"

interface Props {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

function Task({ tasks, onDelete, onComplete }: Props) {
  const taskQuantity = tasks.length
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return(
    <div className={styles.taskContainer}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p> <span>{taskQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p> <span>{completedTasks} de {taskQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map( (task) => (
          <TaskArea key={task.id} 
          task={task} 
          onDelete={onDelete}
          onComplete={onComplete}
          />
          
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <img src={Clipborad}  />
            <div>
              <p>Você ainda não tem tarefas cadastradas.</p>
              <span>Crie tarefas e organize seus itens a fazer.</span>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default Task