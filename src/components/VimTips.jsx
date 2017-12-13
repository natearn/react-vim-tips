import React from 'react'
import { fetchTips } from 'wikia'

class VimTips extends React.Component {

	getIntialState() {
		return {}
	}

	componentDidMount() {
		fetchTips().then(tips => this.setState(tips))
	}

	render() {
		const tips = this.state
		return (
			<p>{tips ? tips.toString() : "Hi!"}</p>
		)
	}
}

export default VimTips
