/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nv0nXZcsSjv
 */
import './carouselv0.css'
import PropTypes from "prop-types";

Carouselv0.propTypes = {
    data: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
}

export default function Carouselv0(props) {
    // alt
    // src
    // title
    // body

    return (
        <div className={`${props.className} 
        relative w-full max-w-6xl mx-auto overflow-hidden`}>`
            <div className="flex gap-4 px-4 py-6">
                <img
                    alt="Carousel Image 1"
                    className="aspect-[3/2] object-cover rounded-lg"
                    height="400"
                    src="/placeholder.svg"
                    width="600"
                />
                <img
                    alt="Carousel Image 3"
                    className="aspect-[3/2] object-cover rounded-lg"
                    height="400"
                    src="/placeholder.svg"
                    width="600"
                />
                <img
                    alt="Carousel Image 4"
                    className="aspect-[3/2] object-cover rounded-lg"
                    height="400"
                    src="/placeholder.svg"
                    width="600"
                />
            </div>
            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white dark:bg-zinc-950 p-2 rounded-r-md">
                <svg
                    className=" h-6 w-6"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m15 18-6-6 6-6" />
                </svg>
                <span className="sr-only">Previous</span>
            </button>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white dark:bg-zinc-950 p-2 rounded-l-md">
                <svg
                    className=" h-6 w-6"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m9 18 6-6-6-6" />
                </svg>
                <span className="sr-only">Next</span>
            </button>
        </div>
    )
}