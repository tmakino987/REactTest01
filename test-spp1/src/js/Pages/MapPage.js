import React, { Component } from 'react';
import HeadNavbar from '../Components/HeadNavbar'
import MapComponent from '../Components/MapComponent'

export default class MapPage extends Component {
    render() {
      return (
        <div>
          <HeadNavbar />
          <MapComponent />
        </div>
      );   
    }
  }