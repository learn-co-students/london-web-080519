import React, { Component } from 'react'
import StockTicker from './StockTicker'
import DigitalClock from './DigitalClock'

class WidgetSelector extends Component {

  state = {
    companies: ["Flatiron", "Apple", "Google", "Facebook"]
  }

  constructor() {
    super()
    console.log(this.__proto__.constructor.name, "constructor")
  }
  
  componentDidMount() {
    console.log(this.__proto__.constructor.name, "did mount")
  }
  
  componentDidUpdate() {
    console.log(this.__proto__.constructor.name, "did update")
  }

  componentWillUnmount() {
    console.log(this.__proto__.constructor.name, "will unmount")
  }

  deleteCompany = c => this.setState({ companies: this.state.companies.filter(company => company !== c)})

  render () {
    console.log(this.__proto__.constructor.name, "render")
    return (
      <div className="app-children">
        <h3>Widget Selector</h3>
        { this.props.showStockTicker ? 
        this.state.companies.map(company => <StockTicker key={company} company={company} deleteFunction={() => this.deleteCompany(company)}/>) : 
        <DigitalClock />}
        <button onClick={this.props.toggleWidgets}>Toggle</button>
      </div>
    )
  }
}

export default WidgetSelector
