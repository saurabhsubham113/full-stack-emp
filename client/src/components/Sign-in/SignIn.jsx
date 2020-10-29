import React from 'react';
import  axios from "axios";

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()
        const body = {
            email:this.state.email,
            password:this.state.password
        }
        const response = await axios.post('/login',body)
        if (response.data.status === 'success') {
            localStorage.setItem('token',response.data.data.token)
            this.setState({email:'',password:''})
        }else{
            alert(response.data.error)
            this.setState({email:'',password:''})
        }
    }

    handleChange =  e => {
        this.setState({[e.target.name]:e.target.value})
    }
    
   render(){
        return (
            <div className='signin mt-5' >
               <div className="row">
               <div className="col-md-4"></div>
               
                <div className="border border-dark rounded col-md-4">
                    <h3 className='text-center pt-2'>SIGN IN</h3>
                    <form className='signin-form p-4' onSubmit={this.handleSubmit}>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                name='email'
                                className='form-control'
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder='john@doe.com'
                                required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" 
                                name="password" 
                                onChange={this.handleChange}
                                className='form-control' 
                                value={this.state.password}
                                placeholder='enter your password' 
                                required />
                        </div>

                        <button 
                            className="btn btn-success form-control" 
                            type='submit'>
                                Submit
                        </button>
                    </form>
                </div>
                <div className="col-md-4"></div>
               </div>
            </div>
        )
   }
}
