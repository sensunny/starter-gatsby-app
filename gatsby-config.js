module.exports = {
	siteMetadata: {
		title: "Edugate",
		url: "http://www.alpexsolar.com",
		description: "Edugate",
		image: "https://blackelephantdigital.com/assets/img/Feature_Image1.jpg",
	},
	plugins: [
		`gatsby-plugin-sass`,
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "XXXXXXXXXXXXXX",
			},
		},
	]
}

// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131101289-1"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'UA-131101289-1');
// </script>
