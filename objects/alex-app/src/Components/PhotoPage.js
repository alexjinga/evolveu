import React from 'react'

class PhotoPage extends React.Component{
	
	render(){
		return(
			<div>
				<h2> Hello From Picture Component </h2>
				<img className="photos" src="https://media3.giphy.com/media/22s0uCEHR9WuI/giphy.gif" alt = "missing photo!"
				/>
				<br />
				<br />
			</div>
		)
	}
}

export default PhotoPage
