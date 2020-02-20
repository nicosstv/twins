import React, {Component, Fragment} from 'react';
import {data} from './data';
import {Button} from "semantic-ui-react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faArrowAltCircleLeft,
    faMapMarker
} from "@fortawesome/free-solid-svg-icons";

const L = require('leaflet');

export default class RealMap extends Component {
    componentDidMount() {
        const bounds = [[0, 0], [3700, 2757]];
        let ID = parseInt(this.props.match.params.ID);

        let address = {};
        data.forEach(item => {
            if (item.ID === ID) {
                address = item;
            }
        });
        let x = parseInt(address.X);
        let y = parseInt(address.Y);
        var map = L.map('mymap', {
            crs: L.CRS.Simple,
            minZoom: -3,
            maxZoom: 0,
            bounds: bounds,
            maxBounds: bounds,
            zoomControl: true
        });
        L.imageOverlay(process.env.PUBLIC_URL + "/map_colored.jpg", bounds).addTo(map);
        L.imageOverlay(process.env.PUBLIC_URL + "/map_colored.jpg", bounds).bringToFront();
        map.fitBounds(bounds);
        let separator = (address.Type === "Житель") ? " " : "<br/>";
        L.marker([y, x])
            .addTo(map)
            .bindPopup(address.Surname + separator + address.Name + "<br/>\n" + address.Region + address.House);
        L.circle([y, x], 200).addTo(map);
        map.setView([y, x], -1);
    }

    render() {
        return (
            <Fragment>
                <div id={"mymap"}/>
                <Button className={'floatingbutton'}
                        circular size='huge' color='red'
                        icon
                        onClick={this.props.history.goBack}
                ><FontAwesomeIcon icon={faArrowAltCircleLeft}/></Button>
            </Fragment>
        );
    }
}
