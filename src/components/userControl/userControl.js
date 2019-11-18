import React from 'react'
import APIService from '../../services/APIService'
import { connect } from "react-redux";
import { stopAction } from '../../actions/stopAction'
import { startAction }from '../../actions/startAction'

class userControl extends React.Component {
    constructor(props){
        super(props)
        this.services = new APIService();
        this.startNewGame = this.startNewGame.bind(this);
        this.TransformValueinNumber = this.TransformValueinNumber.bind(this);
        this.state = {
            value = 0,
            image = ''
        }
    }

    startNewGame() {
        this.services.drawingFromPiles(this.props.deckId, 'playerOne', 1).then(res=>{
            console.log(this.TransformValueinNumber(res.carts.slice(-1).pop().value)
        })
        this.services.drawingFromPiles(this.props.deckId, 'playerTwo', 1).then(res=>{
            console.log(res)
        })
    }

    TransformValueinNumber(value) {
        switch(value) {
            case 'ACE' :
                return 14;
            break;
            case 'JACK': 
                return 11;
            break;
            case 'QUEEN' :
                return 12;
            break;
            case 'KING' :
                return 13;
            break;
            default :
                return Number(value)
        }

    }

    componentDidMount() {
        console.log(this.props)
    }

    render(){
        return(
            <div>
                <div className={ "App-logo" +  (this.props.nameOfReducer.rotating ? "":" App-logo-paused") }>aici</div>
                <button onClick={this.startNewGame}>start game</button>
                <button  onClick={ this.props.nameOfReducer.rotating ?  this.props.stopAction : this.props.startAction }>start redux</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
     ...state
})

const mapDispatchToProps = dispatch => ({
    stopAction  : () => dispatch(stopAction),
    startAction : () => dispatch(startAction)
})

export default connect(mapStateToProps,mapDispatchToProps)(userControl);