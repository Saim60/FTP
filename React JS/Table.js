import axios from "axios";
import React, { Component } from "react";

// import './Table.css';
class Table extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            Balance: 0
        };
    }
    componentDidMount() {
        axios
            .get("http://localhost:5000/details")
            // .then(res => data = res)
            .then((res) => {
                const creditData = res.data.filter((x) => x.TranType == "Credit");
                const debitData = res.data.filter((x) => x.TranType == "Debit");
                let creditSum = creditData.reduce(
                    (accumulator, current) =>
                        Number(accumulator) + Number(current.amount),
                    0
                );
                let debitSum = debitData.reduce(
                    (accumulator, current) =>
                        Number(accumulator) + Number(current.amount),
                    0
                );

                this.setState({ data: res.data, Balance: Number(creditSum) - Number(debitSum) });
            })
            .catch((err) => console.log(err));
    }
    // finalBalance(){
    // this.setState()


    // }

    render() {
        const mystyle = {
            border: "1px solid black",
            padding: "7px",
            margin: "auto",
            // backgroundColor: "#4CAF50",
        };
        const { data } = this.state;

        return (
            // <div>{data[0]}</div>
            <div>
                <table style={mystyle}>
                    <tr>
                        <td style={mystyle}>Date</td>
                        {/* {/ <td style={mystyle}>TransactionType</td> /} */}
                        <td style={mystyle}>Credit</td>
                        <td style={mystyle}>Debit</td>
                        <td style={mystyle}>Balance</td>
                        <td style={mystyle}>Description</td>

                    </tr>
                    {data.length
                        ? data.map((data) => ( //array methods in JavaScript and will iterate over an array and perform a transformation or computation
                            <tr>
                                <td style={mystyle}>{data.Date} </td>
                                <td style={mystyle}>{data.TranType == "Credit" ? data.amount : <p></p>}</td>{" "}
                                <td style={mystyle}>{data.TranType == "Debit" ? data.amount : <p></p>}</td>
                                <td style={mystyle}>{data.Debit}</td>

                                {/* <td style={mystyle}>
{data.type == "Debit"
? Number(data.Balance) - Number(data.Amount)
: Number(data.Balance) + Number(data.Amount)}
</td> */}

                                <td style={mystyle}>{data.description}</td>
                            </tr>
                        ))
                        : null}
                    <tr>
                        <td style={{ color: "pink" }}>
                            <b>Total Balance</b>
                        </td>

                        <td></td>
                        <td></td>

                        <td style={mystyle} >{this.state.Balance}</td>
                        {/* <th>
{data.type === "Credit" ? (
<>
{(this.state.Balance = this.state.Balance - parseInt(data.amount)) +
parseInt(data.amount)}
</>
) : (
<>
{(this.state.Balance = this.state.Balance + parseInt(data.amount)) -
parseInt(data.amount)}
</>
)}
</th> */}
                        {/* <td>{this.state.Balance}</td> */}



                        <td></td>

                    </tr>
                </table>
            </div>
        );
    }
}

export default Table;