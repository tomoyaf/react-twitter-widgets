import React from 'react'
import AbstractWidget from './AbstractWidget'

export default class Mention extends React.Component {
  static propTypes = {
    username: React.PropTypes.string.isRequired,
    options: React.PropTypes.object
  };

  static defaultProps = {
    options: {}
  };

  ready(tw, element, done) {
    const { username, options } = this.props

    tw.widgets.createMentionButton(username, element, options)
    .then(() => {
      // Widget is loaded
      done()
    })
  }

  render() {
    return <AbstractWidget ready={::this.ready} />
  }
}
