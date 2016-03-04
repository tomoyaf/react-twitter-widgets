import React from 'react'
import AbstractWidget from './AbstractWidget'
import isEqual from 'lodash.isequal'

export default class Follow extends React.Component {
  static propTypes = {
    username: React.PropTypes.string.isRequired,
    options: React.PropTypes.object
  };

  static defaultProps = {
    options: {}
  };

  shouldComponentUpdate(nextProps) {
    const changed = name => !isEqual(this.props[name], nextProps[name])
    return changed('username') || changed('options')
  }

  ready(tw, element, done) {
    const { username, options } = this.props

    tw.widgets.createFollowButton(username, element, options)
    .then(() => {
      // Widget is loaded
      done()
    })
  }

  render() {
    return <AbstractWidget ready={::this.ready} />
  }
}
