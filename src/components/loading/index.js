import React, { Component } from 'react';

import { View, ActivityIndicator } from 'react-native';
import { colors } from '../../styles';

// import styles from './styles';

export default class Loading extends Component {
  render() {
    return (
        <View style={{flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size={'large'} color={colors.primary}/>
        </View>
    );
  }
}
