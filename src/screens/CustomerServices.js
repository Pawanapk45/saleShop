import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CustomComponent from '../components/modals/Component'

export default class CustomerServices extends Component {
  render() {
    return (
      <>
        <CustomComponent ShowIcon={false} textContent={"Customer Services"}/>
        <CustomComponent iconName='whatsapp'  textContent={"whatsApp"}/>
        <CustomComponent iconName='telegram'  textContent={"Teleggram"}/>
      </>
    )
  }
}
