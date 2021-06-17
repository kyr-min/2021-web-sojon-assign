import React from "react";

interface CompletedProps {
    count: number;
};
function completeItems(props: CompletedProps) {
    return(
        <p>Completed: {props.count}</p>
    )
}

export default completeItems;

