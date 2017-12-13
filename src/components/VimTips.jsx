import React from 'react'
import { fetchTips } from 'wikia'

class VimTips extends React.Component {

	getIntialState() {
		return null
	}

	componentDidMount() {
		// `this` doesn't exist yet, so we wrap it in a function.
		fetchTips().then(tips => this.setState(tips))
	}

	randomTip() {
		const index = Math.floor(Math.random() * this.state.items.length)
		const tip = this.state.items[index]
		return Object.assign({}, tip, {
			url: this.state.basepath + tip.url
		})
	}

	render() {
		if (this.state) {
			const tip = this.randomTip()
			return (
				<section>
					<a href={tip.url}>{tip.title}</a>
				</section>
			)
		} else {
			return (
				<section>
					<p>Incoming Tip!</p>
				</section>
			)
		}
	}
}

export default VimTips
