import React, { Component } from 'react';

import { Text } from 'react-native';
import styles from './styles';
import { colors } from '../../../styles';

const Title = ({textContent}) => (
    <Text style={styles.titlePrimary}>{ textContent.toUpperCase() }</Text>
);

export default Title;