import React from 'react';
import SendMessageForm from './SendMessageForm'

export default class RoomList extends React.Component {
    constructor() {
        super()
        this.state = {
            channelName: "",
            channels: []
        }

    }
    channelName(event) {
        console.log()
        console.log(event.target.value)
        let newChannel = event.target.value;
        console.log(newChannel.split(' '))
        this.setState({channelName: newChannel})
    }
    submitForm(event) {
        event.preventDefault();
        let addChannel ='#'+ event.target.message.value;
        this.setState({
            channels: [
                ...this.state.channels,
                addChannel
            ]
        });
        event.target.message.value = "";

    }

    render()
    {
        {
            console.log(this.state)

        }
        return (
            <div className='roomList'>
                <header className='roomList__banner'>
                    <h1 className='banner--text'>Your Rooms:</h1>
                </header>
                <div>

                    <form
                        onSubmit={this
                        .submitForm
                        .bind(this)}>
                        <input
                            onChange={(e) => this.channelName(e)}
                            className="channel-input"
                            type="text"
                            name="message"
                            placeholder="Name a Channel"/>
                        <button type="submit">
                            newRoomForm +
                        </button>
                    </form>
                    <div>

                        {this
                            .state
                            .channels
                            .map((channel, index) => {
                                return (
                                    <div key={index}>
                                    <ul className="listChan">
                                     <a href={`${channel}`}><li
                                        className="list"
                                        >{channel}</li></a>
                                    </ul>
                                    </div>
                                )
                            })
}

                    </div>
                </div>
            </div>
        )
    }
}