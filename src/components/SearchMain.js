import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {
  FormGroup,
  FormControl,
  InputGroup,
  DropdownButton,
  MenuItem,
  Col,
  Grid,
  Button
} from 'react-bootstrap'

import './SearchMain.css'
import { updateSearchPhrase } from '../state/searchEngine'
import { activeFilter } from '../state/searchEngine'


export default connect(
  state => ({
    shops: state.shops,
    searchPhrase: state.searchEngine.searchPhrase,
    activeFilterName: state.searchEngine.activeFilterName
  }),
  dispatch => ({
    updateSearchPhrase: (event) => dispatch(updateSearchPhrase(event.target.value)),
    activateFilter: (key) => dispatch(activeFilter(key))
  })
)(

 class SearchMain extends React.Component {
  render() {
    return (
<Grid className="searchbar">
      <Col mdOffset={2} md={8} >
      <FormGroup>
        <InputGroup >
          <FormControl
            className="search-field"
            type="text"
            bsSize="large"
            placeholder="Czego potrzebujesz?"
            onChange={this.props.updateSearchPhrase}
          />

          <DropdownButton
            componentClass={InputGroup.Button}
            id="input-dropdown-addon"
            title={this.props.activeFilterName || 'Kategorie'}
            style={{borderRadius: 0}}
            bsSize="large"
            onSelect={this.props.activateFilter}
          >
            <MenuItem eventKey="Telefony">Telefony</MenuItem>
            <MenuItem eventKey="smartphones2">Kategoria2</MenuItem>
            <MenuItem eventKey="smartphones3">Kategoria3</MenuItem>
            <MenuItem eventKey="smartphones4">Kategoria4</MenuItem>
            <MenuItem eventKey="smartphones5">Kategoria5</MenuItem>
          </DropdownButton>
          <InputGroup.Button>
            <Link to="/result-view">
              <Button bsSize="large"><img alt="" src={process.env.PUBLIC_URL + '/images/magnifier.png'} height="20"/></Button>
            </Link>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
      </Col>
</Grid>
    )
  }
}
)

