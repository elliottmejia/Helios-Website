import { useRef } from 'react';
import './Accordion.css';


export default function AccordionItem (props) {
    const contentEl = useRef();
    let handleToggle, active, faq;
    ({handleToggle, active, faq} = props);
    const { header, id, text } = faq;

    return (
        <div className="rc-accordion-card ">
            <div className="rc-accordion-header ">
                <div className={`rc-accordion-toggle p-3  pl-8 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                    <h5 className="rc-accordion-title">{header}</h5>
                    <i className="fa fa-chevron-down rc-accordion-icon"></i>
                </div>
            </div>
            <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <div className="rc-accordion-body">
                    <p className='mb-0'>{text}</p>
                </div>
            </div>
        </div>
    )
}


