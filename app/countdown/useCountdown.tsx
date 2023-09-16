'use client'
import { useState, useEffect } from "react";

export function useCountdown(initialTime: any) {

    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);

    console.log(timeLeft);

    useEffect(() => {
        let interval: any;

        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime: any) => prevTime - 1);
            }, 1000);
        } else if (!isActive && timeLeft !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const startCountdown = () => {
        setIsActive(true);
    };

    const pauseCountdown = () => {
        setIsActive(false);
    };

    const resetCountdown = () => {
        setIsActive(false);
        setTimeLeft(initialTime);
    };

    return {
        timeLeft,
        isActive,
        startCountdown,
        pauseCountdown,
        resetCountdown,
    };
}
