import React, { Component } from 'react';
import { StyleWrapper } from './style';

export default class IsoWidgetsWrapper extends Component {
  render() {
    const {
      width,
      gutterTop,
      gutterRight,
      gutterBottom,
      gutterLeft,
      padding,
      bgColor,
      children,
    } = this.props;
    const wrapperStyle = {
      width: width,
      marginTop: gutterTop,
      marginRight: gutterRight,
      marginBottom: gutterBottom,
      marginLeft: gutterLeft,
      padding: padding,
      backgroundColor: bgColor,
    };

    return (
      <StyleWrapper className="isoWidgetsWrapper" style={wrapperStyle}>
        {children}
      </StyleWrapper>
    );
  }
}
