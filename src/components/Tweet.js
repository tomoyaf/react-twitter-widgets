import React from 'react'
import AbstractWidget from './AbstractWidget'
import isEqual from 'lodash.isequal'

export default class Tweet extends React.Component {
  static propTypes = {
    tweetId: React.PropTypes.string.isRequired,
    options: React.PropTypes.object
  };

  static defaultProps = {
    options: {}
  };

  shouldComponentUpdate(nextProps) {
    const changed = name => !isEqual(this.props[name], nextProps[name])
    return changed('tweetId') || changed('options')
  }

  ready(tw, element, done) {
    const { tweetId, options } = this.props

    tw.widgets.createTweet(tweetId, element, options)
    .then(() => {
      // Widget is loaded
      done()
    })
  }

  render() {
    return <AbstractWidget ready={::this.ready} />
  }
}
