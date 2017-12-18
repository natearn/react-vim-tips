import React from 'react'
import { fetchTips } from 'wikia'

class VimTips extends React.Component {

	constructor() {
		super()
		this.state = {
			tips: [{
				url: "https://github.com/natearn/random-vim-tips",
				title: "Random Vim Tips is a React component"
			}],
			index: 0
		}
		fetchTips().then(tips => this.setState({
			tips: tips,
			index: Math.floor(Math.random() * tips.length),
		}))
	}

	render() {
		const tip = this.state.tips[this.state.index]
		return (
			<section>
				<a href={tip.url}>{tip.title}</a>
			</section>
		)
	}
}

export default VimTips
