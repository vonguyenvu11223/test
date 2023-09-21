import moment from 'moment';
import { useEffect, useRef, useState } from 'react';

type Time = {
    readonly days: string | number;
    readonly hours: string | number;
    readonly minutes: string | number;
    readonly seconds: string | number;
}

function useCountDown(thenTime: string) {
    const init = {
        days: 0, hours: 0, minutes: 0, seconds: 0
    }
    const [flag, setFlag] = useState(false)
    const [remaining, setRemaining] = useState<Time>(init)
    const interval = useRef<NodeJS.Timeout>()

    const countDown = () => {


        interval.current = setInterval(() => {

            const then = moment(thenTime);
            const now = moment();
            const timeDiff = then.diff(now);
            const duration = moment.duration(timeDiff)
            console.log('duration', duration)
            const days = duration.days();
            const hours = duration.hours().toString().padStart(2, '0');
            const minutes = duration.minutes().toString().padStart(2, '0');
            const seconds = duration.seconds().toString().padStart(2, '0');

            setRemaining({
                days, hours, minutes, seconds
            })

            console.log('duration.asSeconds()', duration.asSeconds())

            if (timeDiff < 1) {
                clearInterval(interval.current);
                setRemaining(init)
            }

        }, 1000);
    }


    useEffect(() => {
        countDown();
    }, []);

    useEffect(() => {

        if (!flag) {
            clearInterval(interval.current)
        }
        else {
            countDown();
        }

        return () => {
            clearInterval(interval.current)
        }

    }, [flag]);

    return {
        setFlag,
        remaining
    };
}

export default useCountDown;



