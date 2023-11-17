import PropTypes from "prop-types";
import {Link} from "react-router-dom";

GlassCard.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    className: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
}

export default function GlassCard(props) {
    return (
        <div
            className={`card w-full sm:w-96 md:w-72 lg:w-96 h-96 bg-neutral backdrop-blur-xl${props.className} transition-transform duration-300 ease-in-out hover:translate-y-[-10px] `}
        >
            <figure className="w-full h-2/3">
                <img
                    className="object-cover w-full h-full"
                    src={props.src}
                    alt={props.alt}
                />
            </figure>
            <div className="card-body flex flex-col justify-between p-4">
                <div>
                    <h2 className="card-title text-lg font-semibold mb-2">
                        {props.title}
                    </h2>
                    <p className="text-sm">{props.body}</p>
                </div>
                <div className="card-actions mt-4">
                    <button className="btn btn-secondary">
                        <Link to={props.buttonLink}>{props.buttonText}</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}