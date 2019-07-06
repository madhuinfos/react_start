import React, {Component} from 'react';
import Table from './Table';


class App extends Component {
    render() {
        const business = [
            {
                name: 'Amazon',
                type: 'Online marketing'
            },

            {
                name: 'Flipkart',
                type: 'Indian startup online marketing'
            },

            {
                name: 'Ola',
                type: 'Cabs business'
            }
        ]

        this.state = {
            characters: [
                {
                    name: 'From State1',
                    type: 'state type1'
                },

                {
                    name: 'From State2',
                    type: 'state type2'
                },

                {
                    name: 'From State 3',
                    type: 'state type 3'
                }
            ]
        }

        const {characters} = this.state;

        const removeCharacter = index => {
            console.log('remove char invoked');
            this.setState({
                characters: characters.filter((character, i) =>  {
                    return i !== index;
                })
            });
        }

        const listItems = characters.map((x) => <li>{x.name}</li>);

        return (
            
            <div className = "App">
                {/* <ul>{business}</ul> */}
                <Table businessData = {business} removeCharacter = {removeCharacter} />
                <h1>{typeof(characters)}</h1>
                <Table businessData = {characters} removeCharacter = {removeCharacter}></Table>
            </div>
        )
    }
}

export default App;