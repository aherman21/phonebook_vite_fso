import React from "react"
import '../index.css'


const Notification = (props) => {
    if (props.message===null) {
        return
    }

    return (
        <div className="notification">
            {props.message}
        </div>
    )
}


export default Notification