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
  } = props;

  const inputRef = useRef(null);

  const classField =
    "border-primary border-2 p-2 focus:border-secondary focus:outline-none rounded-md peer invalid:text-red-400 invalid:focus:border-red-400";

  const classInvalid = "text-red-400 invisible peer-invalid:visible";

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
          className={`${classField} ${classInput}`}
          ref={inputRef}
          onChange={onChange}
          required
        />
      ) : (
        <input
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

      <p className={classInvalid}>please fill your {text}</p>
    </div>
  );
};

export default Input;
