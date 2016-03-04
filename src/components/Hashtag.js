import React from 'react'
import AbstractWidget from './AbstractWidget'
import isEqual from 'lodash.isequal'

export default class Hashtag extends React.Component {
  static propTypes = {
    hashtag: React.PropTypes.string.isRequired,
    options: React.PropTypes.object
  };

  static defaultProps = {
    options: {}
  };

  shouldComponentUpdate(nextProps) {
    const changed = name => !isEqual(this.props[name], nextProps[name])
    return changed('hashtag') || changed('options')
  }

  ready(tw, element, done) {
    const { hashtag, options } = this.props

    tw.widgets.createHashtagButton(hashtag, element, options)
    .then(() => {
      // Widget is loaded
      done()
    })
  }

  render() {
    return <AbstractWidget ready={::this.ready} />
  }
}
