export default function FloatingInput({ type, name, value, defaultValue, onChange, icon, label, readonly, required, className }) {
  return (
    <div className={className + " form-floating"}>
      <input
        className="form-control shadow-none fw-bold rounded-0 border-start-0 border-end-0 "
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={label}
        onChange={onChange}
        readOnly = {readonly? true : false}
        required = {required? true : false}
        />
      <label className="form-label">
        <i className={icon + " ms-1 me-2"}></i>
        {label}
      </label>
    </div>
  )
}