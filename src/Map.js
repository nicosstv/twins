import React, {Component} from 'react';
import mapfile from './map_colored.jpg';
import {Icon} from "semantic-ui-react";

export default class Map extends Component {
    render() {
        let x = parseInt(this.props.match.params.x)-150;
        let y = parseInt(this.props.match.params.y)-300;
        return (
            <div style={{width:'5561px', height:'7532px'}}>
                <img src={mapfile} alt={'Map'}/>
                <Icon className="markericon" name={'marker'} color='red' size='huge' style={{top:y+"px", left:x+"px", position:'absolute'}} id={'mapIcon'}/>
            </div>
        );
    }
}
