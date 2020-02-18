import React, { useState, FunctionComponent, useEffect } from 'react';
import * as actions from '../../store/actions/actions';
import { useDispatch } from 'react-redux';
import './SignInButton.css';
import signInService from './../../services/sign-in.service'

const SignInButton: FunctionComponent<{}> = () => {
    const [, setErr] = useState(null);

    const dispatch = useDispatch();
     useEffect(() => {
        const successCallback = onSuccess;

         signInService().initGoogleAuth();
         signInService().renderSignInButton(successCallback);

    });

    const onSuccess = () => {
        dispatch(actions.setIfSignedIn(true));
        setErr(null);
    };
    
     return (
         <div className="signin-button">
             <button id="loginButton"></button>
         </div>
     );
};

export default SignInButton;