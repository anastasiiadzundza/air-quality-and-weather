export interface Location {
    country: string,
    state: string,
    cities: string[]
}

export interface WidgetData {
    location_id: string, // country_city_state
    aqius: string,
    temperature: string,
    wind_speed: string,
    wind_direction: string,
    humidity: string,
    icon_code: string,
}