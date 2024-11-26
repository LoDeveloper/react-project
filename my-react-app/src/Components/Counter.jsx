import React, { useState } from 'react';
import '../counter.css';

function Counter() {
    // State to track the count value
    const [count, setCount] = useState(0);

    // Handlers for button clicks
    const up = () => setCount(count + 1);
    const down = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={up} style={{ margin: '5px' }}>Up</button>
            <button onClick={down} style={{ margin: '5px' }}>Down</button>
            <button onClick={reset} style={{ margin: '5px' }}>Reset</button>
        </div>
    );
}

export default Counter;
