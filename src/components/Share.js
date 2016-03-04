import React from 'react'
import AbstractWidget from './AbstractWidget'
import isEqual from 'lodash.isequal'

export default class Share extends React.Component {
  static propTypes = {
    url: React.PropTypes.string.isRequired,
    options: React.PropTypes.object
  };

  static defaultProps = {
    options: {}
  };

  shouldComponentUpdate(nextProps) {
    const changed = name => !isEqual(this.props[name], nextProps[name])
    return changed('url') || changed('options')
  }

  ready(tw, element, done) {
    const { url, options } = this.props

    tw.widgets.createShareButton(url, element, options)
    .then(() => {
      // Widget is loaded
      done()
    })
  }

  render() {
    return <AbstractWidget ready={::this.ready} />
  }
}
