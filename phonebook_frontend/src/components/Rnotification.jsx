import React from "react"
import '../index.css'


const Rnotification = (props) => {
    if (props.message===null) {
        return
    }

    return (
        <div className="rnotification">
            {props.message}
        </div>
    )
}


export default Rnotification