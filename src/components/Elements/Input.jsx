import React, { useRef } from "react";

const Input = (props) => {
  const {
    type,
    name,
    placeholder,
    id,
    classInput,
    classLabel,
    text,
    onChange,
    value,
  } = props;

  const inputRef = useRef(null);

  const classField =
    "border-primary border-2 p-2 focus:border-secondary focus:outline-none rounded-md peer invalid:text-red-400 invalid:focus:border-red-400";

  const handleLabelClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <label
        htmlFor={id}
        className={`${classLabel} after:content-['*'] after:text-red-400`}
        onClick={handleLabelClick}
      >
        {text}
      </label>
      {type === "textarea" ? (
        <textarea
          value={value}
          name={name}
          placeholder={placeholder}
          id={id}
          className={`${classField} ${classInput}`}
          ref={inputRef}
          onChange={onChange}
          required
        />
      ) : (
        <input
          value={value}
          type={type}
          name={name}
          placeholder={placeholder}
          id={id}
          className={`${classField} ${classInput}`}
          ref={inputRef}
          onChange={onChange}
          required
        />
      )}
      {/* Handle Error Field */}

      {/* <p className="text-red-400 invisible peer-invalid:visible absolute -bottom-6 left-2">
        please fill your {text}
      </p> */}
    </div>
  );
};

export default Input;
