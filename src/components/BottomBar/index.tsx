import {Text, TouchableOpacity, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {ReactElement} from 'react';
import HomeIcon from '../../icon/home-icon.svg';
import DiagnoseIcon from '../../icon/diagnose.svg';
import ScanIcon from '../../icon/scan.svg';
import GardenIcon from '../../icon/garden.svg';
import ProfileIcon from '../../icon/profile-icon.svg';
import {bottomBarStyles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  StackActions,
  TabActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

const tabs: Array<BottomBarItemProps> = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    type: 'tab',
  },
  {
    name: 'Diagnose',
    icon: <DiagnoseIcon />,
    type: 'tab',
  },
  {
    icon: (
      <ScanIcon
        style={{
          position: 'absolute',
          bottom: 9,
        }}
      />
    ),
    type: 'stack',
    screenKey: 'Scanner',
  },
  {
    name: 'My Garden',
    icon: <GardenIcon />,
    type: 'tab',
  },
  {
    name: 'Profile',
    icon: <ProfileIcon />,
    type: 'tab',
  },
];

export default function BottomBar(props: BottomTabBarProps) {
  function renderTabs() {
    return tabs.map((items, id) => {
      const isActive =
        props.state.routes.findIndex(f => f.name === items.name) ===
        props.state.index;
      return (
        <BottomBarItem {...items} key={items.name || id} isActive={isActive} />
      );
    });
  }

  return (
    <SafeAreaView
      edges={['bottom']}
      style={bottomBarStyles.safeArea}
      mode={'padding'}>
      <View style={bottomBarStyles.container}>{renderTabs()}</View>
    </SafeAreaView>
  );
}

export interface BottomBarItemProps {
  name?: string;
  icon: ReactElement;
  screenKey?: string;
  type: 'tab' | 'stack';
  isActive?: boolean;
}
export function BottomBarItem(props: BottomBarItemProps) {
  const navigation = useNavigation();
  const Icon = props.name
    ? React.cloneElement(props.icon, {
        fill: props.isActive ? '#28AF6E' : '#BDBDBD',
      })
    : props.icon;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={bottomBarStyles.item}
      onPress={() => {
        if (props.type === 'tab') {
          navigation.dispatch(TabActions.jumpTo(props.name!));
        } else {
          navigation.dispatch(StackActions.push(props.screenKey!));
        }
      }}>
      {Icon}
      {props.name && (
        <Text
          style={[
            bottomBarStyles.text,
            props.isActive && bottomBarStyles.textActive,
          ]}>
          {props.name}
        </Text>
      )}
    </TouchableOpacity>
  );
}
