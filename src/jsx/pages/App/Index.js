import React, { Component, Fragment } from 'react'
import GameCard from '../../components/Cards/GameCard'
import AppHeader from '../../components/Elements/AppHeader'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//images
import Appheadercat from './Appheadercat'
import Soccer from './../Categories/Soccer'
import Tennis from './../Categories/Tennis'
import Rugby from './../Categories/Rugby'
import Cricket from './../Categories/Cricket'
import Racing from './../Categories/Racing'
import Boxing from './../Categories/Boxing'
import Basketball from './../Categories/Basketball'
import Baseball from './../Categories/Baseball'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTabTop: 1,
      activeTabBottom: 1,
      selectedcat: 'soccor',
    }
  }
  componentDidMount = () => {}

  getGameCard = () => {
    let items = []
    for (var i = 1; i <= 10; i++) {
      items.push(
        <div key={i} className="col-12 col-sm-12 col-md-6 col-lg-4">
          <Soccer />
        </div>,
      )
    }
    return items
  }

  handelMatchTab = (tab) => {
    this.setState({
      activeTabBottom: tab,
    })
  }

  selectedcategory = (cat) => {
    this.setState({ selectedcat: cat })
    console.log('clicked on', this.state.selectedcat)
  }

  handelGamesTab = (tab, cat) => {
    this.selectedcategory(cat)
    this.setState({
      activeTabTop: tab,
    })
  }

  calling = (tab, cat) => {
    this.handelGamesTab(tab)
    this.selectedcategory(cat)
    console.log(tab, cat)
  }

  render() {
    return (
        <Fragment>
          <AppHeader />
          <BrowserRouter>
          <Appheadercat />
          <div className="container-fluid px-md-5 mt-2">
            <div className="space-100"></div>
            <div className="d-flex flex-wrap">
              <div className="me-md-4 me-2">
                <button
                  className={`btn admin-match-button ${
                    this.state.activeTabBottom == 1 ? ' active' : ''
                  }`}
                  onClick={() => this.handelMatchTab(1)}
                >
                  Matched events
                </button>
              </div>
              <div className="">
                <button
                  className={`btn admin-match-button ${
                    this.state.activeTabBottom == 2 ? ' active' : ''
                  }`}
                  onClick={() => this.handelMatchTab(2)}
                >
                  Un-Matched Events
                </button>
              </div>
            </div>

            <Switch>
              <Route exact path="/app" component={Soccer} />
              <Route exact path="/rugby" component={Rugby} />
              <Route exact path="/tennis" component={Tennis} />
              <Route exact path="/racing" component={Racing} />
              <Route exact path="/boxing" component={Boxing} />
              <Route exact path="/basketball" component={Basketball} />
              <Route exact path="/baseball" component={Baseball} />
              <Route exact path="/cricket" component={Cricket} />
            </Switch>
          </div>
          </BrowserRouter>
        </Fragment>
    )
  }
}
export default Index
