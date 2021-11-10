import React from 'react'
import './Welcome.scss';

const Welcome = () => {
    return (
        <section className="container-fluid d-flex align-items-center justify-content-center">
            <div className="wrapper d-flex flex-column">
                <h1 className="wrapper__title">Swipe Right&reg;</h1>
                <button className="btn wrapper__create_account">Create Account</button>
            </div>
        </section>
    )
}

export default Welcome
