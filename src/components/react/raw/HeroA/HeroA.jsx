import {Link} from "react-router-dom";
import * as shortUuid from 'short-uuid';
import {useEffect, useState} from "react";

export default function HeroA() {

    const translator = shortUuid();
    const uuid = translator.new();
    const heroId = `hero-${uuid}`;


    const [theme, setTheme] = useState("");


    useEffect(() => {
        const updateTheme = () => {
          const newTheme = document
            .querySelector("html")
            .getAttribute("data-theme");
          // console.log("Theme updated:", newTheme);
          setTheme(newTheme);
        };

        // Initial update
        updateTheme();

        // Add event listener for theme changes
        document
          .querySelector("html")
          .addEventListener("theme-change", updateTheme);
        // console.log("Event listener added for theme changes");

        // Cleanup the event listener on component unmount
        return () => {
          document
            .querySelector("html")
            .removeEventListener("theme-change", updateTheme);
          // console.log("Event listener removed on component unmount");
        };
    }, []);

    return (<>
            <section className="grid relative top-0  text-neutral-content h-minus-header"
                     id={heroId}
            >
                <div
                    className="grid max-w-screen-xl py-0 mx-auto my-auto md:gap-8 xl:gap-0 md:grid-cols-12 ">
                    <div
                        className="mx-auto md:mr-auto place-self-center md:col-span-7 text-center md:text-left">
                        <h1 className="max-w-2xl mb-4  text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">Let&apos;s
                            Get <span>Honest</span> About Solar.</h1>
                        <p className="max-w-2xl mb-6 font-light md:mb-8 md:text-lg xl:text-xl ">The
                            future is electric — there’s never been a better time to take back control of your
                            energy.</p>
                        <Link to="/contact" className="btn btn-secondary mr-8 ">
                            Get a quote
                        </Link>
                        <Link to="/about"
                            className="inline-flex items-center justify-center pr-5  py-3 mr-3 text-base font-medium text-center rounded-lg ">
                            Learn More
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="md:mt-0 md:col-span-5 md:flex relative sm:top-0 sm:w-9/12 sm:mx-auto
                                    md:w-full
                                    ">
                        <img src="/assets/images/honestpower/solarhero.png"
                             className={`object-contain 
                             contrast-150
                                ${(theme === "honestOrange") ? 'grayscale' : ""} 
                             `}
                             style={{imageRendering: "-webkit-optimize-contrast"}}
                             alt="mockup"/>
                    </div>
                </div>
            </section>
        </>);
}