import React from "react"


export class Home extends React.Component {
	constructor (args) {
		super(args)
		this.state = {}
	}
	render () {
		return (
			<div className="home__section">
				<div className="home_heading">HOME</div>
			</div>
		)
	}
}

export default Home
