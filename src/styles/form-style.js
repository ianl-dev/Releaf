import {StyleSheet} from 'react-native';
// import Dimensions from 'Dimensions';

// const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  // Login style
  input_text: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: 100,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
  },
  inputWrapper: {
    flex: 1,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
  // Tag style
  tag_outer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingBottom: 10,
    width: 390,
    paddingLeft: 25,
  },
  tag_show: {
    marginRight: 3,
    paddingRight: 3,

    marginBottom: 10,
  },
  tag_wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 15,
    paddingTop: 10,
    paddingLeft: 15,
  },
  tag: {
    flexWrap: 'wrap',
    width: 100,
    alignContent: 'center',
    marginRight: 10,
    paddingLeft: 3,
    paddingRight: -10,
  },
  // Survey style
  outer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card_contain: {
    borderColor: '#000000',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  container_horiz: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ff0000',
  },
  center: {
    fontSize: 27,
    paddingBottom: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  center_art: {
    fontSize: 22,
    alignSelf: 'center',
    paddingTop: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 30,
    marginBottom: -30,
  },
  // Text-input
  input: {
    alignSelf: 'center', // centered text
    fontSize: 18,
    // controls the size of outlined input
    padding: 8,
    margin: 12,
    width: 300,
  },
  input_error: {
    fontSize: 15,
    color: 'red',
    textAlign: 'right',
    paddingRight: 50, // error sits at the right of input
    marginTop: -20,
    // marginTop: 10, // vertical gap between input box and error message
  },
  input_picker: {
    alignSelf: 'center',
    width: 300,
  },
  input_searchbar: {
    alignSelf: 'center',
    marginVertical: 30,
    padding: 8,
    margin: 12,
    width: 330,
  },
  input_searchbar_inline: {
    alignSelf: 'center',
    padding: 8,
    marginHorizontal: 10,
    marginVertical: 6,
    width: 330,
  },
  avatar: {
    alignSelf: 'center',
    marginTop: -50,
    marginBottom: 30,
  },
  // Buttons
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50, // vertical gap b/w 2nd input box and buttons
  },
  btn_text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  btn_disabled: {
    backgroundColor: '#000',
  },
  btn_size: {
    height: 50,
    width: 90,
  },
  btn_new: {
    flex: 1,
    // borderRadius: 15,
    justifyContent: 'flex-end',
  },
  btn_cicle: {
    paddingTop: 6,
    paddingBottom: 5,
    borderRadius: 100,
  },
  btn_right: {
    position: 'absolute',
    right: 20,
  },
  btn_fab_center: {
    marginTop: 10,
    alignSelf: 'center',
  },
  btn_add_minus: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 35, // vertical gap b/w 2nd input box and buttons
  },
  // Data table
  table: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: 350,
    paddingTop: 30, // keep distance from text
  },
  calendar: {
    paddingTop: 10,
    alignSelf: 'center',
    width: 360, // just a pun
    height: 410,
  },
  calendar_btn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  calendar_btn_content: {
    height: 50,
    width: 120,
  },
  calendar_btn_label: {
    fontSize: 15,
  },
  confirm_btn_shape: {
    borderRadius: 100,
    height: 50,
    paddingTop: 8,
  },
  confirm_btn_shape_updated: {
    borderRadius: 100,
    height: 50,
    paddingTop: 10,
  },
});

export {styles};
