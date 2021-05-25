import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <h3>The Info is: {props.info}</h3>
        </div>
    );
}

const withAdminWarning = (WrappedComponent) => { //higher order component
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private info, DONT SHARE IT</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>You are not authenticated!!!</p>}
            
        </div>
    );
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)
// ReactDOM.render(<AdminInfo isAdmin={true} info="Information pattern" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Information pattern" />, document.getElementById('app'))