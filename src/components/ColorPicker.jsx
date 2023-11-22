import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = () => {
  const [color, setColor] = useState('#ff0000'); // Initial color

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  return (
    <div>
      <h3>Color Picker</h3>
      <ChromePicker color={color} onChange={handleColorChange} />
      <div style={{ marginTop: '10px' }}>
        Selected Color: <span style={{ color: color }}>{color}</span>
      </div>
    </div>
  );
};

export default ColorPicker;
