import PropTypes from "prop-types";
import React, {useEffect} from "react";

TabbedContainer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    data: PropTypes.object,
    tabNames: PropTypes.object,
};


export default function TabbedContainer(props) {

    useEffect(() => {
        document.getElementById("tab_0").click();

    }, []);
    return (
        <div className={`tabs tabs-lifted ${props.className}`}>
            {React.Children.map(props.children, (child, index) => (
                <>
                    <input
                        key={index}
                        type="radio"
                        name="my_tabs_2"
                        className="tab bg-neutral"
                        id={`tab_${index}`}
                        aria-label={`${props.tabNames[index]}`}
                    />
                    <div
                        className="tab-content border-base-300 rounded-box p-10"
                        htmlFor={`tab_${index}`}
                    >
                        {child}
                    </div>
                </>
            ))}
        </div>
    );
}
