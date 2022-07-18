import { Platform, Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const platform = Platform.OS
const platformStyle = undefined
const isIphoneX =
  platform === 'ios' &&
  ((deviceHeight === 812 || deviceWidth === 812)
    || (deviceHeight === 844 || deviceWidth === 844)
    || (deviceHeight === 896 || deviceWidth === 896)
    || (deviceHeight === 926 || deviceWidth === 926))

export default {
  platformStyle,
  platform,

  // Color
  brandPrimary: '#2E2C38',
  brandInfo: '',
  brandSuccess: '#18E1C9',
  brandSecondary: '',
  brandDanger: '',
  brandWarning: '',
  brandDark: '#707070',
  brandDarkLight: '#435154',
  brandLight: '#FFFFFF',
  brandGrey: '#475E63',
  brandGreyNum: '#848484',
  lightGreyText: 'rgba(97, 123, 129, 1)',
  brandStockPrice: '#617B81',
  backOrderBlack: '#000709',
  backOrderItem: '#031316',
  brandTag: '#B2C235',
  brandBlack: '#000000',
  brandRed: '#FD3C21',
  brandGreen: '#006C6D',
  brandYellow: '#FFD379',
  brandOrange: '#ECAB04',
  defaultBackgroundColor: '#06181C',
  tabBarBorderColor: '#E5E8ED',
  tabBarActiveColor: '#24B445',
  tabBarInactiveColor: '#C2C2C2',
  tabBarBackgroundColor: '#000709',
  drawerBackgroundColor: '#07171A',
  backDishItem: '#021114',
  backPromoItem: '#142225',
  brandBackGrey: 'rgba(255, 255, 255, 0.35)',
  inactiveTab: 'rgba(255, 255, 255, 0.1)',
  placeholderText: 'rgba(255, 255, 255, 0.5)',
  inputBackground: '#142225',
  backDetailsPage: '#04262C',

  // Font


  //old fonts
  // fontBold: 'Montserrat-Bold',
  // fontSemiBold: 'Montserrat-SemiBold',
  // fontMedium: 'Montserrat-Medium',
  // fontLight: 'Montserrat-Light',
  // fontRegular: 'Montserrat-Regular',
  // fontHarRegular: 'HarmoniaSansProCyr-Regular',
  // fontHarSemiBold: 'HarmoniaSansProCyr-SemiBd',
  // fontHarBold: 'HarmoniaSansProCyr-Bold',

  //Stripe
  publicKey: 'pk_live_51JwlafREMxP9iIBqykfzgkqAkOd6GuhaEKSes3eO7MvSGCtradUs4flBzvbnk3bUP0zXjaCQgxU9hnJQQMShsLoU00U7oHopPD',

  deviceWidth,
  deviceHeight,
  isIphoneX,
  topSpace: isIphoneX ? 44 : 30,
  bottomSpace: isIphoneX ? 34 : 0,

  shadow: platform === 'ios' ? {
    shadowColor: opacify('#000000', 0.3),
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 1
  } : {
    elevation: 1
  }
}

export function opacify(color = '#ffffff', opacity = 1) {
  const o = Math.round(opacity * 256)
  const hexOpacity = o.toString(16)
  return color.concat(hexOpacity)
}
