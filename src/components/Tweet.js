import React from 'react'
import AbstractWidget from './AbstractWidget'

export default class Tweet extends React.Component {
  static propTypes = {
    tweetId: React.PropTypes.string.isRequired,
    options: React.PropTypes.object
  };

  static defaultProps = {
    options: {}
  };

  ready(tw, element) {
    const { tweetId, options } = this.props

    tw.widgets.createTweet(tweetId, element, options)
    .then(() => {
      // Widget is loaded
    })
  }

  render() {
    return <AbstractWidget ready={::this.ready} />
  }
}
