'use client'
import React from "react";
import { use, useEffect, useState } from 'react';
import styles from './down.module.css'

const Countdown = () => {
    const [count, setCount] = useState<any>()
    const [value, setValue] = useState<any>();


    useEffect(() => {
        const time = setTimeout(() => {
            setCount(prevState => prevState - 1);
        }, 1000)
        return () => clearInterval(time);
    }, [count])

    const handleClick = () => {
        setCount(value);
    }

    return (

        <div className={styles.container}>
            <div className={styles.wrapper}>
                <input className={styles.input} type='number' placeholder="input" onChange={(e: any) => setValue(e.target.value)} />
                <button className={styles.button} onClick={handleClick}>Click</button>
            </div>
            <h1 className={styles.h1}>{count || 'Nhập dữ liệu'}</h1>
        </div>
    )
}

export default Countdown;