import PropTypes from "prop-types";

function Greeting(props) {
    // if (props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // }
    // return <h2>Please log in</h2>


    // return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Please Log In </h2>);

    const Welcome = <h2>Welcome {props.username}</h2>

    const LogIn = <h2>Please Log in</h2>

    return(props.isLoggedIn ? Welcome : LogIn );
}

Greeting.prototypes = {
    isLoggedIn = bool,
    username = string,
}
Greeting.deafaultProps = {
    isLoggedIn = false,
    username = "guest",
}

export default Greeting