import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

import Item from './components/item';
import rest from '../../services/rest';

export default class More extends Component {
  state = {
    typeUser: null
  };

  constructor (){ 
    super();
    this.componentDidMount();
  }

  componentDidMount(){
    rest.get('/public/infos').then((rest)=>{
        this.setState({
            typeUser: rest.user.role
        });
    })
  }

  	lojistaItem() {
    	return (
      		<View>
				{this.state.typeUser == "Lojista" &&
					<View>
						<View style={styles.border}>
							<TouchableOpacity onPress={() => { this.props.navigation.navigate('Employe'); this.setState({ screen: 'Employe' })}}>
								<Item icon={'account-multiple-outline'} title={'Funcionários'}/>
							</TouchableOpacity>
						</View>
					</View>
				}
      		</View>
    	);
  	}

  render() {
    console.log(this.state.typeUser)
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
          <View style={styles.border}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profile', this.props); this.setState({ screen: 'Profile' })}}>
              <Item icon={'border-color'} title={'Editar perfil'}/>
            </TouchableOpacity>
          </View> 
          {this.lojistaItem()}
          <View style={styles.border}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('AboutCourse'); this.setState({ screen: 'AboutCourse' })}}>
              <Item icon={'information-outline'} title={'Sobre o programa'}/>
            </TouchableOpacity>
          </View>
          <View style={styles.border}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Rule'); this.setState({ screen: 'rule' }) }}>
              <Item icon={'file-document-box'} title={'Regulamento'}/>
            </TouchableOpacity>
          </View> 
          {/* <View style={styles.border}>
            <TouchableOpacity>
              <Item icon={'earth'} title={'Blog'}/>
            </TouchableOpacity>
          </View> */}
          <View style={styles.border}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Contact'); this.setState({ screen: 'contact' }) }}>
              <Item icon={'comment-outline'} title={'Fale conosco'}/>
            </TouchableOpacity>
          </View>
          <View style={styles.border}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login'); }}>
              <Item icon={'export'} title={'Sair'}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}