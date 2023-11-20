import { useState } from "react";
import AccordionItem from "./AccordionItem.jsx";

interface Props {
    title: string;
    data: Array<{
        header: string;
        id: string;
        text: string;
    }>;
}

export default function Accordion(props: Props) {
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
                                <h4 className="form-heading mb-4 text-primary text-center text-4xl mt-3">{props.title}</h4>
                                {props.data.map((item, index) => {
                                    return (
                                        <AccordionItem key={index} active={active} handleToggle={handleToggle}
                                                       item={item}/>
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