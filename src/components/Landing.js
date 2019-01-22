import React from 'react';
import NewRoomForm from './NewRoomForm'

export default class Landing extends React.Component{
    render(){
        return(
            <div className="message-list">
            <NewRoomForm/>
            </div>
        )
    }
}