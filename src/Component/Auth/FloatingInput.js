export default function FloatingInput({ type, name, defaultValue, onChange, icon, label, readonly, className }) {
  return (
    <div className={className + " form-floating"}>
      <input
        className="form-control shadow-none fw-bold"
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={label}
        onChange={onChange}
        readOnly = {readonly? true : false}
        />
      <label className="form-label">
        <i className={icon + " ms-1 me-2"}></i>
        {label}
      </label>
    </div>
  )
}