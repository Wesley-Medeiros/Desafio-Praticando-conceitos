import styles from "./task-area.module.css"
import Trash from "../assets/Trash.svg"
import { ITask } from "../App"
import Check from "../assets/check.svg"

interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

function TaskArea({ task, onDelete, onComplete }: Props) {
  return(
    <div className={styles.taskArea}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
       {task.isCompleted ? <img src={Check}/>: <div />} 
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>{task.content}</p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <img src={Trash}/>
        </button>

    </div>
  )
}

export default TaskArea