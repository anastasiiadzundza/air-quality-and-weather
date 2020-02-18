import React, {FunctionComponent} from 'react';
import './App.css';
import SignInView from "./SignInView/SignInView";
import Dashboard from "./Dashboard/Dashboard";
import {useSelector} from 'react-redux';


interface RootState {
    isSignedIn: boolean
}

const App: FunctionComponent<{}> = () => {
    const isSignedIn = useSelector((store: RootState) => {
        return store.isSignedIn;
    });

    if (!isSignedIn) {
        return (
            <div className="signin-view">
                <SignInView></SignInView>
            </div>
        )
    } else {
        return (
            <div className="dashboard-view">
                <Dashboard></Dashboard>
            </div>
        );
    }
};


export default App;
