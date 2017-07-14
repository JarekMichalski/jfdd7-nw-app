import React from 'react'
import {connect} from 'react-redux'
import uniqBy from 'lodash.uniqby'
import {
  ButtonGroup,
  DropdownButton,
  MenuItem
} from 'react-bootstrap'

import {fetchShops} from '../state/shops'
import {activateFilter} from '../state/productFilters'


import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';


export default connect(
  state => ({
    shops: state.shops,

    activeFilter: state.searchEngine.activeFilterName
  }),
  dispatch => ({
    fetchShops: () => dispatch(fetchShops()),
    activateFilter: (key) => dispatch(activateFilter(key))
  })
)(
  class ResultFilter extends React.Component {

    componentWillMount() {
      this.props.fetchShops()
    }

    render() {

      return (
        <div className="ResultFilter">
          <ButtonGroup vertical block>
            <DropdownButton title="Producent"
                            id="bg-vertical-dropdown-1"
                            onSelect={key => this.props.activateFilter(key)}>

              <MenuItem eventKey="name_xiaomi">Xiaomi</MenuItem>
              <MenuItem eventKey="name_lenovo">Lenovo</MenuItem>
              <MenuItem eventKey="3">HTC</MenuItem>
              <MenuItem eventKey="4">Iphone</MenuItem>
              <MenuItem eventKey="5">LG</MenuItem>
              <MenuItem eventKey="6">Samsung</MenuItem>
              <MenuItem eventKey="7">Huawei</MenuItem>
            </DropdownButton>
            <DropdownButton title="Sklep" id="bg-vertical-dropdown-2">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <DropdownButton title="Aparat" id="bg-vertical-dropdown-3">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <DropdownButton title="Dodatkowa karta pamięci" id="bg-vertical-dropdown-4">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <DropdownButton title="Aparat" id="bg-vertical-dropdown-5">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
          </ButtonGroup>

          <div className="slider">
            <p>Zakres cenowy</p>
            <Range defaultValue={[20, 80]}/>
          </div>
        </div>

      )
    }
  }
)
