 import React from 'react';
 
 const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Company Name</th>
                <th>Business</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}
 const TableBody = props => {
     const rows = props.businessData.map((row, index) => {
         return (
             <tr key={index}>
                 <td>{row.name}</td>
                 <td>{row.type}</td>
                 <td>
                     <button onClick= {() => props.removeCharacter(index)}>Delete</button>
                 </td>
             </tr>
         )
     }
)
    return <tbody>{rows}</tbody>
 }
 
export  { TableHeader, TableBody };


 {/* return (
        <tbody>
            <tr>
                <td>Amazon</td>
                <td>Online Marketing</td>
            </tr>

            <tr>
                <td>Flipkart</td>
                <td>Indian startup online marketing</td>
            </tr>

            <tr>
                <td>Ola</td>
                <td>Cabs business</td>
            </tr>
        </tbody>
    ) */}