'use client';
import { BreadCrumbComponent } from '@/components/BreadCrumb';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import InputTimer from './InputTimer';

const Timer = () => {
    const path = usePathname();
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [started, setStarted] = useState<boolean>(false);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
    const [resume, setResume] = useState<boolean>(false);

    useEffect(() => {
        if (started) {
            if (hours === 0 && minutes === 0 && seconds === 0) {
                clearInterval(timerId!);
                setStarted(false);
                return;
            }

            const id = setInterval(() => {
                if (seconds > 0) {
                    setSeconds((prev) => prev - 1);
                } else if (minutes > 0) {
                    setMinutes((prev) => prev - 1);
                    setSeconds(59);
                } else if (hours > 0) {
                    setHours((prev) => prev - 1);
                    setMinutes(59);
                    setSeconds(59);
                }
            }, 1000);

            setTimerId(id);
            return () => clearInterval(id);
        }
    }, [started, hours, minutes, seconds, timerId]);

    const handleStart = () => {
        if (!started && (hours > 0 || minutes > 0 || seconds > 0)) {
            setStarted(true);
        }
    };

    const handleReset = () => {
        setStarted(false);
        if (timerId) {
            clearInterval(timerId);
        }
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    };

    const handleStop = () => {
        if (!resume) {
            setStarted(false);
            setResume(true);
        } else {
            setStarted(true);
            setResume(false);
        }
    };

    return (
        <main className="w-full h-[90vh] flex flex-col items-center">
            <div className="flex items-center w-[90%] justify-between mt-20 mb-10">
                <BreadCrumbComponent path={path.slice(1)} />
            </div>
            <main className="w-[90%] flex flex-col justify-center my-4 md:my-10 gap-2 mx-auto">
                <div className="flex items-center gap-3 justify-center">
                    <InputTimer
                        label="Hours"
                        value={hours}
                        setValue={setHours}
                    />
                    <InputTimer
                        label="Minutes"
                        value={minutes}
                        setValue={setMinutes}
                    />
                    <InputTimer
                        label="Seconds"
                        value={seconds}
                        setValue={setSeconds}
                    />
                </div>
                <div className="flex items-center gap-10 justify-center">
                    <button
                        onClick={handleStart}
                        className="px-6 py-1 bg-green-500 hover:bg-green-600 font-semibold rounded-md border-none"
                    >
                        Start
                    </button>

                    <button
                        onClick={handleStop}
                        className="px-6 py-1 bg-red-500 hover:bg-red-600 font-semibold rounded-md border-none"
                    >
                        {resume ? 'resume' : 'pause'}
                    </button>
                    <button
                        onClick={handleReset}
                        className="px-6 py-1 bg-yellow-500 hover:bg-yellow-600 font-semibold rounded-md border-none"
                    >
                        Reset
                    </button>
                </div>
            </main>
        </main>
    );
};

export default Timer;
