import React from 'react'
import AbstractWidget from './AbstractWidget'

export default class Share extends React.Component {
  static propTypes = {
    url: React.PropTypes.string.isRequired,
    options: React.PropTypes.object
  };

  static defaultProps = {
    options: {}
  };

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
