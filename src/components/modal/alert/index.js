export function clickCurse(title, mensager) {
    Alert.alert(
        title,
        mensager,
        // 'Alert Title',
        // 'My Alert Msg',
            [
                // this.btnAlertConfirm(confirm),
                // this.btnAlertCancel(cancel)
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')}
            ],
        { cancelable: false }
    )
}