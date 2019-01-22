import React from 'react';
import SendMessageForm from './SendMessageForm'

export default class RoomList extends React.Component{
    constructor(){
        super()
    }
    render(){
    return(
    <div className='roomList'>
     <header className='roomList__banner'>
         <h1 className='banner--text'>Your Rooms:</h1>
     </header>
     <SendMessageForm/>
     <div>
         <ul>

         </ul>
     </div>
    </div>
    )    
}
} 