import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // Survey style
  outer: {
    flex: 1,
    backgroundColor: '#fff',
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
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  // ADULT / KID
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
  // Calendar
  calendar: {
    paddingTop: 10,
    alignSelf: 'center',
    width: 360, // just a pun
    height: 410,
  },
  calendar_btn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
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
  },
});

export {styles};
