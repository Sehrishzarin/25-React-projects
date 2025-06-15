import { useState } from "react";
import data from "./data";

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    function handleSingleSelection(curId){
       setSelected(curId)
    }
    return (
        <div className="wrapper">
            <div className="accordion">
                {
                    data && data.length > 0 ? (
                        data.map((dataitem, index) => (
                            <div className="item" key={index}>
                                <div onClick={()=>handleSingleSelection(dataitem.id)} className="title">
                                    <h3>{dataitem.question}</h3>
                                    <span>+</span>
                                    {
                                        selected === dataitem.id ? <div>{dataitem.answer}</div> : null
                                    }
                                </div>
                               
                            </div>
                        ))
                    ) : (
                        <div>No data found</div>
                    )
                }
            </div>
        </div>
    );
}
