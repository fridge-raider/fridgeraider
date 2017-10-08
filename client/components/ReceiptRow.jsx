import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import history from '../history'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter } from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import _ from 'lodash'
import {setReceipt} from '../store'

export class ReceiptRow extends Component {
  constructor(props) {
    super(props)

    // maintain local state for input while updating receipt
    this.state = {
      ing: this.props.ingredient.ing,
      servings: 1,
      category: 8,
      category_str: this.props.ingredient.category,
      price: this.props.ingredient.price,
      rep: this.props.ingredient.rep
    }

    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleQtyChange = this.handleQtyChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  componentWillMount() {
    let category = 8;
    if(this.props.ingredient.category === 'Grains') category = 0;
    else if(this.props.ingredient.category === 'Fruits') category = 1;
    else if(this.props.ingredient.category === 'Vegtables') category = 2;
    else if(this.props.ingredient.category === 'Dairy') category = 3;
    else if(this.props.ingredient.category === 'Meat') category = 4;
    else if(this.props.ingredient.category === 'Nuts and Legumes') category = 5;
    else if(this.props.ingredient.category === 'Fats') category = 6;
    else if(this.props.ingredient.category === 'Added Sugars') category = 7;
    else if(this.props.ingredient.category === 'Unsure') category = 8;
    this.setState({ category });

  }

  handleCategoryChange(evt, value) {
    let category_str = '';
    if(value === 0) category_str = 'Grains';
    else if(value === 1) category_str = 'Fruits';
    else if(value === 2) category_str = 'Vegtables';
    else if(value === 3) category_str = 'Dairy';
    else if(value === 4) category_str = 'Meat';
    else if(value === 5) category_str = 'Nuts and Legumes';
    else if(value === 6) category_str = 'Fats';
    else if(value === 7) category_str = 'Added Sugars';
    else if(value === 8) category_str = 'Unsure';
    this.setState({ category : value, category_str : category_str }, () => {
      this.props.updateReceipt(this.state, this.props.row, this.props.receipt)
    })

  }

  handleNameChange(evt, value) {
    this.setState({ing: value}, () => {
      this.props.updateReceipt(this.state, this.props.row, this.props.receipt)
    })
  }

  handleQtyChange(evt, value) {
    this.setState({servings: +value}, () => {
      this.props.updateReceipt(this.state, this.props.row, this.props.receipt)
    })
  }

  handlePriceChange(evt, value) {
    this.setState({price: value.substring(1)}, () => {
      console.log('this.state after setting', this.state)
      this.props.updateReceipt(this.state, this.props.row, this.props.receipt)
    })
  }

  render() {

    return (

  <TableRow>
    <TableRowColumn>
      {this.props.ingredient.rep}
    </TableRowColumn>
    <TableRowColumn>
      <TextField
      defaultValue={this.props.ingredient.ing}
      onChange={(evt, value) => this.handleNameChange(evt, value)}
      />
    </TableRowColumn>

    <TableRowColumn>
    <TextField
    defaultValue={1}
    onChange={(evt, value) => this.handleQtyChange(evt, value)}
    />
    </TableRowColumn>
    <TableRowColumn>
      <DropDownMenu value={this.state.category} onChange ={(evt, value) => this.handleCategoryChange(evt, value)}>
        <MenuItem value={0} primaryText="Grains" />
        <MenuItem value={1} primaryText="Fruits" />
        <MenuItem value={2} primaryText="Vegetables" />
        <MenuItem value={3} primaryText="Dairy" />
        <MenuItem value={4} primaryText="Meat" />
        <MenuItem value={5} primaryText="Nuts and Legumes" />
        <MenuItem value={6} primaryText="Fats" />
        <MenuItem value={7} primaryText="Added Sugars" />
        <MenuItem value={8} primaryText="Unsure" />
      </DropDownMenu>
    </TableRowColumn>

    <TableRowColumn>
    <TextField defaultValue={`\$${this.props.ingredient.price}`}
    onChange={(evt, value) => this.handlePriceChange(evt, value)}
    />
    </TableRowColumn>

  </TableRow>

    )
  }

}

const mapState = (state) => {
  return {
    currentReceipt: state.currentReceipt
  }
}

const mapDispatch = (dispatch) => {
  return {
    updateReceipt(state, row, receipt) {
      let item = {ing: state.ing, servings: state.servings, price: state.price, category: state.category_str, rep: state.rep};
      console.log(item);
      receipt[row] = item;
      dispatch(setReceipt(receipt))
    }
  }
}

export default connect(mapState, mapDispatch)(ReceiptRow)

