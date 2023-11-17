import PropTypes from "prop-types";
import {createRef, useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import './Carousel.css';

Carousel.propTypes = {
    children: PropTypes.node,
    data: PropTypes.array.isRequired,
};

export default function Carousel(props) {
    const data = props.data;
    const carouselRef = useRef(null);
    const buttonRefs = useRef([]);
    const [slideIndex, setSlideIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            scrollPlusOne();
        }, 3000);

        return () => clearInterval(interval);
    }, [slideIndex]);

    useEffect(() => {
        // Initialize buttonRefs array with refs for each button
            buttonRefs.current = Array(data.length)
                .fill()
                .map((_, index) => buttonRefs.current[index] || createRef());
            buttonRefs.current[slideIndex].classList.add('btn-active');

    }, [data.length, slideIndex]);

    const updateActive = () => {
        buttonRefs.current.forEach((buttonRef) => {
                buttonRef.classList.remove('btn-active');
        });

        // buttonRefs.current[slideIndex].classList.add('btn-active');
    };

    const scrollToIndex = (index) => {

        setSlideIndex(index);

        updateActive();

        const child = carouselRef.current?.children[index];
        if (child) {
            child.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
        }
    };

    const scrollMinusOne = () => {
        const lastIndex = (slideIndex - 1 >= 0) ? slideIndex - 1 : data.length - 1;
        scrollToIndex(lastIndex);
    };

    const scrollPlusOne = () => {
        const nextIndex = slideIndex + 1 < data.length ? slideIndex + 1 : 0;
        scrollToIndex(nextIndex);
    };


    return (
        <section className="pl-0">
            <div ref={carouselRef} className="carousel w-[100vw] relative -left-16 h-96 flex overflow-x-scroll">
                {data.map((item, index) => (
                    <div key={index} id={`item-${index}`} className="carousel-item w-full relative">
                        <img src={item.src} alt={`item-${index}`} className="w-full object-cover z-0"/>
                        <div className={`carousel-content absolute bottom-4 
                            ${(index % 2 === 0) ? "right-4" : "left-4"}
                            transform  p-4 z-10 text-white
                            h-fit max-w-6xl bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10
                        `}>
                            <h3 className="text-4xl mb-0">
                                {index}
                                {/*{item.heading}*/}
                            </h3>
                            <p className="text-3xl">{item.subheading}</p>
                            <p>{item.body}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center w-full py-2 gap-2">
                <div className="btn btn-sm" onClick={scrollMinusOne}>
                    <FontAwesomeIcon icon={faArrowLeft} className="self-center"/>
                </div>
                {data.map((_, index) => (
                    <button
                        key={index}
                        ref={(buttonRef) => (buttonRefs.current[index] = buttonRef)}
                        onClick={() => scrollToIndex(index)}
                        className={`btn btn-sm
                        `}
                    >
                        {index}
                    </button>
                ))}
                <div className="btn btn-sm" onClick={scrollPlusOne}>
                    <FontAwesomeIcon icon={faArrowRight} className="self-center"/>
                </div>
            </div>
        </section>
    );
}