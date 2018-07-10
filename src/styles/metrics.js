import { Platform, Dimensions } from 'react-native';



export default {
  containerPadding: 30,
  marginDefault: 15,
  ...Platform.select({
    ios: { headerHeight: 94, headerPadding: 24 },
    android: { headerHeight: 44, headerPadding: 15 },
  }),
  
  tabBarHeight: 50,
  fonts:{
    /** @property size: 18 */
    xxbig: 24, 

    /** @property size: 18 */
    xbig: 18, 
    
    /** @property size: 16 */
    big: 16,
    
    /** @property size: 14 */
    medium: 14,
    
    /** @property size: 12 */
    small: 12,
    
    /** @property size: 10 */
    xsmall: 10,
    
    /** @property size: 8 */
    xxsmall: 8,
  },
  container:{
    defaultPadding: 15,
    marginBottom: 55,
  },
  title:{
    primary:{
      padding: 15
    }
  },
  paddings:{
    dynamicDefault: (Dimensions.get('window').height / 100) * 2
  }
};