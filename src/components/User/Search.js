import React from 'react'

class Search extends React.Component {

    state = {
        search: '',
        showAlert: false
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value })

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.search.trim() === '') {
            this.setState({ showAlert: true });
          setTimeout(() => {
                this.setState({ showAlert: false });
            }, 3000);
            return;
        }

        this.props.searchUsers(this.state.search);
        this.setState({ search: '', showAlert: false });
    }


    render() {
        return (
            <>
                {
                    this.state.showAlert && (
                        <div className="alert alert-danger mb-2 py-2">
                            Please enter something to search
                        </div>
                    )
                }

                <form className="form gap-2 d-flex align-items-center" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="search"
                        value={this.state.search}
                        className='rounded-pill form-control'
                        onChange={this.onChange}
                        placeholder="Search Users..."
                    />

                    <button type="submit" className="btn btn-primary">
                        <i className="bi bi-search"></i>
                    </button>
                </form>
            </>
        )
    }
}

export default Search
