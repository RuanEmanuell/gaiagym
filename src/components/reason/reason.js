import React from 'react';
import "./reason.css";

function Reason({reasonColor, reasonIcon : Icon, reasonTitle, reasonSubtitle}) {
    return (
        <div className="aboutReason" style={{ backgroundColor: reasonColor }}>
            <Icon className="reasonIcon"></Icon>
            <h3>{reasonTitle}</h3>
            <p>{reasonSubtitle}</p>
        </div>
    );
}

export default Reason;
