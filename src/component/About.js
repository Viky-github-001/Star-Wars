import React from 'react'

const About = ({match}) => {
	let id = match.params.userId || 'page'
	return(
		<h2>About {id}</h2>
	)
}

export default About