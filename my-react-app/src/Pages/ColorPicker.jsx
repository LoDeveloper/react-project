import React, { useState } from "react";
import '../colorPicker.css';

function ColorPicker() {

    const [color, setColor] = useState("#ffa8de");

    return (
        <div class="text">
            <h1>Color Picker</h1>
            <p>Pick a color to change the background:</p>
            <input class="input-containter"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <div class="color-box"
                style={{  backgroundColor: color,
                }}
            >
                <p>
                    {color.toUpperCase()}
                </p>
            </div>
        </div>
    );
}

export default ColorPicker;
