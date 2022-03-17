import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
    const [counter, setCounter] = useState(5);

    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleclick = () => {
        if (counter < MAXIMUN_COUNT) {
            setCounter((prev) => prev + 1);
        }
    };
    useEffect(() => {
        if (counter < 10) {
            return;
        }
        console.log('se llego al valor maximo');
        const tl = gsap.timeline();
        tl.to(counterElement.current, {
            y: -10,
            duration: 0.2,
            ease: 'ease.out',
        });
        tl.to(counterElement.current, {
            y: 0,
            duration: 1,
            ease: 'bounce.out',
        });
    }, [counter]);
    return (
        <>
            <h1>CounterEffect:</h1>
            <h2 ref={counterElement}>{counter}</h2>
            <button onClick={handleclick}>+1</button>
        </>
    );
};
