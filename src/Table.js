import React, {Component} from 'react';
import {TableHeader, TableBody} from './Table/tablecomps';

class Table extends Component{
    render(){
        const {businessData, removeCharacter} = this.props;
        // const listItems = businessData.map( (x) => <li>{x.Name}</li>);

        return (
            
            <div>
                <h1>Table component using Simple React components</h1>
                <table>
                    <TableHeader></TableHeader>
                    <TableBody businessData= {businessData} removeCharacter = {removeCharacter}></TableBody>
                    {/* <thead>
                        <th>Product Name</th>
                        <th>Product Category</th>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Amazon</td>
                            <td>Online Business</td>
                        </tr>

                        <tr>
                            <td>Flipkart</td>
                            <td>Online business</td>
                        </tr>

                        <tr>
                            <td>DMART</td>
                            <td>In house store</td>
                        </tr>
                    </tbody> */}
                </table>
            </div>
        )
    }
}

export default Table;