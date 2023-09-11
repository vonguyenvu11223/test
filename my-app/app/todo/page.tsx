'use client'
import React, { useEffect, useState } from "react"
import styles from './todu.module.scss'
import { Prev } from "react-bootstrap/esm/PageItem";

const Todo = () => {

    const [value, setValue] = useState('');
    const [todo, setTodo] = useState<any[]>([]);

    const handleClick = () => {
        setTodo(Prev => [...Prev, value]);
        setValue("");
    }

    return (
        <div className={styles.container}>
            <div className={styles.input}>
                <input value={value} type="text" placeholder="input" onChange={(e) => setValue(e.target.value)} />
                <button onClick={handleClick}>ADD</button>
            </div>
            <ul>
                {todo.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Todo