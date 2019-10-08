import React from 'react'

class SearchForm extends React.Component {

    state = {
        searchTerm: ''
    }

    submit = (e) => {
        e.preventDefault()
        this.props.onSearch(this.state.searchTerm)
        // this.clearTerm()
    }

    clearTerm = () => {
        this.setState({
            searchTerm: ''
        })
    }

    updateSearchTerm = (e) => {
        this.setState({
            searchTerm: e.target.value
        }, () => this.props.onSearch(this.state.searchTerm))
    }

    render() {
        const { buttonText } = this.props
        const { submit, clearTerm, updateSearchTerm } = this

        return (
            <form onSubmit={submit}>
                <input value={this.state.searchTerm} onChange={updateSearchTerm} />
                <button onClick={clearTerm}>Clear</button>
            </form>
        )
    }
}

export default SearchForm