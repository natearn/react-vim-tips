import React from 'react'
import { fetchTips } from 'wikia'
import Transition from 'react-addons-css-transition-group'

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
		fetchTips()
			.then(tips => this.setState({ tips: this.state.tips.concat(tips) }))
			.then(() => this.setRandomTip())
			.then(() => this.every(10000,() => this.setRandomTip()))
	}

	setRandomTip() {
		this.setState({
			index: Math.floor(Math.random() * this.state.tips.length)
		})
	}

	every(interval,action) {
		const delay = new Promise(resolve => {
			setTimeout(resolve,interval)
		})
		return delay
			.then(action)
			.then(() => this.every(interval,action))
	}

	render() {
		const tip = this.state.tips[this.state.index]
		return (
			<section>
				<Transition
					transitionName="link"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
				>
					<a key={tip.url} href={tip.url}>{tip.title}</a>
				</Transition>
			</section>
		)
	}
}

export default VimTips
