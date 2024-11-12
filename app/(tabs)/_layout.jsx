import { View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect} from 'expo-router'
import { icons } from '../../constants'

const TabIcon=({icon,color,name,focused})=>{
  return (
    <View>
      <Image style={{width:20}}
        source={icon}
        resizeMode="contain"
        className="w-1 h-1"
        tintColor={color}
      />
    </View>
  )  
}
const TabLayout = () => {
  return (
   <>
      <Tabs>
        <Tabs.Screen
          name="Home"
          options={{
            title:'Home',
            headerShown:false,
            tabBarIcon: ({color,focused}) =>(
              <TabIcon
                icon={icons.Home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }} 
        />// end of Home Screen
        <Tabs.Screen
          name="list"
          options={{
            title:'list',
            headerShown:false,
            tabBarIcon: ({color,focused}) =>(
              <TabIcon
                icon={icons.list}
                color={color}
                name="list"
                focused={focused}
              />
            )
          }} 
        />//end of list
        <Tabs.Screen
          name="notification"
          options={{
            title:'notification',
            headerShown:false,
            tabBarIcon: ({color,focused}) =>(
              <TabIcon
                icon={icons.notification }
                color={color}
                name="notification "
                focused={focused}
              />
            )
          }} 
        />//end of Notification 
        <Tabs.Screen
          name="profile"
          options={{
            title:'profile',
            headerShown:false,
            tabBarIcon: ({color,focused}) =>(
              <TabIcon
                icon={icons.profile}
                color={color}
                name="profile"
                focused={focused}
              />
            )
          }} 
        />//end of Profile 
      </Tabs>
   </>
  )
}
export default TabLayout