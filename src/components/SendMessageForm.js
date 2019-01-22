import React from 'react';

export default class SendMessage extends React.Component{

  render(){
      return(
          <div>
              <form>
                  <input type="text" name="messSend"placeholder="Type message and hit ENTER"/>
              </form>
          </div>
      )
  }
}