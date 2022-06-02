import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StackedIcon(props) {
    const defaultSize = 48;
    const hoverSize = 52;
    let [hover, setHover] = useState(false);

    const size = hover ? hoverSize : defaultSize;

    return (
        <div style={{
            padding: hover ? 6 : 8
        }}>
            <div style={{
                backgroundColor: 'black',
                borderRadius: size / 2,
                height: size,
                width: size,
                display: 'flex',
                position: "relative",
                justifyContent: "center",
                alignItems: "center"
            }}
                onMouseEnter={_ => setHover(true)}
                onMouseLeave={_ => setHover(false)}
            >
                <FontAwesomeIcon icon={props.icon} size={'1x'} color="white" />
            </div>
        </div>
    );
}

export default StackedIcon;