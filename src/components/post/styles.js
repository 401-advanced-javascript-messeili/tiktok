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
    top: 5,
    left: 0,
    bottom: 0,
  },
  ui: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  sideUi: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    marginRight: 5,
  },
  Text: {
    color: 'white',
  },
  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    marginLeft: 7,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
    marginLeft: 7,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 7,
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 10,
  },
  iconsContainer: {
    alignItems: 'center',
  },
  statsLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  songImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginRight: 5,
  },
});

export default styles;
