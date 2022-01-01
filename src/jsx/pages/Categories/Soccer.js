import React, { Component, Fragment } from 'react'
import greenDot from './../../../images/green-dot.png'
import cardBackground from './../../../images/ground.png'
import carbon_timer from './../../../images/carbon_timer.png'
import { getActiveEvents, getEvent, placeBet } from './../../../web3/betsMVPService'
import { initInstance } from './../../../web3/web3'
import redDot from './../../../images/red-dot.png'
import { event } from 'jquery'


class GameCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allevents: [],
      active:false,
      id:null,
      stackvalueone:0,
      stackvaluetwo:0,
      teamone:'',
      teamtwo:'',
      selectedteam:'',
      betvalue:0,
      onbetteam:''
    }
  }
  componentDidMount = async () => {
    await initInstance()
    const events = []
    let check
    let active_events = await getActiveEvents()

    for (let i = 0; i <= active_events.length; i++) {
      check = await getEvent(i)
      if (check[2] == 'Football') {
        events.push(check)
        this.setState({
          allevents: events,
        })
      }
      console.log('all events', this.state.allevents)
    }

  }

  closehandelSideMenu = () => {
    document.getElementById('sidebar').style.display = 'none'
  }


  handelSideMenu = (eventid, teamone,teamtwo) => {
    
    if(this.state.active === false){
      this.setState({
        onbetteam: teamone
      })
    }
    if(this.state.active === true){
      this.setState({
        onbetteam: teamtwo
      })
    }
    this.setState({
      id:eventid,
      teamone:teamone,
      teamtwo:teamtwo
    })
    
    document.getElementById('sidebar').style.display = 'inline';
  }

  setfalse =() =>{
    this.setState({active:false,
    onbetteam:0,
    betvalue: this.state.stackvalueone
    })
    
  }

  settrue =() =>{
    this.setState({active:true,
    onbetteam: 1,
    betvalue: this.state.stackvaluetwo
  })
   
  }


  Onsubmit = (event) => {
    event.preventDefault()
    if(!this.state.active){
      console.log('selection str',this.state.id, this.state.onbetteam, this.state.stackvalueone);
      this.placebet(this.state.id, this.state.onbetteam, this.state.stackvalueone)
    }
    if(this.state.active){
      console.log('selection str',this.state.id, this.state.onbetteam, this.state.stackvaluetwo);
      this.placebet(this.state.id, this.state.onbetteam, this.state.stackvaluetwo)
    }
  }

  placebet = async(id, team, amount) => {
    const betdata = {
      event_id: id,
      amount: parseInt(amount),
      occured: parseInt(team)
    }
    id = parseInt(id)
    team = parseInt(team)
    amount = parseInt(amount)
    try { 
    console.log('selection int',betdata);
    // let betcontract = await getBETMVPContract();
    // await betcontract.methods.placeBet(id,amount,team).call();
    let ret = await placeBet(betdata);
    console.log('placebet', ret)
  }
    catch(error){
        console.log(error)
    }
  }


  render() {
  
    return (
      <Fragment>
        <div className="sidebar" id="sidebar">
                        <div className="data-list" >
                          <form onSubmit={this.Onsubmit}>
                          <div
                            className="row p-3 image-card"
                            style={{
                              backgroundImage: `url(${cardBackground})`,
                            }}
                          >
                            <div className="layer"></div>
                            <div className="col-10 text-white top-text mb-3">
                              <img
                                src={greenDot}
                                className="me-4 mb-1"
                                width="14px"
                              />
                              <span>Soccer</span>
                            </div>
                            <div
                              className="col-2 text-white text-end mb-3 close-btn"
                              onClick={() => this.closehandelSideMenu()}
                            >
                              <i className="fas fa-times"></i>
                            </div>
                            <div className="col-12 mt-4 mb-3">
                              <h4 className="team-name">
                                {this.state.teamone}{' '}
                                <span className="theam-text-color">vs</span>{' '}
                                {this.state.teamtwo}
                              </h4>
                              <h5>Event id {this.state.id}</h5>
                            </div>
                            <div className="col-12 mt-4 mb-3">
                              <p className="theam-text-color m-0">Pool size</p>
                            </div>
                            <div className="col-6">
                              <h3 className="mb-0">$3,600</h3>
                            </div>
                            <div className="col-6">
                              <h5 className="text-end mb-0">
                                <img
                                  src={carbon_timer}
                                  className="me-3"
                                  width="23px"
                                  style={{ verticalAlign: 'sub' }}
                                />
                                3 Days left
                              </h5>
                            </div>
                          </div>
                          <div className="odds-list p-3">
                            <div className={`odds-card p-3 mb-3 ${!this.state.active?'active':" "}`} onClick={() =>  this.setState({active:false}), () => this.setfalse()}>
                              <div className="row mb-3">
                                <div className="col-6">
                                  <h4>{this.state.teamone}</h4>
                                </div>
                                <div className="col-6 text-end">
                                  <img src={redDot} className="red-dot" />
                                </div>
                              </div>
                              <div className="row info">
                                <div className="col-12 mb-2">
                                  <p>
                                    Participants:&nbsp;&nbsp; <span>5</span>
                                  </p>
                                </div>
                                <div className="col-12 mb-2">
                                  <p>
                                    Total amount staked::&nbsp;&nbsp;{' '}
                                    <span>$2000</span>
                                  </p>
                                </div>
                                <div className="col-9 col-md-10 mb-4">
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: '25%' }}
                                      aria-valuenow="25"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                                <div className="col-3 col-md-2 mb-4">
                                  <p className="percent m-0">55.5%</p>
                                </div>
                              </div>
                              <div className="row form mt-3">
                                <div className="col-md-5">
                                  <p>Stake</p>
                                  <div className="position-relative">
                                    <input className="form-control" value={this.state.stackvalueone} onChange={(e) => this.setState({stackvalueone:e.target.value})}/>
                                    <span className="position-absolute max-btn">
                                      MAX
                                    </span>
                                  </div>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-4">
                                  <p style={{ marginTop: '2.3rem' }}>
                                    Potential Return
                                  </p>
                                  <p
                                    style={{ fontSize: '24px' }}
                                    className="mb-0 mt-3"
                                  >
                                    $0.00
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className={`odds-card p-3 mb-3 ${this.state.active?'active':" "}`} onClick={() => this.setState({active:true}) , () => this.settrue()}>
                              <div className="row ">
                                <div className="col-6">
                                  <h4>{this.state.teamtwo}</h4>
                                </div>
                                <div className="col-6 text-end">
                                  <img src={redDot} className="red-dot" />
                                </div>
                              </div>
                              <div className="row info">
                                <div className="col-12 mb-2">
                                  <p>
                                    Participants:&nbsp;&nbsp; <span>5</span>
                                  </p>
                                </div>
                                <div className="col-12 mb-2">
                                  <p>
                                    Total amount staked::&nbsp;&nbsp;{' '}
                                    <span>$2000</span>
                                  </p>
                                </div>
                                <div className="col-10 mb-4">
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: '25%' }}
                                      aria-valuenow="25"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                                <div className="col-2 mb-4">
                                  <p className="percent m-0">55.5%</p>
                                </div>
                              </div>
                              <div className="row form mt-3">
                                <div className="col-md-5">
                                  <p>Stake</p>
                                  <div className="position-relative">
                                    <input className="form-control" value={this.state.stackvaluetwo} onChange={(e) => this.setState({stackvaluetwo:e.target.value})} />
                                    <span className="position-absolute max-btn">
                                      MAX
                                    </span>
                                  </div>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-4">
                                  <p style={{ marginTop: '2.3rem' }}>
                                    Potential Return
                                  </p>
                                  <p
                                    style={{ fontSize: '24px' }}
                                    className="mb-0 mt-3"
                                  >
                                    $0.00
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div  className="bid-button p-3 mb-3">
                            <button type='submit' className="btn">PLACE BET</button>
                          </div>
                          </form>
                        </div>
                      </div>



        <div className="row">
          <div className="col-12">
            <div className="match-main-div">
              <div className="theam-bg-dark mt-2 mt-md-5 p-1 p-md-5">
                <div className="row">

                  {this.state.allevents.map((events) => (
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        
                        <div className="card game-card overflow-hidden">
                          <div
                            className="row p-3 image-card"
                            style={{
                              backgroundImage: `url(${cardBackground})`,
                            }}
                          >
                            <div class="layer"></div>
                            <div className="col-12 text-white">
                              <img src={greenDot} className="me-2" width="12" />
                            </div>
                            <div className="col-12 mt-4">
                              <h4 className="team-name">
                                {events[7]}{' '}
                                <span className="theam-text-color">vs</span>{' '}
                                {events[8]}
                              </h4>
                            </div>
                            <div className="col-12 mt-4">
                              <p className="theam-text-color m-0">
                                {events[2]}
                              </p>
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
                                onClick={() => this.handelSideMenu(events[0],events[7],events[8])
                                }
                              >
                                BET
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                  ))}
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
