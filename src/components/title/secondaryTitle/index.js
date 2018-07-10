import React, { Component } from 'react';

import { Text } from 'react-native';
import styles from './styles';
import { colors } from '../../../styles';

const secondaryTitle = ({textContent}) => (
    <Text style={styles.secondaryTitle}>{ textContent }</Text>
);

export default secondaryTitle;