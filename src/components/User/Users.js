import React, { Component } from 'react'
import axios from 'axios';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import Search from './Search';

export class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            loading: false
        }
    }
    async componentDidMount() {
        this.setState({ loading: true })
        const res = await axios.get('https://api.github.com/users');
        console.log("response", res)
        console.log("response data", res.data)
        setTimeout(() => {
            this.setState({ users: res.data, loading: false })
        }, 1000);
    }
 searchUsers = async (search) => {
  this.setState({ loading: true })

  const res = await axios.get(
    `https://api.github.com/search/users?q=${search}`
  )

  this.setState({
    users: res.data.items,
    loading: false
  })
}


    render() {
        return (
            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="m-0">GitHub Users</h2>
                    <Search searchUsers={this.searchUsers} />
                </div>

                {this.state.loading ? (
                    <Spinner />
                ) : (
                    <div className="row">
                        {this.state.users.map(user => (
                            <div className="col-md-4 mb-3" key={user.id}>
                                <UserItem user={user} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        )
    }

}

export default Users