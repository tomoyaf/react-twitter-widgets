import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './WidgetExample.css'

import {
  Follow,
  Hashtag,
  Mention,
  Share,
  Timeline,
  Tweet,
} from '../../dist'


const widgetNameToComponentMap = {
  Follow,
  Hashtag,
  Mention,
  Share,
  Timeline,
  Tweet,
}


export default class WidgetExample extends Component {
  render() {
    const { widget, widgetProps } = this.props

    const c = widgetNameToComponentMap[widget] || 'div'

    return (
      <div className="WidgetExample-container">
        <h3>{widget}</h3>
        {React.createElement(c, widgetProps)}
      </div>
    )
  }
}

WidgetExample.propTypes = {
  widget: PropTypes.oneOf(Object.keys(widgetNameToComponentMap)).isRequired,
  widgetProps: PropTypes.object.isRequired,
}
