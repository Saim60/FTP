import React from 'react';
// import './App.css';
import Form from './Form';

function App() {
  return <Form />;
}

export default App;



























// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import * as ReactBootstrap from "react-bootstrap";


// const App = () => {
  



  
//   const players = [
//     { position: "hfhg", name: "nv", team: "jhfdg" },
//     { position: "jhg", name: "hmvcgh", team: "hvgc" },
//     { position: "vnhv", name: "jhgvh", team: "hjvhj" },
//     { position: "vghg", name: "mnn", team: "gfcgf" },
//     { position: "vghg", name: "mnn", team: "gfcgf" },
//     { position: "vghg", name: "mnn", team: "gfcgf" },
//     { position: "vghg", name: "mnn", team: "gfcgf" },
//   ]
//   const renderPlayer = (player, index) => {
//     return (
//       <tr key={index}>
//         <td>{player.position}</td>
//         <td>{player.name}</td>
//         <td>{player.team}</td>
//         <td>{player.team}</td>
//         <td>{player.team}</td>
//       </tr>
//     )
//   }
//   return (
//     <div className="App">
//     <ReactBootstrap.Table striped bordered hover>
    
//         <thead>
        
//        <a href="#"onclick="button()"id="abc">save</a>
      
//         <a href="#" onclick="button()" id="abcd">+Addtransaction</a>
//         {/* <button onClick={()=>previousPage()}>Previous</button>
//         <button onClick={()=>nextPage()}>Next</button>
//         */}
//        <h6>office transaction</h6>
        
//           <tr>
           
//             <th>Date</th>
//             <th>Descreption</th>
//             <th>Credit</th>
//             <th>Debit</th>
//             <th>Running Balance</th> 
            
//           </tr>
//           <br></br>
//         </thead>
//         <tbody>



//         {/* <form>
//   <label>
//     Name:
//     <input type="text" name="name" />
//   </label>
//   <input type="submit" value="Submit" />
// </form>
       
//  */}

//          {players.map(renderPlayer)} 
//         </tbody>
        
//         </ReactBootstrap.Table>
       
//     </div>
//   );
// }

// export default App;









// import React from 'react';

// function App() {

// let curDate=new Date(2021,3,16,5);
// curDate=curDate.getHours();
// let greeting='';
// const cssStyle ={};
// if(curDate>=1&&curDate<12){
// greeting='Good Morning';
// cssStyle.color='green';
// }
// else if(curDate>=12&&curDate<19)
// {
//   greeting="good afternoon";
//   cssStyle.color='red';
// }
// else{
//   greeting="good night";
//   cssStyle.color='black';
// }

// return(
//     <>
//     <div>
//     <h1>
//         Hello, <span style={cssStyle}>{greeting}</span>
//     </h1>
// </div>
// </>
// )
// }
// export default App;