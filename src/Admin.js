import React, {Component} from 'react';
const L = require('leaflet');

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            h:1
        };
    }

    getCoords(map, y, x) {
        let region = "";
        switch (true) {
            case (x<=950 && y<=1250):
                region = "ЮЗ";
                break;
            case (x<=950 && y>=2453):
                region = "СЗ";
                break;
            case (x<=950):
                region = "З";
                break;
            case (x>=1860 && y<=1250):
                region = "ЮВ";
                break;
            case (x>=1860 && y>=2453):
                region = "СВ";
                break;
            case (x>=1860):
                region = "В";
                break;
            case (y<=1250):
                region = "Ю";
                break;
            case (y>=2453):
                region = "С";
                break;
            default:
                region = "Ц";
                break;
        }
        let house = prompt("Район - "+region + ". Дом?", this.state.h);
        this.setState({h:parseInt(house)+1});
        let m = L.marker([y,x]).addTo(map);
        m.bindPopup(region+" "+house);
        console.log(region+"\t"+house+"\t"+x+"\t"+y);
    }

    componentDidMount() {
        const bounds = [[0, 0], [3700, 2757]];
        var map = L.map('mymap', {
            crs: L.CRS.Simple,
            minZoom: -3,
            maxZoom: 1,
            bounds: bounds,
            maxBounds: bounds,
            zoomControl: true
        });
        let getCoords = this.getCoords.bind(this);
        L.imageOverlay(process.env.PUBLIC_URL + "/map_colored.jpg", bounds).addTo(map);
        map.fitBounds(bounds);
        map.setView([1500, 1500], 0);
        map.on('click', function (e) {
            getCoords(map, e.latlng.lat, e.latlng.lng);
        });
    }

    render() {
        return (
            <div id={"mymap"} />
        );
    }
}
