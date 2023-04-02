export default function FloatingInput({ type, name, value, icon, label, className }) {
  return (
    <div className={className + " form-floating"}>
      <input className="form-control shadow-none fw-bold" type={type} name={name} value={value} placeholder={label} />
      <label className="form-label">
        <i className={icon + " ms-1 me-2"}></i>
        {label}
      </label>
    </div>
  )
}