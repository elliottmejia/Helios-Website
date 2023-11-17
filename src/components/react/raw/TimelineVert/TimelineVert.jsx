import PropTypes from "prop-types";
import { INFO } from "../../assets/data/Info.js";

TimelineVert.propTypes = {
    id: PropTypes.number.isRequired,
    className: PropTypes.string,
}

export default function TimelineVert(props) {
    const data = INFO.timeline[props.id].entries;
    const arrow =
       ` <svg fill="#FFFFFF" height="800px" width="800px"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 330 330" xml:space="preserve">
<path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
</svg> `


    return (
        <section className="mb-16">
            <h2 className="title text-5xl text-center w-100">{INFO.timeline[props.id].title}</h2>
            <ul className={`timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ${props.className}`}>
                {Object.keys(data).map((key) => {
                    const entry = data[key];
                    return (
                        <li key={key}>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            {(key === data.length -1) && arrow}
                            <div className={`
                            ${(key % 2 === 0) ? 'timeline-start': 'timeline-end'}
                            ${(key % 2 === 0) ? 'md:text-end': 'md:text-start'}
                              mb-10`}>
                                <time className="font-mono italic">{entry.period}</time>
                                <div className="text-lg font-black">{entry.title}</div>
                                {entry.text}
                            </div>
                            <hr/>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
