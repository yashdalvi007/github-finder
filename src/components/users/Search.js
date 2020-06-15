import React, { Component } from 'react'

class Search extends Component {

    state={
        text:''
    }

    handleChange = (e) =>{
        this.setState({text:e.target.value});
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.state.text===''){
            this.props.setAlert('Please enter something', 'light')
        }else{
        this.props.searchUsers(this.state.text);
        this.setState({text:''})
        }
        }

    render() {
        return (
            <div>
                <form className='form' onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.text} name='text' placeholder='Search users...' onChange={this.handleChange}/>
                    <input type='submit' value='Search' className='btn btn-dark btn-block' />
                </form>
                <button className='btn btn-light btn-block' onClick={this.props.clearUsers}>Clear</button>          
            </div>
        )
    }
}

export default Search
