import PropTypes from "prop-types";

CardWrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default function CardWrapper(props) {
    return (
        <section className={`section ${props.className} my-4`}>
            <h2 className="title text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 mx-auto text-center">
                {props.title}
            </h2>
            <div
                className="flex flex-col sm:flex-col md:flex-row xl:flex-row justify-around w-full mx-auto gap-4 items-center"
            >
                {props.children}
            </div>
        </section>
    );
}
