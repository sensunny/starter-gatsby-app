import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

import { siteMetadata as config } from "../gatsby-config"

const isProduction = process.env.NODE_ENV === "production"
// const openGraphUrl = isProduction ? `${config.url}/share.png` : "/share.png"

let styles
if (isProduction) {
	try {
		styles = require(`!raw-loader!../public/styles.css`)
	} catch (e) {
		console.error(e)
	}
}

const Html = ({ body, headComponents, postBodyComponents }) => {
	const helmet = Helmet.rewind()

	return (
		<html lang="en">
			<head>
				{headComponents}

				{/* Document */}
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				{/* Meta */}
				{helmet.title.toComponent()}
				{helmet.meta.toComponent()}
				<meta property="og:site_name" content={config.title} />
				<meta property="og:type" content="website" />

				{/* Favicon */}
				<link rel="icon" type="image/png" sizes="32x32" href="/Favicon.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/Favicon.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
				<meta name="theme-color" content="#000000" />
				<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css?family=Lato:400,700&ampsubset=latin-ext" rel="styleshee" />
				<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

				{/* Styles */}
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
				<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" />
				{styles && <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: styles }} />}
			</head>
			<body>
				<div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
				{postBodyComponents}
			</body>
		</html>
	)
}

Html.propTypes = {
	body: PropTypes.object,
	postBodyComponents: PropTypes.node,
	headComponents: PropTypes.object
}

export default Html
