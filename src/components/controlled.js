import React from 'react';


class Controlled extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',rollno:''
        };
        this.handlesubmit=this.handlesubmit.bind(this);
        this.changestate=this.changestate.bind(this);
    }
    handlesubmit(event)
    {
        alert(`Successfully submitted data of ${this.state.rollno}`);
        event.preventDefault();
    }
    changestate(event)
    {
        const {name,value}=event.target;
        this.setState({ name: event.target.value ,rollno:event.target.value});
    }
    render()
    {
        return(
            <div>
                <h1>Controlled form</h1>
                <form onSubmit={this.handlesubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.changestate}></input>
                    <label>RollNo:</label>
                    <input type="text" name="rollno" value={this.state.rollno} onChange={this.changestate}></input>
                    <label>Department:</label>
                    <input type="text" name="department" value={this.state.department} onChange={this.changestate}></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        )
    }
}


export default Controlled;