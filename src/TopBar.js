import React from "react";
import './topBar.css';
import logo from './logo.svg';

class TopBar extends React.Component{

render(){
    return (
        
        <div className="container">
          <div className="chatbox">
            <div className="name">Federico Fabian Gonzalez
            <img src={logo}/>
            </div>
          </div>          
        </div>
      
    );
};
}


export default TopBar;