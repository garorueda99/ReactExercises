import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
    render(){
        console.log(this.props);
        return(
            //
            <div>
                <h1 style={{color: this.props.color}}>Hello Everyone {this.props.msg}</h1> 
            </div>
        )
    }

}


ReactDOM.render(
    <Message age={50} color={"blue"} msg="How are you?"/>,
    document.getElementById('root')
)
