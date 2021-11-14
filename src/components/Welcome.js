import React from 'react'
import './Welcome.scss';
import { useGlobalContext } from "../context";
const Welcome = () => {
    const {noteClass} = useGlobalContext()

    return (
        <section className="welcome container-fluid row d-flex align-items-center">
            <div className="wrapper col-md-12 col-lg-12 col-xs-12 text-center">
                <div className="wrapper__title d-flex align-items-start justify-content-center">
                    <h1 className="wrapper__text">Swipe Right</h1>
                    <span className="wrapper__reg">&reg;</span>
                </div>
                <div>
                    <button className="btn wrapper__create_account">Create Account</button>
                </div>
                <div>
                    <button className="btn wrapper__login d-lg-none">Log in</button>
                </div>
                <div className="img-container d-lg-none">
                    <img className="wrapper__gplay" src="/g-play.png" alt="" />
                </div>
                {noteClass && <div className="wrapper_note">
                    All photos are of models and used for illustrative purposes only
                </div>}
            </div>
        </section>
    )
}

export default Welcome
