import React, { useRef } from "react";

const Input = (props) => {
  const { type, name, placeholder, id, classInput, classLabel, text } = props;

  const inputRef = useRef(null);

  const handleLabelClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className={`${classLabel} after:content-['*'] after:text-red-400`}
        onClick={handleLabelClick}
      >
        {text}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          id={id}
          className={`border-primary border-2 p-2 focus:border-secondary focus:outline-none rounded-md ${classInput}`}
          ref={inputRef}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          id={id}
          className={`border-primary border-2 p-2 focus:border-secondary focus:outline-none rounded-md ${classInput}`}
          ref={inputRef}
        />
      )}
    </div>
  );
};

export default Input;
