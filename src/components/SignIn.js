import React, { Component } from 'react'
import {login} from "./UserFunction"

class SignIn extends Component{
    constructor(){
        super()
        this.state ={
            email:'',
            password:''
        }
        this.onchange = this.onchange.bind(this)
        this.onchange = this.onchange.bind(this)
    }
onchange(e){
    this.setState({[e.target.name]: e.target.value})
}
onSubmit(e){
    e.preventDefault()
    const User ={
        email:this.state.email,
        password:this.state.password
    }
    login(User).then(res =>{
        if(res){
            this.props.history.push('/profile')
        }
    })
}
    


    render(){
        return(
            
            
            <section class="ftco-section ftco-services-2">
                <div class="container">
                    <div class="row">
                        <h2>Sign in</h2>
                        <div class="col-md-12 tour-wrap">
                            <form noValidate onSubmit={this.onSubmit}>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Email</th>
                                            <td>
                                                <input type="email" name="email" value={this.state.email} onChange={this.onchange}/>
                                            </td>
                                            <td></td>
                                        </tr>
        
                                        <tr>
                                            <th scope="row">Password</th>
                                            <td>
                                                <input type="password" name="pass" value={this.state.password} onChange={this.onchange} />
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <button type="submit">Sign In</button>
                                            </td>
                                            <td></td>
                                        </tr>
        
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </section> 

        )
    }
}
export default SignIn