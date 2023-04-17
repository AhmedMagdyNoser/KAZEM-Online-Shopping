export default function NotAuthorized() {
  return (
    <div className="container text-center my-5">
      <h2 className="fw-bold" style={{ fontSize: '5em' }}>403</h2>
      <h3>Access Denied</h3>
      <p>You are not authorized to access this page.</p>
    </div>
  )
}