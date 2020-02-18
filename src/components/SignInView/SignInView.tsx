import React, {FunctionComponent} from 'react';
import SignInButton from './../SignInButton/SignInButton';
import {useSelector} from 'react-redux';
import { Modal } from 'semantic-ui-react';

interface RootState {
    isSignedIn: boolean
}

const App: FunctionComponent<{}> = () => {
    const isSignedIn = useSelector((store: RootState) => {
        console.log(store);
        return store.isSignedIn;
    });
    return <Modal size={'large'} open={!isSignedIn}>
        <SignInButton></SignInButton>
    </Modal>
};


export default App;
