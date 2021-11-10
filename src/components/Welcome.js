import React from 'react'
import './Welcome.scss';

const Welcome = () => {
    return (
        <section className="container-fluid d-flex align-items-center justify-content-center">
            <div className="wrapper d-flex flex-column">
                <div className="d-flex align-items-start">
                    <h1 className="wrapper__title">Swipe Right</h1>
                    <span className="wrapper__reg">&reg;</span>
                </div>
                <button className="btn wrapper__create_account">Create Account</button>
            </div>
        </section>
    )
}

export default Welcome
