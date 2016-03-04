import React from 'react'
import $script from 'scriptjs'

export default class AbstractWidget extends React.Component {
  static propTypes = {
    ready: React.PropTypes.func.isRequired
  };

  componentDidMount() {
    this.loadWidget()
  }

  componentDidUpdate() {
    this.loadWidget()
  }

  loadWidget() {
    const { widgetWrapper } = this.refs

    $script.ready('twitter-widgets', () => {
      // Delete existing
      this.removeChildren(widgetWrapper)

      // Create widget
      this.props.ready(window.twttr, widgetWrapper, ::this.done)
    })
  }

  done() {
    this.removeChildrenExceptLast(this.refs.widgetWrapper)
  }

  removeChildren(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild)
    }
  }

  removeChildrenExceptLast(node) {
    while (node.childNodes.length > 1) {
      node.removeChild(node.firstChild)
    }
  }

  render() {
    return <div ref="widgetWrapper" />
  }
}
