export default function FloatingInput({ type, icon, label, className }) {
  return (
    <div className={className + " form-floating"}>
      <input className="form-control shadow-none fw-bold" type={type} placeholder={label} />
      <label className="form-label">
        <i className={icon + " ms-1 me-2"}></i>
        {label}
      </label>
    </div>
  )
}