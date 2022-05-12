import "./button.styles.scss";

const buttonTypeClasses = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const buttonTypeClass = buttonTypeClasses[buttonType] ?? "";
  return (
    <button
      className={`button-container ${buttonTypeClass}`}
      type="submit"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
