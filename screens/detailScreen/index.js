/* eslint-disable */
import React, { useCallback, useState } from "react";
import { Button, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import FilePicker from "react-native-document-picker";
import * as imageActions from "../../actions/imageList";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import validators from "../../util/validators";

const DetailScreen = (props) => {
  console.log(props);

  //form data
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    file_name: "",
    file_type: "",
    file_uri: "",
  });

  const [fileResponse, setFileResponse] = useState([]);

  // function called after picking image
  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await FilePicker.pick({
        presentationStyle: "fullScreen",
      });
      setFileResponse(response);
      console.log(response);
      setData({
        ...data,
        file_name: response[0].name,
        file_type: response[0].type,
        file_uri: response[0].uri,
      });
    } catch (err) {
      console.warn(err);
    }
  }, []);

  // posting details on server
  const postDetails = () => {
    if (data.first_name.match(validators.name) && data.last_name.match(validators.name) && data.phone.match(validators.phone) && data.email.match(validators.email)) {
      let { actions } = props;
      actions.postDetails(data);
    } else {
      alert("enter correct details");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.imageUpload}
        onPress={handleDocumentSelection}
      >
        <Image source={{ uri: data.file_uri }} style={{ width: "40%", height: "40%" }} />
        <Text>{data.file_name != "" ? data.file_name : "upload here"}</Text>
      </TouchableOpacity>
      <View style={styles.rowView}>
        <Text>
          First Name
        </Text>
        <TextInput
          style={styles.input}
          value={data.first_name}
          onChangeText={(val) => {
            setData({
              ...data,
              first_name: val,
            });
          }}
        />
      </View>
      <View style={styles.rowView}>
        <Text>
          Last Name
        </Text>
        <TextInput
          style={styles.input}
          value={data.last_name}
          onChangeText={(val) => {
            setData({
              ...data,
              last_name: val,
            });
          }}
        />
      </View>
      <View style={styles.rowView}>
        <Text>
          Email
        </Text>
        <TextInput
          style={styles.input}
          value={data.email}
          onChangeText={(val) => {
            setData({
              ...data,
              email: val,
            });
          }}
        />
      </View>
      <View style={styles.rowView}>
        <Text>
          Phone
        </Text>
        <TextInput
          style={styles.input}
          value={data.phone}
          onChangeText={(val) => {
            setData({
              ...data,
              phone: val,
            });
          }}
        />
      </View>
      <Button title={"submit"} onPress={postDetails} />
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  imageList: state.imageList.imageList,
  loading: state.imageList.loading,
  message: state.imageList.message,
});

const ActionCreators = Object.assign(
  {},
  imageActions,
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
