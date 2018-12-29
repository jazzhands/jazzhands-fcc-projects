import React, { Component } from "react";

class NotFound extends Component {
    render(){
        return(
            <div className="main-content">
                <h1>Oops, couldn't find that page - how about going back to the <a href="/">homepage</a>?</h1>
            </div>
        )
    }
}

export default NotFound;