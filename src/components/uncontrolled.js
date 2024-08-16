import React from 'react';


class Uncontrolled extends React.Component
{
    constructor(props){
        super(props);
        this.nameref=React.createRef();
        this.rollnoref=React.createRef();
        this.email=React.createRef();
        this.handlesubmit=this.handlesubmit.bind(this);
    }
    handlesubmit(event)
    {
        event.preventDefault();
        alert(`Successfully entered the information of ${this.nameref.current.value}`);
    }
    render()
    {
        return(
            <div>
                <h1>Uncontrolled form</h1>
                <form onSubmit={this.handlesubmit}>
                    <label>Name:</label>
                    <input type="text" ref={this.nameref}></input>
                    <label>Roll No:</label>
                    <input type="text" ref={this.rollnoref}></input>
                    <label>Email</label>
                    <input type="email" ref={this.email}></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        )
    }
}

export default Uncontrolled;