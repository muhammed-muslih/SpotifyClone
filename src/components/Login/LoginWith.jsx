import { createElement } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const LoginWith = ({ icon , text, action,color}) => {
  let navigate = useNavigate();
  const handleNavigation = () => {
    navigate(action);
  };
  return (
    <div
      className="border rounded-full py-3 flex items-center gap-9 ps-8 pe-16 cursor-default hover:border-white border-gray-500"
      onClick={handleNavigation}
    >
      {icon &&<div>{createElement(icon, { size: 24 ,color})}</div>}
      {!icon&& <div><icon/></div>}
      <h3 className={`text-white font-semibold`}>{text}</h3>
    </div>
  );
};
export default LoginWith;
LoginWith.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.string,
  color: PropTypes.string,
};
