import React from 'react';
import SignIn from '../components/SignInComponent';


export default class LoginPage extends React.Component {
    render() {
        return (
            <div className='container'>
                <SignIn></SignIn>
            </div>
        );
    }
}