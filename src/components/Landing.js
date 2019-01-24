import React from 'react';
import NewRoomForm from './NewRoomForm'
import RoomList from './RoomList'
import SendMessageForm from './SendMessageForm';
export default class Landing extends React.Component{
    render(){
        return(
            <div className="landing">
            <RoomList/>
            <SendMessageForm/>
            </div>
        )
    }
}