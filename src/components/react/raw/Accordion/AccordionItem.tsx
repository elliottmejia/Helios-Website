import { useRef } from "react";
import type { MutableRefObject } from "react";
import "./Accordion.css";

interface Props {
  item: object;
  active: any;
  handleToggle: any;
}

export default function AccordionItem(props: Props) {
  const contentEl: MutableRefObject<any> = useRef();
  let handleToggle, active, item;
  ({ handleToggle, active, item } = props);
  const { header, id, text } = item;

  return (
    <div className="rc-accordion-card ">
      <div className="rc-accordion-header ">
        <div
          className={`rc-accordion-toggle p-3  pl-8 ${
            active === id ? "active" : ""
          }`}
          onClick={() => handleToggle(id)}
        >
          <h5 className="rc-accordion-title">{header}</h5>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="rc-accordion-body">
          <p className="mb-0">{text}</p>
        </div>
      </div>
    </div>
  );
}
