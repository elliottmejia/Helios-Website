import "./Switch.css";
import {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
// Copyright - 2023 andrew-demchenk0 (A)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Switch.propTypes = {
   target: PropTypes.string
}


export default function Switch(props) {
    const [isChecked, setIsChecked] = useState(false);

    const targetRef = useRef(null);

    const toggleSwitch = () => {
        setIsChecked(!isChecked);
        console.log(targetRef);
        if (targetRef.current){
            targetRef.current.style.display = isChecked ? 'block' : 'none';
        }
    }
    useEffect(() => {
        // Use useEffect to set the ref when the component is mounted
        targetRef.current = document.getElementById(props.target);
    }, [props.target]);

    return (
        <div className="switch">
            <label className="switch-label">
                <input
                       type="checkbox"
                       className="toggle"
                       checked={isChecked}
                       onChange={toggleSwitch}
                />
                <span className="slider"></span>
                <span className="card-side"></span>
            </label>
        </div>
    );
}