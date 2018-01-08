import React from 'react'
import PropTypes from 'prop-types'
import { fetchTips } from 'wikia'
import Animate from 'react-animate-on-change'
import logo from 'public/Vimlogo.svg'

class VimTips extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			tips: [{
				url: "https://github.com/natearn/random-vim-tips",
				title: "Random Vim Tips is a React component"
			}],
			index: 0
		}
		fetchTips()
			.then(tips => this.setState({ tips: this.state.tips.concat(tips) }))
			.then(() => this.every(props.interval,() => this.setRandomTip()))
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
				<img src={logo} />
				<p>
					<Animate
						baseClassName="link"
						animationClassName="changed"
						animate={true}
					>
						<a href={tip.url}>{tip.title}</a>
					</Animate>
				</p>
			</section>
		)
	}
}

VimTips.propTypes = {
	interval: PropTypes.number,
}

VimTips.defaultProps = {
	interval: 10000,
}

export default VimTips
