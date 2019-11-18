import React from 'react'

class APIService extends React.Component {
    constructor(props) {
        super(props)
        this.proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    }
    

    async getdeck() {
      return  fetch(this.proxyUrl + 'https://deckofcardsapi.com/api/deck/new/')
                .then(res=>res.json())
                .then(res=> 
                    fetch(this.proxyUrl + 'https://deckofcardsapi.com/api/deck/' + res.deck_id + '/draw/?count=52')
                        .then(res=> res.json())
                        .then(res => res)
                )
    }

    async createPile(deskId, playerName, cartsString) {
        return fetch(this.proxyUrl + 'https://deckofcardsapi.com/api/deck/' + deskId + '/pile/' + playerName + '/add/?cards=' + cartsString +'')
    }

    async drawingFromPiles(deskId,playerName,count) {
        return fetch(this.proxyUrl + 'https://deckofcardsapi.com/api/deck/' + deskId + '/pile/' + playerName + '/draw/?count=' + count)
                .then(res=>res.json())
                .then(res=> res)

    }
}
export default APIService;