import React, {FunctionComponent} from 'react';
import './LocationList.css';
import * as actions from '../../store/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import { List } from 'semantic-ui-react';
//import signInService from './../../services/sign-in.service'
import {Location} from './../../store/types';

interface RootState {
    locations: Location[]
}

const LocationList: FunctionComponent<{}> = () => {
    const dispatch = useDispatch();
    dispatch(actions.getLocations());
    
    const locations = useSelector((store: RootState) => {
        console.log(store);
        return store.locations;
    });
    
    const renderCities = (cities) => {
        cities.map(city => <List.Item as='p'>{city}</List.Item>);
    };
    
    const renderLocation = (location: Location) => {
        return (
            <div>
                <List.Item active>{location.country}</List.Item>
                <List.Item active>{location.state}</List.Item>
                {renderCities(location.cities)}
            </div>
        )
    };
    
    const renderLocations = () => {
        locations.map(location => {
            return (
                <List link>
                    {renderLocation(location)}
                </List>
            )
        })
    };
    
    return (
        <div>
            {renderLocations}
        </div>
    );
};

export default LocationList;