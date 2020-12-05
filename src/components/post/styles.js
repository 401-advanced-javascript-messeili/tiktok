import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
const me = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height,
  },
  backgroundVideo: {
    height: me.height,
    width: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
  },
});

export default styles;
