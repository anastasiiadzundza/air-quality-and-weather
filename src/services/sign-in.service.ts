export default function signInService () {
    const initGoogleAuth = () => {
        window.gapi.load('auth2', () => {
            gapi.auth2.init({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            });
        });
    };

    const renderSignInButton = successCallback => {
        const opts = {
            width: 200,
            height: 50,
            longtitle: true,
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            onsuccess: successCallback
        };

        window.gapi.load('signin2', () => {
            gapi.signin2.render('loginButton', opts)
        });
    };

    const signOut = () => {
        window.gapi.load('auth2', () => {
            const auth2 = gapi.auth2.init({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            });
            auth2.signOut();
        });
    };

    return {
        initGoogleAuth,
        renderSignInButton,
        signOut
    }
}