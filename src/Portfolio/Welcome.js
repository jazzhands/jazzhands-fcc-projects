import React, { Component } from "react";

class Welcome extends Component {
    render(){
        return(
            <div id="welcome-section" className="welcome main-content">
                <a name="welcome"><h1>Welcome</h1></a>
                <p>Welcome to this Free Code Camp portfolio!</p>
                <p>This is the work of <a href="http://github.com/jazzhands" id="profile-link">Jazzhands</a>, it was built using the following technologies:
                    <ul>
                        <li>JavaScript 2016</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>lots of git</li>
                    </ul>
                </p>
            </div>
        )
    }
}

export default Welcome;