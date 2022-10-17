/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Button, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, SafeAreaView } from "react-native";
import { styles } from "./styles";
import * as imageActions from "../../actions/imageList";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DetailScreen from "../detailScreen";

const ImageScreen= (props) => {

  const { imageList } = props;

  const [offSet, setOffset]= useState(0)
  const [dataSource, setDataSource] = useState(imageList);

  //for rendering list on the screen
  useEffect(() => {
    props.actions.getImageList(offSet);
  }, []);

  // getting images from api
  const getImages = () => {
    console.log('offset', offSet)
    setOffset(offSet + 1)
    let { actions } = props;
    actions.getImageList(offSet);
    setDataSource([...dataSource, ...imageList]);
  }

  //rendering footer view for flatlist
  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <SafeAreaView style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getImages}
          //On Click of button calling getData function to load more data
          style={styles.loadMoreBtn}>
          {
            props.loading ?
              <ActivityIndicator/>
              :
              <Text style={styles.btnText}>Click Here to Load</Text>
          }

        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  // separator view between two items of list
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  // function to render the image list ui
  const renderImages= (item)=> {
    return (
      <TouchableOpacity style={{padding: 10}}
                        onPress={()=> props.navigation.navigate('DetailScreen')}
      >
        <Image style={styles.imageStyle} resizeMode='cover' source={{ uri:  item.xt_image}}></Image>
      </TouchableOpacity>
    )
  }

  // rendering images
  const renderImageScreen = () => {
    return(
      <View styles={styles.container}>
        {
          <FlatList
            data={dataSource.length > 0 ? dataSource : imageList}
            renderItem={({ item }) => renderImages(item)}
            keyExtractor={item => item.id}
            ListFooterComponent={renderFooter}
            enableEmptySections={true}
            ItemSeparatorComponent={ItemSeparatorView}
          />
        }

      </View>
    )
  }

  return(
    renderImageScreen()
  )
}

const mapStateToProps = state => ({
  imageList: state.imageList.imageList,
  loading: state.imageList.loading
});

const ActionCreators = Object.assign(
  {},
  imageActions,
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageScreen)

