import React, { Component } from 'react';
import { StyleBox } from './style';

export default class IsoWidgetBox extends Component {
  render() {
    const { children } = this.props;

    const boxStyle = {
      height: this.props.height,
      padding: this.props.padding,
    };

    return (
      <StyleBox className="isoWidgetBox" style={boxStyle}>
        {children}
      </StyleBox>
    );
  }
}
