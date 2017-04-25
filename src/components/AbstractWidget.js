import React from 'react'
import PropTypes from 'prop-types'

export default class AbstractWidget extends React.Component {
  static propTypes = {
    ready: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.willUnmount = false
  }

  componentDidMount() {
    this.loadWidget()
  }

  componentDidUpdate() {
    this.loadWidget()
  }

  componentWillUnmount() {
    this.willUnmount = true
  }

  loadWidget() {
    const { widgetWrapper } = this.refs
    const $script = require('scriptjs')

    $script.ready('twitter-widgets', () => {
      if (!window.twttr) {
        // If the script tag fails to load, scriptjs.ready() will still trigger.
        // Let's avoid the JS exceptions when that happens.
        console.error('Failure to load window.twttr, aborting load.')
        return
      }

      // Delete existing
      this.removeChildren(widgetWrapper)

      // Create widget
      this.props.ready(window.twttr, widgetWrapper, ::this.done)
    })
  }

  done() {
    if (this.willUnmount) {
      this.removeChildrenExceptLast(this.refs.widgetWrapper)
    }
  }

  removeChildren(node) {
    if (node) {
      while (node.firstChild) {
        node.removeChild(node.firstChild)
      }
    }
  }

  removeChildrenExceptLast(node) {
    if (node) {
      while (node.childNodes.length > 1) {
        node.removeChild(node.firstChild)
      }
    }
  }

  render() {
    return <div ref="widgetWrapper" />
  }
}
