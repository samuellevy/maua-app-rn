import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

export default class CommentBox extends Component {
  render() {
      let status = this.props.status;
      let explanation = this.props.data.explanation;
    return (
      <View>
            {status==0?
                <View style={styles.answersWrong}><Text style={styles.textComment}>Resposta incorreta. {explanation}</Text></View>:
                <View style={styles.answersCorrect}><Text style={styles.textComment}>Acertou! {explanation}</Text></View>
            }
      </View>
    );
  }
}
