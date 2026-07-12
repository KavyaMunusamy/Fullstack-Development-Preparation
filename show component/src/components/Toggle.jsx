import {useState} from "react";

function Toggle() {
    const [show,setShow] = useState(false);
    return(
        <div>
            <h2> Toggle button </h2>
            <button onClick={() => setShow(!show)}> {show ? "Hide" : "Show"} </button>
            {show && <p> Hello React </p>}
        </div>
    );
}

export default Toggle;