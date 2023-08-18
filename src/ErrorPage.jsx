import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oops, looks like this page does not exist.</h1>
            <Link to='/'>Click here to go back home!</Link>
        </div>
    );
}

export default ErrorPage;