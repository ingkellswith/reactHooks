import React, { useState } from "react";

function useInput(defaultValue, validator) {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e; //value가 두개인데 이 value는 지역변수인듯
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  //value={name.value}
  //onChange={name.onChange}
  return { value, onChange };
}

export default function App() {
  const maxLen = (value) => value.length <= 10;
  //!value.includes("@")도 사용가능
  const name = useInput("Mr", maxLen);
  return (
    <div className="App">
      <span>{name.value}</span>
      <input {...name} placeholder="Whats your name" />
    </div>
  );
}
