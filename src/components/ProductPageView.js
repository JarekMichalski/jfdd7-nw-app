import React from 'react'
import {connect} from 'react-redux'
import uniqBy from 'lodash.uniqby'
import {Grid, Col, Row, Carousel, Tab, Tabs, Panel, Table} from 'react-bootstrap'
import {fetchShops} from '../state/shops'
import './ProductPageView.css'

export default connect(
  state => ({
    shops: state.shops
  }),
  dispatch => ({
    fetchShops: () => dispatch(fetchShops())
  })
)(
  class ProductPageView extends React.Component {

    componentWillMount() {
      this.props.fetchShops()
    }

    render() {
      const {data, fetching, error} = this.props.shops
      return (
        <Grid>
          <Row>
            <Col xs={12}>
              <h1>{this.props.match.params.productName}</h1>
            </Col>
            <Col xs={12} sm={6}>
              <Carousel>
                <Carousel.Item>
                  <img width={500} alt="" src={process.env.PUBLIC_URL + '/images/spinner1.jpg'}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={500} alt="" src={process.env.PUBLIC_URL + '/images/spinner2.jpg'}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={500} alt="" src={process.env.PUBLIC_URL + '/images/spinner3.jpg'}/>
                </Carousel.Item>
              </Carousel>
            </Col>

            <Col xs={12} sm={6}>
              <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Cechy produktu">

                  <Table striped bordered condensed hover>
                    <tbody>
                    { error === null ? null : <p>{error.message}</p> }
                    { fetching === false ? null : <p>Fetching data...</p>}
                    {
                      data !== null && uniqBy(data.map(
                        shop => shop.products
                      ).reduce(
                        (total, next) => total.concat(next), []
                      ), 'screenSize', 'camera').filter(
                        product => product.name === this.props.match.params.productName
                      ).map(
                        product =>
                    <tr>
                      <td>{product.screenSize}</td>
                      <td>{product.camera}</td>
                    </tr>
                      )}
                    </tbody>

                  </Table>

                </Tab>
                <Tab eventKey={2} title="Opis produktu">
                  Tab 2 content Tab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2
                  content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                  contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                  contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                  contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                  contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                  content
                </Tab>
                <Tab eventKey={3} title="Opinie">
                  Tab 3 content Tab 3 contentTab 3 contentTab 3 contentTab 3 contentTab 3 contentTab 3 contentTab 3
                  content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                  contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                  contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                  contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                  contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                  content
                </Tab>
              </Tabs>
            </Col>
            <Col xs={12}>
              <p className="oferts">Najlepsze oferty znalezione przez nasz serwis</p>
              { error === null ? null : <p>{error.message}</p> }
              { fetching === false ? null : <p>Fetching data...</p>}
              {
                data !== null && data.map(
                  shop => shop.products
                ).reduce(
                  (total, next) => total.concat(next), []
                ).filter(
                  product => product.name === this.props.match.params.productName
                ).map(
                  product =>
                    <Panel>
                      <Col xs={4}>
                        <div>{product.price + ' zł'}</div>
                      </Col>
                      <Col xs={4}>
                        <div>{product.shopCity}</div>
                      </Col>
                      <Col xs={4}>
                        <div>{product.shopName}</div>
                      </Col>
                    </Panel>
                )}
            </Col>
          </Row>
        </Grid>
      )
    }
  }
)