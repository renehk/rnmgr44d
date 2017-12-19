import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';


// GOOGLE MAPS API KEY AIzaSyDPHDpoA2I2LkE0Zynal0JxxvEo7gdgHy8
// Get current users locaiton on load
class LoadLocation extends Component {
  render() {
      return (
      <View style={ styles.mapContainerStyle }>
        <MapView
          style={ styles.mapStyle }
          showsUserLocation = {true}
        />
      </View>
      );
  }
  componentDidMount() {

      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        let newLat = parseFloat(position.coords.latitude);
        console.log('newLat', newLat);
        let newLng = parseFloat(position.coords.longitude);
        console.log('newLng', newLng);
        // set region of user to lat and long position
        // deltas set distance from marker (zoom) on map
        this.setState({
          region: {
            latitude: newLat,
            longitude: newLng,
            latitudeDelta: 0.0250,
            longitudeDelta: 0.0125
          },
          error: null
        });
        console.log(this.state);
      }

      // if error set state with error

    );

    // watch for changes and update location
    this.watchId = navigator.geolocation.watchPosition((position) => {
      console.log(position);
      let newLat = parseFloat(position.coords.latitude);
      console.log('newLat', newLat);
      let newLng = parseFloat(position.coords.longitude);
      console.log('newLng', newLng);
      // set region of user to lat and long position
      // deltas set distance from marker (zoom) on map
      this.setState({
        region: {
          latitude: newLat,
          longitude: newLng,
          latitudeDelta: 0.0250,
          longitudeDelta: 0.0125
        },
        error: null
      });
      console.log(this.state);
    }

    );
  }
}

const styles = {
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 400,
    width: 400,
    justifyContent: 'flex-end'
  },
  mapContainerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
};

export default LoadLocation;
