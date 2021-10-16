// import React, { Component } from "react";
// // This will require to npm install axios
// import axios from 'axios';

// const Data = (props) => (
//   <tr>
//     <td>{props.data.display_name}</td>
//     <td>{props.data.description}</td>
//     <td>{props.data.date}</td>
//     <td>{props.data.source}</td>
//     <td>{props.data.category}</td>
//   </tr>
// );

// export default class Datasets extends Component {
// // This is the constructor that shall store our data retrieved from the database
//     constructor(props) {
//         super(props);
//         this.state = { datasets: [] };
//     }
//     // This method will get the data from the database.
//     componentDidMount() {
//         axios
//             .get("http://localhost:5000/dataset/")
//             .then((response) => {
//                 this.setState({ datasets: response.data });
//             })
//             .catch(function (error) {
//                 console.log(error);
//             }); 
//     }

//     recordList() {
//         return this.state.datasets.map((currentrecord) => {
//             return (
//                 <Data
//                     dataset={currentrecord}
//                     key={currentrecord._id}
//                 />
//             ); 
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Record List</h3>
//                 <table className="table table-striped" style={{ marginTop: 20 }}>
//                     <thead> 
//                         <tr>
//                             <th>Display Name</th>
//                             <th>Description</th>
//                             <th>Date</th>
//                             <th>Source</th>
//                             <th>Category</th>
//                         </tr>
//                     </thead>
//                     <tbody>{this.recordList()}</tbody>
//                 </table>
//             </div>
//         ); 
//     }
// }