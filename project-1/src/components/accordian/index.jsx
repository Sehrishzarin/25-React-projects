import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiple, setEnableMultiple] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(curId) {
        setSelected(curId === selected ? null : curId);
    }

    function handleMultiSelection(curId) {
        let cpyMultiple = [...multiple];
        const findIndex = cpyMultiple.indexOf(curId);
        if (findIndex !== -1) {
            cpyMultiple.splice(findIndex, 1); 
        } else {
            cpyMultiple.push(curId); 
        }
        setMultiple(cpyMultiple);
    }

    return (
        <div className="wrapper">

            <div className="accordion">
            <button onClick={() => setEnableMultiple(!enableMultiple)}>
                {enableMultiple ? "Switch to Single Select" : "Switch to Multi Select"}
            </button>
                {data && data.length > 0 ? (
                    data.map((dataitem, index) => (
                        <div className="item" key={index}>
                            <div
                                onClick={() =>
                                    enableMultiple
                                        ? handleMultiSelection(dataitem.id)
                                        : handleSingleSelection(dataitem.id)
                                }
                                className="title"
                            >
                                <h3>{dataitem.question}</h3>
                                <span>+</span>
                            </div>

                            {enableMultiple
                                ? multiple.includes(dataitem.id) && <div>{dataitem.answer}</div>
                                : selected === dataitem.id && <div>{dataitem.answer}</div>}
                        </div>
                    ))
                ) : (
                    <div>No data found</div>
                )}
            </div>
        </div>
    );
}
