import React from "react";

class From extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="City"></input>
                <button>Submit</button>
            </form>
        );
    }
}

export default From;