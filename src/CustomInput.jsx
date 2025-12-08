import errorIcon from "./assets/images/icon-error.svg";
export default function CustomInput({ info, value, error, handleChange }) {
  return (
    <div className="input-group">
      <input
        type="text"
        name={info.name}
        placeholder={info.place}
        className={`input-control ${error ? "input-control--error" : ""}`}
        value={value}
        onChange={(e) => handleChange(e, info.name)}
      />
      {error && <img src={errorIcon} alt="Error Icon" className="error-icon" />}
      {error && <span className="error-msg">{info.errorMsg}</span>}
    </div>
  );
}
