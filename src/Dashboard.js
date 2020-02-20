import React, {Component} from 'react';
import {Button, Icon, Input, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faAmbulance,
    faAtom,
    faBan,
    faBed,
    faBuilding,
    faBurn,
    faCross,
    faDollarSign,
    faGlassMartini,
    faGraduationCap,
    faNewspaper,
    faShoppingCart,
    faTaxi,
    faTheaterMasks,
    faUserFriends,
    faMapMarker
} from "@fortawesome/free-solid-svg-icons";

import DataTable from "react-data-table-component";
import {data} from './data';

const columns = [
    {name: 'Фамилия/Тип', selector: 'Surname', sortable: true},
    {name: 'Имя/Название', selector: 'Name', sortable: true, grow: 2},
    {name: 'Район', selector: 'Region', sortable: true, width: '70px'},
    {name: 'Дом', selector: 'House', sortable: true, width: '70px'},
    {
        name: 'Карта',
        button: true,
        cell: row => row.X &&
            <Link to={"/map/" + row.ID}><FontAwesomeIcon icon={faMapMarker}/></Link>,
        width: '50px'
    }
];

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            filterType: '',
            filterRegion: ''
        }
    }

    render() {
        let setState = this.setState.bind(this);
        const {filterText, filterType, filterRegion} = this.state;

        let filteredItems = [];
        data.forEach(item => {
            if ((item.Name.toLowerCase().includes(filterText.toLowerCase()) || item.Surname.toLowerCase().includes(filterText.toLowerCase()))
                && (filterType === '' || item.Type === filterType)
                && (filterRegion === '' || item.Region === filterRegion)) {
                filteredItems.push(item);
            }
        });

        return (
            <Segment>
                <div style={{textAlign: 'left'}}>
                    <Button icon
                            size={'mini'}
                            color={filterType === '' ? 'green' : 'grey'}
                            onClick={() => {
                                setState({filterType: ''})
                            }}
                    ><FontAwesomeIcon icon={faBan}/></Button>
                    <Button icon
                            size={'mini'}
                            color={filterType === 'Житель' ? 'green' : 'grey'}
                            onClick={() => {
                                setState({filterType: 'Житель'})
                            }}
                    ><FontAwesomeIcon icon={faUserFriends}/></Button>
                    <Button icon
                            size={'mini'}
                            color={filterType === 'Административные' ? 'green' : 'grey'}
                            onClick={() => {
                                setState({filterType: 'Административные'})
                            }}
                    ><FontAwesomeIcon icon={faBuilding}/></Button>
                    <Button icon
                            size={'mini'}
                            color={filterType === 'Транспорт' ? 'green' : 'grey'}
                            onClick={() => {
                                setState({filterType: 'Транспорт'})
                            }}
                    ><FontAwesomeIcon icon={faTaxi}/></Button>
                    <Button icon
                            size={'mini'}
                            color={filterType === 'Товары и услуги' ? 'green' : 'grey'}
                            onClick={() => {
                                setState({filterType: 'Товары и услуги'})
                            }}
                    ><FontAwesomeIcon icon={faShoppingCart}/></Button>
                    <Button icon
                            size={'mini'}
                            color={filterType === 'Финансовые учреждения' ? 'green' : 'grey'}
                            onClick={() => {
                                setState({filterType: 'Финансовые учреждения'})
                            }}
                    ><FontAwesomeIcon icon={faDollarSign}/></Button>
                    <Button icon
                            size={'mini'}
                            color={filterType === 'Гастрономия' ? 'green' : 'grey'}
                            onClick={() => {
                                setState({filterType: 'Гастрономия'})
                            }}
                    ><FontAwesomeIcon icon={faGlassMartini}/></Button>
                    <Button icon
                            size={'mini'}
                            color={filterType === 'Заводы/фабрики' ? 'green' : 'grey'}
                            onClick={() => {
                                setState({filterType: 'Заводы/фабрики'})
                            }}
                    ><FontAwesomeIcon icon={faAtom}/></Button>
                    <Button icon
                            size={'mini'}
                            color={filterType === 'СМИ' ? 'green' : 'grey'}
                            onClick={() => {
                                setState({filterType: 'СМИ'})
                            }}
                    ><FontAwesomeIcon icon={faNewspaper}/></Button>
                    <Button icon
                            size={'mini'}
                            color={filterType === 'Экстренные службы' ? 'green' : 'grey'}
                            onClick={() => {
                                setState({filterType: 'Экстренные службы'})
                            }}
                    ><FontAwesomeIcon icon={faAmbulance}/></Button>
                    <Button icon
                            size={'mini'}
                            color={filterType === 'Культура и отдых' ? 'green' : 'grey'}
                            onClick={() => {
                                setState({filterType: 'Культура и отдых'})
                            }}
                    ><FontAwesomeIcon icon={faTheaterMasks}/></Button>
                    <Button icon
                            size={'mini'}
                            color={filterType === 'Коммунальные службы' ? 'green' : 'grey'}
                            onClick={() => {
                                setState({filterType: 'Коммунальные службы'})
                            }}
                    ><FontAwesomeIcon icon={faBurn}/></Button>
                    <Button icon
                            size={'mini'}
                            color={filterType === 'Места для ночлега' ? 'green' : 'grey'}
                            onClick={() => {
                                setState({filterType: 'Места для ночлега'})
                            }}
                    ><FontAwesomeIcon icon={faBed}/></Button>
                    <Button icon
                            size={'mini'}
                            color={filterType === 'Учебные заведения' ? 'green' : 'grey'}
                            onClick={() => {
                                setState({filterType: 'Учебные заведения'})
                            }}
                    ><FontAwesomeIcon icon={faGraduationCap}/></Button>
                    <Button icon
                            size={'mini'}
                            color={filterType === 'Церкви и кладбища' ? 'green' : 'grey'}
                            onClick={() => {
                                setState({filterType: 'Церкви и кладбища'})
                            }}
                    ><FontAwesomeIcon icon={faCross}/></Button>
                    <div style={{marginTop: "10px"}}/>
                    <Button icon
                            size={'mini'}
                            color={filterRegion === '' ? 'blue' : 'grey'}
                            onClick={() => {
                                setState({filterRegion: ''})
                            }}
                    ><FontAwesomeIcon icon={faBan}/></Button>
                    <Button icon
                            size={'mini'}
                            color={filterRegion === 'Ц' ? 'blue' : 'grey'}
                            onClick={() => {
                                setState({filterRegion: 'Ц'})
                            }}
                    >Ц</Button>
                    <Button icon
                            size={'mini'}
                            color={filterRegion === 'П' ? 'blue' : 'grey'}
                            onClick={() => {
                                setState({filterRegion: 'П'})
                            }}
                    >П</Button>
                    <Button icon
                            size={'mini'}
                            color={filterRegion === 'С' ? 'blue' : 'grey'}
                            onClick={() => {
                                setState({filterRegion: 'С'})
                            }}
                    >C</Button>
                    <Button icon
                            size={'mini'}
                            color={filterRegion === 'СВ' ? 'blue' : 'grey'}
                            onClick={() => {
                                setState({filterRegion: 'СВ'})
                            }}
                    >CВ</Button>
                    <Button icon
                            size={'mini'}
                            color={filterRegion === 'В' ? 'blue' : 'grey'}
                            onClick={() => {
                                setState({filterRegion: 'В'})
                            }}
                    >В</Button>
                    <Button icon
                            size={'mini'}
                            color={filterRegion === 'ЮВ' ? 'blue' : 'grey'}
                            onClick={() => {
                                setState({filterRegion: 'ЮВ'})
                            }}
                    >ЮВ</Button>
                    <Button icon
                            size={'mini'}
                            color={filterRegion === 'Ю' ? 'blue' : 'grey'}
                            onClick={() => {
                                setState({filterRegion: 'Ю'})
                            }}
                    >Ю</Button>
                    <Button icon
                            size={'mini'}
                            color={filterRegion === 'ЮЗ' ? 'blue' : 'grey'}
                            onClick={() => {
                                setState({filterRegion: 'ЮЗ'})
                            }}
                    >ЮЗ</Button>
                    <Button icon
                            size={'mini'}
                            color={filterRegion === 'З' ? 'blue' : 'grey'}
                            onClick={() => {
                                setState({filterRegion: 'З'})
                            }}
                    >З</Button>
                    <Button icon
                            size={'mini'}
                            color={filterRegion === 'СЗ' ? 'blue' : 'grey'}
                            onClick={() => {
                                setState({filterRegion: 'СЗ'})
                            }}
                    >СЗ</Button>
                </div>
                <div style={{marginTop: "10px"}}/>
                <Input fluid name={'filterText'}
                       value={this.state.filterText}
                       onChange={(e, {value}) => {
                           this.setState({filterText: value});
                       }}
                       placeholder={"Поиск..."}/>
                <DataTable
                    columns={columns}
                    data={filteredItems}
                    defaultSortField="Surname"
                    highlightOnHover={true}
                    striped={true}
                    dense={true}
                    noHeader={true}
                    pagination
                    paginationPerPage={50}
                    paginationRowsPerPageOptions={[25, 50, 100, 200]}
                />
            </Segment>
        );
    }
}
