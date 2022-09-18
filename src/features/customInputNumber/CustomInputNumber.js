import React, { useState } from "react";
import "./CustomInputNumber.scss";

CustomInputNumber.defaultProps = {
  min: 0,
  max: 4,
  step: 1,
  name: "customNum",
  value: 0,
  disabled: false,
};

export default function CustomInputNumber(props) {
  const { min, max, step, name, value, disabled, onChange } = props;
  const [defaultValue, setDefaultValue] = useState(value);

  const handleChangeNumber = (event) => {
    setDefaultValue(event.target.value);
    onChange(event);
  };

  const handleBlurNumber = (event) => {
    const num = event.target.value;

    if (num > max || num < min || !num) {
      alert(`請輸入 ${min} ~ ${max} 之間的數字`);
      setDefaultValue(value);
    }
  };

  const handleEMouseDown = (operate) => {
    if (disabled) return;
    setDefaultValue((defaultValue) => {
      let result = Number(defaultValue) + operate;
      if (result > max) return max;
      if (result < min) return min;
      return result;
    });

    let time = new Date();
    setInterval(() => {
      let nowTime = new Date();
      if (nowTime.getTime() - time.getTime() > 500) {
        setDefaultValue((defaultValue) => {
          let result = Number(defaultValue) + operate;
          if (result > max) return max;
          if (result < min) return min;
          return result;
        });
      }
    }, 100);
  };

  const handleMouseUp = () => {
    if (disabled) return;
    for (let i = 1; i < 99999; i++) {
      window.clearInterval(i);
    }
  };

  return (
    <div className="counter">
      <button
        className={`square btn ${defaultValue <= min ? "disabled" : ""}`}
        onMouseDown={() => {
          handleEMouseDown(-1 * step);
        }}
        onMouseUp={() => handleMouseUp()}
      >
        -
      </button>

      <input
        type="number"
        className={`square num ${disabled && "disabled"}`}
        min={min}
        max={max}
        step={step}
        name={name}
        value={defaultValue}
        disabled={disabled}
        onChange={handleChangeNumber}
        onBlur={handleBlurNumber}
      />

      <button
        className={`square btn ${defaultValue >= max ? "disabled" : ""}`}
        onMouseDown={() => {
          handleEMouseDown(step);
        }}
        onMouseUp={() => handleMouseUp()}
      >
        +
      </button>
    </div>
  );
}
