import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  const id = label?.trim().toLowerCase().split(" ").join("") ?? null;
  return (
    <div className="group">
      <input className="form-input" id={id} {...otherProps} />
      {label && (
        <label
          htmlFor={id}
          className={`form-input-label ${
            otherProps.value.length ? "shrink" : ""
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
