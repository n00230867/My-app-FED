import { useState } from 'react';

const Clicky = () => {
    const [count, setCount] = useState(0);

    return (
        <>
        <h1>You have clicked the button x times.</h1>
        <button>Click me</button>
        </>
    );
};

export default Clicky;