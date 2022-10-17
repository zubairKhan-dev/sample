/*eslint-disable */
import { StyleSheet, Dimensions } from "react-native";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
function hp(percentage) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageUpload: {
    height: '30%',
    width: '90%',
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowView: {
    height: '10%',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    //backgroundColor: 'grey'
  },
  input: {
    width: '60%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputView: {
    position: 'absolute',
    right: 0
  }
});
