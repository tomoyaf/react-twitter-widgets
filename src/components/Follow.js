import React from 'react'
import AbstractWidget from './AbstractWidget'

export default class Follow extends React.Component {
  static propTypes = {
    username: React.PropTypes.string.isRequired,
    options: React.PropTypes.object
  };

  static defaultProps = {
    options: {}
  };

  ready(tw, element) {
    const { username, options } = this.props

    tw.widgets.createFollowButton(username, element, options)
    .then(() => {
      // Widget is loaded
    })
  }

  render() {
    return <AbstractWidget ready={::this.ready} />
  }
}
