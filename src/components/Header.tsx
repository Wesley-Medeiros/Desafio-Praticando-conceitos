import Logo from "../assets/Logo.svg"
import styles from "./header.module.css"
import Plus from "../assets/Plus.svg"
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onAddTask: (taskContent: string) => void;
}

function Header({ onAddTask }: Props) {

  const [content, setContent] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(content);
    setContent("")
  }

  function onChangeContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);

  }

  return(
    <header className={styles.header}>
      <img src={Logo} />
      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input placeholder="Adicione uma nova tarefa" onChange={onChangeContent} value={content}/>
        <button>Criar <img src={Plus}  /></button>
      </form>
    </header>
  )
}

export default Header