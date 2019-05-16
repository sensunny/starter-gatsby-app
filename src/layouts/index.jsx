import React from "react"
import PropTypes from "prop-types"
import "./PageLayout.css"
import "../css/reset.css"
import "../css/loader.css"
import "../css/main.css"
import "animate.css/animate.min.css"
import { Provider } from "react-redux"
import "../components/slick.css"
import "../components/slick-theme.css"
// import $ from "jquery"
import createStore from "../state/createStore"
const store = createStore()

export class PageLayout extends React.Component {
	constructor (args) {
		super(args)
		this.state = {
		}
	}
	render () {
		const { children, location } = this.props
		const appChildren = process.env.NODE_ENV === "production" ? children({ location }) : children()
		return (
			<Provider store={store}>
				<div className="">
					{appChildren}
				</div>
			</Provider>
		)
	}
}

PageLayout.propTypes = {
	children: PropTypes.func,
	location: PropTypes.object
}

export default PageLayout
