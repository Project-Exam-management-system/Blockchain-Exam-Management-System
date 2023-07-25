import "./hod.css";
import { Link } from "react-router-dom";

const Hod = () => {
  return (
    <div className="Outer">
      <div className="Inner">
        <div className="left-box">
          <Link to="approvals">
            <div>
              <span>Questions</span>
            </div>
          </Link>
        </div>
        <div className="right-box">
          <Link to="appointments">
            <div>
              <span>Appointments</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hod;
