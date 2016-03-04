import React from 'react'
import $script from 'scriptjs'

export default class AbstractWidget extends React.Component {
  componentDidMount() {
    this.loadWidget()
  }

  componentDidUpdate() {
    this.loadWidget()
  }

  loadWidget() {
    // Delete existing
    this.emptyWidgetWrapperDOMChildren()

    $script.ready('twitter-widgets', () => {
      this.props.ready(window.twttr, this.refs.widgetWrapper)
    })
  }

  emptyWidgetWrapperDOMChildren() {
    const { widgetWrapper } = this.refs

    while (widgetWrapper.firstChild) {
      widgetWrapper.removeChild(widgetWrapper.firstChild)
    }
  }

  render() {
    return <div ref="widgetWrapper" />
  }
}
