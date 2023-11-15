import { PureComponent, PropsWithChildren } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { connect } from 'react-redux';



@connect((state) => ({
  name:1
}))
export default class extends PureComponent {
  render(){
    return <View>View</View>
  }
}