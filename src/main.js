import React from 'react'
import ReactDOM from 'react-dom'
import VimTips from 'components/VimTips'

export const render = (props,node) => ReactDOM.render(<VimTips {...props} />,node)
