import React from 'react'
import PropTypes from 'prop-types'
import AbstractWidget from './AbstractWidget'
import isEqual from 'lodash.isequal'
import cloneDeep from 'lodash.clonedeep'

export default class Timeline extends React.Component {
  static propTypes = {
    dataSource: PropTypes.object.isRequired,
    options: PropTypes.object,
    onLoad: PropTypes.func
  };

  static defaultProps = {
    options: {},
    onLoad: () => {}
  };

  shouldComponentUpdate(nextProps) {
    const changed = name => !isEqual(this.props[name], nextProps[name])
    return changed('dataSource') || changed('options')
  }

  ready(tw, element, done) {
    const { dataSource, options, onLoad } = this.props

    // Options must be cloned since Twitter Widgets modifies it directly
    tw.widgets.createTimeline(dataSource, element, cloneDeep(options))
    .then(() => {
      // Widget is loaded
      done()
      onLoad()
    })
  }

  render() {
    return <AbstractWidget ready={::this.ready} />
  }
}
