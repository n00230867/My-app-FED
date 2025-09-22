import { useState } from 'react';

const Clicky = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // count = count + 1;
        setCount(count + 1);
    };

    return (
        <>
            <h1>You have clicked the button { count } times.</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </>
    );
};

export default Clicky;