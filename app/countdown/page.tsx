'use client'
import { useEffect, useState } from 'react';
import { useCountdown } from './useCountdown';
import Styles from './down.module.scss';

const Countdown = () => {
    const [inputDate, setInputDate] = useState({
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
    });

    const totalSeconds =
        inputDate.second +
        inputDate.minute * 60 +
        inputDate.hour * 3600 +
        inputDate.day * 86400 +
        inputDate.month * 2592000 +
        inputDate.year * 31536000;

    const { timeLeft, isActive, startCountdown, pauseCountdown, resetCountdown } = useCountdown(totalSeconds);

    const formatTime = (seconds: any) => {
        const years = Math.floor(seconds / 31536000);
        const remainingSeconds = seconds % 31536000;
        const months = Math.floor(remainingSeconds / 2592000);
        const remainingSeconds2 = remainingSeconds % 2592000;
        const days = Math.floor(remainingSeconds2 / 86400);
        const remainingSeconds3 = remainingSeconds2 % 86400;
        const hours = Math.floor(remainingSeconds3 / 3600);
        const remainingSeconds4 = remainingSeconds3 % 3600;
        const minutes = Math.floor(remainingSeconds4 / 60);
        const remainingSeconds5 = remainingSeconds4 % 60;

        return `${years} Years, ${months} Months, ${days} Days, ${hours} Hours, ${minutes} Minutes, ${remainingSeconds5} Seconds`;
    };


    return (
        <div className={Styles.countdownContainer}>
            <h1>Countdown</h1>
            <div className={Styles.inputContainer}>
                <div className={Styles.inputGroup}>
                    <label>Years:</label>
                    <input
                        type="number"
                        value={inputDate.year}
                        placeholder='input Year'
                        onChange={(e) =>
                            setInputDate({ ...inputDate, year: parseInt(e.target.value) || 0 })
                        }
                    />
                </div>
                <div className={Styles.inputGroup}>
                    <label>Months:</label>
                    <input
                        placeholder='input month'
                        type="number"
                        value={inputDate.month}
                        onChange={(e) =>
                            setInputDate({ ...inputDate, month: parseInt(e.target.value) || 0 })
                        }
                    />
                </div>
                <div className={Styles.inputGroup}>
                    <label>Days:</label>
                    <input
                        placeholder='input day'
                        type="number"
                        value={inputDate.day}
                        onChange={(e) =>
                            setInputDate({ ...inputDate, day: parseInt(e.target.value) || 0 })
                        }
                    />
                </div>
                <div className={Styles.inputGroup}>
                    <label>Hours:</label>
                    <input
                        type="number"
                        placeholder='input hour'
                        value={inputDate.hour}
                        onChange={(e) =>
                            setInputDate({ ...inputDate, hour: parseInt(e.target.value) || 0 })
                        }
                    />
                </div>
                <div className={Styles.inputGroup}>
                    <label>Minutes:</label>
                    <input
                        placeholder='input minute'
                        type="number"
                        value={inputDate.minute}
                        onChange={(e) =>
                            setInputDate({ ...inputDate, minute: parseInt(e.target.value) || 0 })
                        }
                    />
                </div>
                <div className={Styles.inputGroup}>
                    <label>Seconds:</label>
                    <input
                        placeholder='input second'
                        type="number"
                        value={inputDate.second}
                        onChange={(e) =>
                            setInputDate({ ...inputDate, second: parseInt(e.target.value) || 0 })
                        }
                    />
                </div>
            </div>
            <p>Time: {formatTime(timeLeft)}</p>
            <div className={Styles.buttonContainer}>
                <button className={Styles.button} onClick={startCountdown}>Start</button>
                <button className={Styles.button} onClick={pauseCountdown}>Pause</button>
                <button className={Styles.button} onClick={resetCountdown}>Reset</button>
            </div>
        </div>
    );
}
export default Countdown;
