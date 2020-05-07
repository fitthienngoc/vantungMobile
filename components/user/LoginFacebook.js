import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
    console.log(response);
}

export default class LoginFacebook extends Component {
    render() {
        return (
            <div>
                <FacebookLogin
                    appId="1612297272241953"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    cssClass="my-facebook-button-class"
                    icon="fa-facebook"
                />
            </div>
        )
    }
}
