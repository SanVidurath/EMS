// NotFound.tsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
        <h1>404 Error - Page Not Found</h1>
        <Link to="/"><button>Return to Safety</button></Link>
    </div>
  )
}

export default NotFound