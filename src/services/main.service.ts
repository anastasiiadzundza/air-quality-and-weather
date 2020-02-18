import utils from './../utils';

export default function main() {

    const API_KEY = '27f4dab0-51c4-4acb-b050-b516eeb4b218';
    
    const getCountryList = () => utils().get(`/countries?key=${API_KEY}`);

    const getStateListByCountry = (country) => utils().get(`/states?country=${country}&key=${API_KEY}`);
    
    const getCityListByCountryAndState = (country, state) => utils().get(`cities?state=${state}&country=${country}&key=${API_KEY}`);
    
    const getCityData = (country, state, city) => utils().get(`/city?city=Los Angeles&state=California&country=${country}&key=${API_KEY}`);
    
    return {
        getCountryList,
        getStateListByCountry,
        getCityListByCountryAndState,
        getCityData
    }
}