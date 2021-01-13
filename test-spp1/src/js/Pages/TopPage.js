import React, { Component } from 'react';
import Topkapi from '../../img/topkapi.jpg';

export default class TopPage extends Component {
  render() {
    return (
      <div class="img_center">
        <img class="topImage" src={Topkapi} alt="トップ画像"/>
      </div>
    );   
  }
}