import React, { Component } from 'react';

import { View, Text } from 'react-native';

// import styles from './styles';

export default class LeftButton extends Component {
  render() {
    const { goBack } = this.props.navigation;

    return (
      <Text>VOLTAR</Text>
    );
  }
}
