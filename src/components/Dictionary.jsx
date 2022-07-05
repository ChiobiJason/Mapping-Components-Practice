import React from "react";
import Terms from "./Terms";

function Dictionary(props) {
    return (
        <div>
            <dl className="dictionary">
                <Terms 
                    emoji={props.emoji}
                    name={props.name}
                    meaning={props.meaning}
                />
            </dl>
        </div>
    )
}

export default Dictionary;