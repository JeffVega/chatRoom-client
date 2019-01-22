import React from 'react';

const DUMMY_DATA = [
    [{ "id": 1, "first_name": "Myrah", "last_name": "Custed" }, 
    { "id": 2, "first_name": "Michele", "last_name": "Bayman" }, 
    { "id": 3, "first_name": "Meir", "last_name": "Richards" }]

]
 export default class MessageList extends React.Component{
    render(){
        return(
            <div className="message-list">
            {DUMMY_DATA.map((message,index)=>{
                return(
                    <div>{message.id}</div>
                )
            })}
            </div>
        )
    }
}