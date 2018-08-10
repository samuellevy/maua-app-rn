import React, { Component } from 'react';

import { View,Text } from 'react-native';

import styles from './styles';

import CardHeader from '../cardheader';
import CardFooter from '../cardfooter';

export default class Card extends Component {
  render() {
    // let title = this.props.title;
    let icon = this.props.icon;
    let color = this.props.color;
    let colorBg = this.props.colorBg;

    const {children} = this.props;
    return (
      <View style={styles.container}>
        <CardHeader icon={icon} color={color} colorBg={colorBg}/>
        <View style={styles.card}>
          {/* {children} */}
          {React.Children.map(children, (child, i) => {
            return React.cloneElement(child, {
              color: color
            })
          })}
        </View>
      </View>
    );
  }
}
