import React, { useState, FunctionComponent, useEffect } from 'react';
import * as actions from '../../store/actions/actions';
import { useDispatch } from 'react-redux';
import './Widget.css';
import { Card, Button } from 'semantic-ui-react';
import { WidgetData } from './../../store/types';

interface Props {
    widget: WidgetData
}

const Widget: FunctionComponent<Props> = (props) => {
    
    const [country, state, city] = props.widget.location_id.split('_');

     return (
             <Card>
                 <Card.Content>
                     <Card.Header>{city}</Card.Header>
                     <Card.Meta>{country}</Card.Meta>
                     <Card.Description>
                         <p>{props.widget.aqius}</p>
                         <p>{props.widget.temperature}</p>
                         <p>{props.widget.wind_speed}</p>
                         <p>{props.widget.wind_direction}</p>
                         <p>{props.widget.humidity}</p>
                         <p>{props.widget.icon_code}</p>
                     </Card.Description>
                 </Card.Content>
                 <Card.Content>
                         <Button basic color='red'>
                             Remove
                         </Button>
                 </Card.Content>
             </Card>
     );
};

export default Widget;