import React, { FunctionComponent } from 'react';
import './Dashboard.css';
import * as actions from '../../store/actions/actions';
import { useDispatch } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
//import Widget from './../Widget/Widget';
import LocationList from './../LocationList/LocationList';
import signInService from './../../services/sign-in.service'

interface RootState {
    isSignedIn: boolean
}

const Dashboard: FunctionComponent<{}> = () => {
    const dispatch = useDispatch();

    // const isSignedIn = useSelector((store: RootState) => {
    //     console.log(store);
    //     return store.isSignedIn;
    // });

    

    // const renderWidgets = () => {
    //     return <Widget widget={widgetData}></Widget>
    // };

    const signOut = () => {
        signInService().signOut();
        dispatch(actions.setIfSignedIn(false));
    };

     return (<div>

         <div className="widgets">
         </div>
             <div className="side-buttons">
                 <LocationList></LocationList>
                 <Button icon>
                     <Icon name='plus' />
                 </Button>
                 <Button icon onClick={signOut}>
                     <Icon name='sign-out' />
                 </Button>
             </div>
         </div>
     );
};

export default Dashboard;