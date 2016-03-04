import React from 'react'
import AbstractWidget from './AbstractWidget'

export default class Timeline extends React.Component {
  static propTypes = {
    widgetId: React.PropTypes.string.isRequired,
    options: React.PropTypes.object
  };

  static defaultProps = {
    options: {}
  };

  ready(tw, element) {
    const { widgetId, options } = this.props

    tw.widgets.createTimeline(widgetId, element, options)
    .then(() => {
      // Widget is loaded
    })
  }

  render() {
    const { widgetId, options } = this.props
    return (
      <AbstractWidget
        ready={::this.ready}
      />
    )
  }
}
