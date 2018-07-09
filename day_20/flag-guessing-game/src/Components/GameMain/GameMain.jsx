import React, {Component} from 'react';

class GameMain extends Component {
    constructor(props){
        super(props);
      console.log(this)
    }

componentDidMount(data){
    const flags = "https://restcountries.eu/rest/v2/all";
    fetch(flags).then(response => response.json()).then(countries => {countries.map(country => console.log(country.name))})
}
    render(){
        return(
            <div>HI</div>
        )
    }
}

export default GameMain;