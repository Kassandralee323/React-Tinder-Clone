import React from 'react'
import './Loader.css'
import { SiTinder } from "react-icons/si"

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <SiTinder className="loader" />
        </div>
    )
}

export default Loader
