import React from "react";
import {AffairType} from "./HW2";

type AffairPropsType = {

    affair: AffairType
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)

    };// need to fix

    return (
        <div>
            <span>{props.affair.name}-{props.affair.priority}</span>

            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
