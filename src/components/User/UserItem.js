import React, { Component } from 'react'

 class UserItem extends Component {
   
  render() {
    const { login,avatar_url,html_url }= this.props.user;
    return (
      <div className='card text-center p-3 mb-3 h-100' style={{width:"60"}}>
       
        <img src={avatar_url} alt="" className='rounded-circle mx-auto mb-3' style={{width:'100px'}}/>
         <h4>{login}</h4>
         <a className='btn btn-dark btn-sm mt-2' href={html_url} >View Profile</a>
      </div>
   
   

    )
  }
}

export default UserItem