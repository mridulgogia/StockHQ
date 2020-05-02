import React, {Fragment} from "react";
// import Form from "react-bootstrap/Form";

export default function FormGroup({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <Fragment>
      <label for={name}>{label}</label>
      <div className="input-group mb-3">
        <input
          className={`form-control form-control-lg ${ error ? "is-invalid": ''}`}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </Fragment>
  );
}
