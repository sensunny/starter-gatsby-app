import React from "react"
import "./table.css"
import { Button } from "react-bootstrap"

export default class TableComponent extends React.Component {
	constructor (args) {
		super(args)
		this.lastId = 0
		// Input or intial column definitions
		this.columnDefinitions = [
			{
				id: 1,
				label: "Text Column",
				width: "30%",
				type: "text"
			},
			{
				id: 2,
				label: "Input Column",
				width: "30%",
				type: "input"
			},
			{
				id: 3,
				label: "Number Column",
				width: "20%",
				type: "number"
			},
			{
				id: 4,
				label: "Checkbox Column",
				width: "10%",
				type: "checkbox"
			}
		]
		// current rows data
		this.state = {
			currentRows: []
		}
	}
	addRows = () => {
		const { currentRows } = this.state
		// making unique id by increment last used id
		this.lastId = this.lastId + 1
		// intial rows value
		let intialInputsArray = []
		this.columnDefinitions.map((item) => {
			if (item.type === "text" || item.type === "input") {
				// intital value of input type is text should be empty string
				intialInputsArray.push("")
			} else if (item.type === "number") {
				// intital value of input type is number should be number
				intialInputsArray.push(0)
			} else if (item.type === "checkbox") {
				// intital value of input type is checkbox should be true or false
				intialInputsArray.push(false)
			} else {
				// and for other type of inputs can be null
				intialInputsArray.push(null)
			}
		})
		// making intial new added rows array object with previos values
		currentRows.push({
			id: this.lastId,
			// assigning initial values to new rows with extra key name func which is identifier of delete this rows
			colData: [...intialInputsArray, "fn"]
		})
		// assigning updated value to our state variable name currentrows
		this.setState({
			currentRows
		})
	}
	// handleinput func needed 4 params
	// 1st is e which input structure data so that we can find updated value
	// 2nd is rowId, because we need to find for where to update the value
	// 3rd is input index so that we can directly change the input value by using combination of row id and index of input
	// 4rth is type, only for find the type checkbox
	handleInput = (e, rowId, indexOfInput, type) => {
		let { currentRows } = this.state
		// assigning input values at the particular index in the row data array
		currentRows.map((item, i) => {
			if (item.id === rowId) {
				if (type === "checkbox") {
					// if type is checkbox then it should e.target.checked
					// otherwise general is e.target.value
					currentRows[i].colData[indexOfInput] = e.target.checked
				} else {
					currentRows[i].colData[indexOfInput] = e.target.value
				}
			}
		})
		// updating the row data
		this.setState({
			currentRows
		})
	}
	// handleRemove one param which is id of to be delete row
	handleRemove = (id) => {
		let { currentRows } = this.state
		let updatedRows = []
		// finding the row id
		// if row id is match then it should not be in updated rows
		currentRows.map((item, i) => {
			if (i !== id) {
				updatedRows.push(item)
			}
		})
		// updating the row data
		this.setState({
			currentRows: updatedRows
		})
	}
	render () {
		// getting the row data from state which currentRows
		const { currentRows } = this.state
		return (
			<div style={{ width: "80%", margin: "50px auto" }} className="table__component">
				<table>
					<tbody>
						<tr>
							{/*
								rendring the table header with add rows function
							*/}
							{this.columnDefinitions.map((item) => {
								return (<th key={item.id} width={item.width}>
									<label>{item.label}</label>
								</th>)
							})}
							<th width="10%">
								<Button className="btn btn-primary" onClick={this.addRows}>Add rows</Button>
							</th>
						</tr>
						{currentRows.map((row, indexOfRow) => {
							return <tr key={row.id}>
								{row["colData"].map((value, indexOfInput) => {
									/*
										get the coldef data by using input coldata of rowdata
									*/
									let coldef = this.columnDefinitions[indexOfInput]
									/*
										if value is fn then it should show us delete row
										otherwise make input according to col definitions and
										with update row functionality
									*/
									return (value !== "fn"
										? <td width={coldef.width} key={`${indexOfInput} ${row.id}`}>
											<input onChange={e => this.handleInput(e, row.id, indexOfInput, coldef.type)}
												className="form-control"
												type={coldef.type}
												value={value} />
										</td> : <td width="10%" key={`fn${row.id}`}>
											<Button className="btn btn-danger" onClick={() => this.handleRemove(indexOfRow)}>Delete this row</Button>
										</td>)
								})}
							</tr>
						})}
					</tbody>
				</table>
			</div>
		)
	}
}
