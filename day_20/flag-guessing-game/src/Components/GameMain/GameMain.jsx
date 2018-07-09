import React, {Component} from 'react';

class GameMain extends Component {
    constructor(props) {
        super(props);
        this.state ={
            countries : [],
            others : [],
            correct : null,
            inCorrect: null,
        }
    }

    componentDidMount(data) {
        const flags = "https://restcountries.eu/rest/v2/all";
        fetch(flags)
            .then(response => response.json())
            .then(countries => {
                const correctOption = Math.floor(Math.random() * countries.length);
                const option = this._getOptions(correctOption, countries);
                countries.map(country => this.setState({

                }))
            })
    }
    render() {
        return (
            <div>HI</div>
        )
    }
}

export default GameMain;