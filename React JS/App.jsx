import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import Table from "./Passbook";

const App = () => {


    const [amount, setName] = useState("");
    const [description, descRiption] = useState();
    const [show, setShow] = useState(false);
    let [TranType, getTranType] = useState("Credit");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const InputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
        //setFullName(event.target.value);
    };
    const onSubmit = () => {
        setShow(false);
        alert('Transaction Added');
        var userdata = {
            amount,
            description,
            TranType,
            Date: new Date().toLocaleDateString()
        }
        fetch("http://localhost:5000/exportdata", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userdata),
        })
            .then((response) => response.json())
            .then((userdata) => {
                console.log("Success:", userdata);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    return (
        <>
            <Button style={{ marginLeft: 820 }} variant="primary" onClick={handleShow}>
                Add Transaction
</Button>
            <Table />

            <>

                <Modal show={show} onHide={handleClose}>    
                    <Modal.Header closeButton>
                        <Modal.Title>New Transaction</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><div>
                        <select
                            value={TranType}
                            onChange={(e) => {
                                getTranType(e.target.value);
                            }}
                        >
                            <option value="Credit">Credit</option>
                            <option value="Debit">Debit</option>
                        </select>
                        <br />
                        <br></br>


                        <input type="number"
                            placeholder="Enter Amount"
                            onChange={InputEvent}
                            value={amount} />
                        <br />
                        <br></br>

                        <input type="text"
                            placeholder="Add Description"
                            onChange={(e) => { descRiption(e.target.value) }}
                            value={description}

                        />

                        <br />

                    </div></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
</Button>
                        <Button variant="primary" onClick={onSubmit}>
                            Save Changes
</Button>
                    </Modal.Footer>
                </Modal>
            </>


        </>
    );
};
export default App;


















// import React from 'react';
// import { connect } from 'react-redux';
// import App from './Summary';
// import App from './AccountForm';
// import App from './Account';
// import App from './AppRouter';
// import App from './Header';
// class Summary extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>Summary Page</p>
//       </div>
//     );
//   }
// }

// export default connect()(Summary);














// import React from 'react';
// //import ReactDOM from 'react-dom';


// export default class App extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { values: [] };
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     createUI(){
//        return this.state.values.map((el, i) => 
//            <div key={i}>
//               <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} />
//               <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
//            </div>          
//        )
//     }

//     handleChange(i, event) {
//        let values = [...this.state.values];
//        values[i] = event.target.value;
//        this.setState({ values });
//     }

//     addClick(){
//       this.setState(prevState => ({ values: [...prevState.values, '']}))
//     }

//     removeClick(i){
//        let values = [...this.state.values];
//        values.splice(i,1);
//        this.setState({ values });
//     }

//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.values.join(', '));
//       event.preventDefault();
//     }

//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//             {this.createUI()}        
//             <input type='button' value='add more' onClick={this.addClick.bind(this)}/>
//             <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }

 // ReactDOM.render(<App />, document.getElementById('container'));

//   export default App;



// import react from "react";
// import {Route, Switch} from "react-router-dom";
// import moduleName from 'react';
// import About from "./About";
// import Contact from "./Contact";
// import Error from "./Error";
// import Menu from "./Menu";



// const App =()=>{
//     const Name= ()=>{
//         return<h1>Hello,im first pge</h1>;
//     };
// return(
//     <>
//     <Menu/>
//     <Switch>
//         <Route exact path="/"component={About}/>
//         <Route exact path="/contact" component={Contact}/>
//         <Route path="/contact/Name"component={Name}/>
//         <Route component={Error}/>
//     </Switch>
//     </>
// );
// };
// export default App;














// import React ,{useState}from 'react';

// const App =() =>{
//     let time =new Date().toLocaleTimeString();
//     const [ctime,setCtime]=useState(time);

//     const Updatetime=()=>{
//     time =new Date().toLocaleTimeString();
//     setCtime(time);
//     };
//     setInterval(Updatetime,1000);
//     return(
// <>  
//  <h1>{ctime}</h1>
// </>
//  );
//  };
// export default App;







// import React ,{useState}from 'react';



// const App =() =>{
//     let newTime =new Date().toLocaleTimeString();
//     const [ctime,setCtime]=useState(newTime);


//     const Updatetime=()=>{
//     let newCTime =new Date().toLocaleTimeString();
//     setCtime(newCTime);
//     };
//     return(
// <>
// <h1>{ctime}</h1>

// <button onClick={Updatetime}>get time</button>
// </>
// );
// };
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