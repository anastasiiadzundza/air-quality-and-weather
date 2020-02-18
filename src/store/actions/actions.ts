import { Location, WidgetData } from '../types';
import main from './../../services/main.service';

export const setLocations = (locations: Location[]) => ({
    type: 'SET_LOCATIONS',
    locations
});

export const addWidget = (data: WidgetData[]) => ({
    type: 'ADD_WIDGET',
    data
});

export const removeWidget = (locationId) => ({
    type: 'REMOVE_WIDGET',
    locationId
});

export const setIfSignedIn = (isSignedIn: boolean) => ({
    type: 'SET_IF_SIGNED_IN',
    isSignedIn,
});

export const getLocations = () => {
    return dispatch => {
        let locations: Location[] = [];
        let location: Location;
        main().getCountryList()
            .then(({ data }) => {
                console.log(data);
            const countryList = data.data.map(dataObj => dataObj.country);
            console.log(countryList);
                countryList.forEach(country => {
                    location  = {
                        country,
                        state: '',
                        cities: [],
                    };
                    main().getStateListByCountry(country)
                        .then(({data}) => {
                            const stateList = data.data.map(dataObj => dataObj.state);
                            stateList.forEach(state => {
                                main().getCityListByCountryAndState(country, state);
                                const cityList = data.data.map(dataObj => dataObj.city);
                                location.state = state;
                                location.cities = cityList;
                                locations.push(location);
                            });
                        })

                });

        });




        dispatch(setLocations(locations));
    }
};

// export const getLocations = () => {
//     return async dispatch => {
//         const countriesResponse = await main().getCountryList();
//         console.log(countriesResponse);
//         const countryList = countriesResponse.data.data.map(dataObj => dataObj.country);
//         let locations: Location[] = [];
//         let location: Location;
//         countryList.forEach(async country => {
//             location  = {
//                 country,
//                 state: '',
//                 cities: [],
//             };
//             const statesResponse = await main().getStateListByCountry(country);
//             const stateList = statesResponse.data.data.map(dataObj => dataObj.state);
//             stateList.forEach(async state => {
//                 const citiesResponse = await main().getCityListByCountryAndState(country, state);
//                 const cityList = citiesResponse.data.data.map(dataObj => dataObj.city);
//                 location.state = state;
//                 location.cities = cityList;
//                 locations.push(location);
//             });
//         });
//         dispatch(setLocations(locations));
//     }
// };
