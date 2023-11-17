import PropTypes from "prop-types";
import * as shortUuid from 'short-uuid';
import Button from "../Button/Button.jsx";
import {useEffect} from "react";


ImageText.propTypes = {
    src: PropTypes.string.isRequired,
    imgPos: PropTypes.string.isRequired, // right or left
    alt: PropTypes.string.isRequired,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
}

export default function ImageText(props) {
    const translator = shortUuid();
    const uuid = translator.new();

    const beginAnimation = () => {
        let image = document.getElementById(`imgtxtimg-${uuid}`);
        let mod = 0;
        const speed = 200;
        const limit = 10;
        let offset;

        const animate = () => {
            offset = Math.sin((mod / speed) * Math.PI) * limit;
            image.style.transform = `translateX(${offset}px) translateY(${offset}px)`;
            mod++;

            requestAnimationFrame(animate);
        }
        animate()
    }
    useEffect(() => {
        beginAnimation();
    }, []);

    const imgElement = (
        <img
            id={`imgtxtimg-${uuid}`}
            className="border rounded-2xl border-amber-50 relative"
            alt={props.alt}
            src={props.src}
            width="400"
            height="500"

        ></img>
    );
    const txtElement = (
        <div className="
            {/*bg-white*/}
            text-white
            text-left
            {/*rounded*/}
        ">
            <h3 className="mb-0">{props.subheading}</h3>
            <h2 className="mb-8 text-6xl">{props.heading}</h2>
            <p>{props.text}</p>
            {(props.buttonText !== undefined) && <Button to={props.buttonLink}>{props.buttonText}</Button>}
        </div>
    )

    const imgPos = props.imgPos.toLowerCase()

    if (imgPos !== "left" && props.imgPos !== "right") {
        throw new Error('Invalid imgPos in ImageText');
    }

    return (
        <>
            <section id={`imgTxtSection-${uuid}`}
                     className={`
                     max-width-full section py-8 px-4  h-minus-header ${props.className}`}
                     style={{height: "100vh"}}
            >
                <div className="grid grid-cols-12 gap-8
                    content items-center
                    h-minus-header
                    pt-8
                    "
                >
                    <div id={`imgTxtLeft-${uuid}`} className="w-100 h-100 text-center flex justify-center col-span-6">
                        {(props.imgPos === "left") ? imgElement : txtElement}
                    </div>
                    <div id={`imgTxtRight-${uuid}`} className="w-100 h-100 text-center col-start-7 justify-center flex col-span-6">
                        {(props.imgPos === "right") ? imgElement : txtElement}
                    </div>
                </div>
            </section>
        </>
    )
}