import React from 'react'
import {
  Col,
  Form,
  Checkbox,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Grid
} from 'react-bootstrap'

import './login.css'
import firebase from 'firebase'

class LogIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    console.log(this.state)
    event.preventDefault()
    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    )
  }



    render() {
    return (
      <Grid fluid >
        <div className="main">
        <p className="main-info">Szukasz najlepszych ofert w sieci ? <br />Świetnie trafiłeś - wystarczy tylko się zalogować!</p>
        </div>
        <p className="okno">Zaloguj się</p>
        <Form horizontal className="datalog"
              onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalEmail" className="text-form">
            <Col  componentClass={ControlLabel} smOffset={3} sm={1} lgOffset={4} lg={1}>
              <span className="form-desription"> Email</span>
            </Col>
            <Col sm={4} lg={2}>
              <FormControl placeholder="Email"
                           // type="email"
                           type="text"
                           value={this.state.email}
                           onChange={this.handleEmailChange}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} smOffset={3} sm={1} lgOffset={4} lg={1}>
              <span className="form-desription"> Password</span>
            </Col>
            <Col sm={4} lg={2}>
              <FormControl
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </Col>
          </FormGroup>

          <FormGroup >
            <Col className="datalog" smOffset={4} sm={4} lgOffset={5} lg={2}>
              <Checkbox ><span className="form-desription">Zapamiętaj dane do logowania</span></Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col  smOffset={4} sm={4} lgOffset={5} lg={2}>
              <Button id="button" bsStyle="primary" type="submit"  block  center-block>
                Zaloguj
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Grid>
    )
  }
}
export default LogIn