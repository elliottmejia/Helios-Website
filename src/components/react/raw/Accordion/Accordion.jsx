import {useState} from "react";
import AccordionItem from "./AccordionItem.jsx";
import {INFO} from '../../assets/data/Info.js';

export default function Accordion () {
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }

    return (
        <>
            <div className="container-fluid mt-5 mb-5 w-4/5 mx-auto">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="form-heading mb-4 text-primary text-center text-4xl mt-3">Lorem Ipsum</h4>
                                {INFO.faqs.map((faq, index) => {
                                    return (
                                        <AccordionItem key={index} active={active} handleToggle={handleToggle}
                                                       faq={faq}/>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}