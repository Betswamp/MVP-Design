import React, { Component, Fragment } from 'react'
import greenDot from './../../../images/green-dot.png'
import cardBackground from './../../../images/ground.png'
import carbon_timer from './../../../images/carbon_timer.png'

class GameCard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {}

  handelSideMenu = () => {
    document.getElementById('sidebar').style.display = 'block'
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-12">
            <div className="match-main-div">
              <div className="theam-bg-dark mt-2 mt-md-5 p-1 p-md-5">
                <div className="row">


                  <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="card game-card overflow-hidden">
                      <div
                        className="row p-3 image-card"
                        style={{ backgroundImage: `url(${cardBackground})` }}
                      >
                        <div class="layer"></div>
                        <div className="col-12 text-white">
                          <img src={greenDot} className="me-2" width="12" />
                        </div>
                        <div className="col-12 mt-4">
                          <h4 className="team-name">
                            Chealsea{' '}
                            <span className="theam-text-color">vs</span>{' '}
                            Machester City
                          </h4>
                        </div>
                        <div className="col-12 mt-4">
                        <p className="theam-text-color m-0">Boxing</p>
                          <p className="theam-text-color m-0">Pool size</p>
                        </div>
                        <div className="col-6">
                          <h3>$3,600 ~ 2000 BETS</h3>
                        </div>
                        <div className="col-6">
                          <h5 className="text-end">
                            <img
                              src={carbon_timer}
                              className="me-2"
                              width="18"
                              style={{ verticalAlign: 'sub' }}
                            />
                            3 Days left
                          </h5>
                        </div>
                      </div>
                      <div className="row p-3">
                        <div className="col-8">
                          <ul>
                            <li>30% &nbsp;&nbsp;Chealsea</li>
                            <li>65% &nbsp;&nbsp;Machester City</li>
                            <li>5% &nbsp;&nbsp;&nbsp;&nbsp;Draw</li>
                          </ul>
                        </div>
                        <div className="col-4 button-row">
                          <button
                            className="btn"
                            onClick={() => this.handelSideMenu()}
                          >
                            BET
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </Fragment>
    )
  }
}
export default GameCard
