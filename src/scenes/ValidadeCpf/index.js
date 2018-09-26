import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles';

export default class ValidadeCpf extends Component {

    state = {
        cpf: null
    }

    validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');

        console.log('cpf');
        console.log(cpf)
        if (cpf == '') return false;
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;
        // Valida 1o digito	
        add = 0;
        for (i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return false;
        // Valida 2o digito	
        add = 0;
        for (i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            return false;
        return true;
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.body}>
                        <Text style={styles.txtTitle}>Valide seu CPF</Text>
                        <Text style={styles.txtDescription}>É muito importante que o CPF seja preenchido corretamente, pois este será utilizado em caso de premiação.</Text>
                        <TextInputMask type={'cpf'} style={styles.input} onChangeText={(cpf) => this.setState({ cpf })} placeholder='Digite seu CPF' value={this.state.cpf} autoCorrect={false} autoCapitalize='none' />

                        <Text style={styles.btnValidade} onPress={() => this.validarCPF(this.state.cpf)?this.props.navigation.navigate('Splash'):alert("CPF invalido")}>Validar</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


