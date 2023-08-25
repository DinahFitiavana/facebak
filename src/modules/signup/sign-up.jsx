import "./sign-up.css";
import couverture from "./couverture.png";

export function SignUp() {
    return (
        <div className="row">
            <div className="intro column">
                <div>
                    Explore new horizons with <b id="F">F</b><b>-acebak</b><br />
                    <h2>Immerse yourself in a captivating universe <br /> and get ready to be dazzled!</h2>
                </div>
                <img src={couverture} />
            </div>
            <div className="login">
                <h1>Sign in </h1>
                <form>
                    <label>Email</label>
                    <input type="email" id="email" />
                    <label>Password</label>
                    <input type="password" id="password" />
                    <label>Confirm Password</label>
                    <input type="password" id="confirmPassword" />
                    <label>Username</label>
                    <input type="text" id="username" />
                    <button id="submitSignUp">Submit</button>
                </form>
            </div>


        </div>
    )
}