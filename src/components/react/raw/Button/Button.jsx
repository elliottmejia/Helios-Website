
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

Button.propTypes = {
    to: PropTypes.string,
    children: PropTypes.any,
}

export default function Button (props) {
   return (
       <Link to={props.to}>
           <button className="border border-amber-50 p-3 my-8">{props.children}</button>
       </Link>
   );
}