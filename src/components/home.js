import React from 'react'
import APIService from '../services/APIService'
import Usercontrol from '../components/userControl/userControl'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.APIService = new APIService();
        this.state = {
            deckId: '',
            PlayerOneObjectDeck: {},
            PlayerTwoObjectDeck: {},
            playerOneDeck: '',
            playerTwoDeck: ''
          }
    }

    componentDidMount(){
        this.startGame();
    }

    startGame() {
        this.APIService.getdeck().then(res=>{
            var PlayerOneObject = res.cards.slice(0, 26),
                PlayerTwoObject = res.cards.slice(26, 52),
                playerOneDeck = PlayerOneObject.map(function(e){return e.code}).join(','),
                playerTwoDeck = PlayerTwoObject.map(function(e){return e.code}).join(',');

            this.setState({
                deckId: res.deck_id,
                deckPlayerOneObject: PlayerOneObject,
                deckPlayerTwoObject: PlayerTwoObject,
                playerOneDeck: playerOneDeck,
                playerTwoDeck: playerTwoDeck
            })

            this.APIService.createPile(res.deck_id, 'playerTwo',playerTwoDeck)
            this.APIService.createPile(res.deck_id, 'playerOne',playerOneDeck)
        })

    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-8">home</div>
                    <div className="col-4"><Usercontrol deckId={this.state.deckId}/></div>
                </div>
            </div>
        )
    }
}

export default Home;