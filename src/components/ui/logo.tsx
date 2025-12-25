import { Link } from "react-router-dom";

const Logo = ({ className = "" }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <img src="/care-apex-logo.png" alt="Care Apex Logo" className="w-72" />
    </Link>
  );
};

export default Logo;
