import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingWelcomeScreen from './src/pages/Onboarding/OnboardingWelcome';
import OnboardingSlides from './src/pages/Onboarding/OnboardingSlides';
import Paywall from './src/pages/Paywall';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage, {HomeHeader} from './src/pages/Tabs/Home';
import DummyScreen from './src/pages/Tabs/DummyScreen';
import BottomBar from './src/components/BottomBar';
import {Provider} from 'react-redux';
import {store} from './src/store';

const Tab = createBottomTabNavigator();
export default function App() {
  const Stack = createNativeStackNavigator();
  const [startupScreen, setStartupScreen] = useState<
    'OnboardingWelcome' | 'Tabs' | undefined
  >(undefined);

  useEffect(() => {
    getStartupScreen();
  }, []);

  async function getStartupScreen() {
    const finished = await AsyncStorage.getItem('onboarding_finished');
    if (finished === 'true') {
      setStartupScreen('Tabs');
    } else {
      setStartupScreen('OnboardingWelcome');
    }
  }

  // avoid render before onboarding finished check
  if (!startupScreen) {
    return <View />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={startupScreen}
          screenOptions={{
            headerShown: false,
            navigationBarColor: 'transparent',
          }}>
          <Stack.Screen
            name="OnboardingWelcome"
            component={OnboardingWelcomeScreen}
            options={{
              statusBarTranslucent: true,
              statusBarColor: 'transparent',
              statusBarStyle: 'dark',
            }}
          />
          <Stack.Screen
            name="OnboardingSlides"
            component={OnboardingSlides}
            options={{
              statusBarTranslucent: true,
              statusBarColor: 'transparent',
              statusBarStyle: 'dark',
            }}
          />
          <Stack.Screen
            name="Paywall"
            component={Paywall}
            options={{
              statusBarTranslucent: true,
              statusBarColor: 'transparent',
              statusBarStyle: 'light',
            }}
          />
          <Stack.Screen
            name={'Tabs'}
            component={TabScreen}
            options={{
              statusBarTranslucent: true,
              statusBarColor: 'transparent',
              statusBarStyle: 'dark',
            }}
          />
          <Stack.Screen
            name={'Scanner'}
            component={DummyScreen}
            options={{
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function TabScreen() {
  return (
    <Tab.Navigator tabBar={props => <BottomBar {...props} />}>
      <Tab.Screen
        name={'Home'}
        component={HomePage}
        options={{
          header: () => <HomeHeader />,
        }}
      />
      <Tab.Screen name={'Diagnose'} component={DummyScreen} />
      <Tab.Screen name={'Scanner'} component={DummyScreen} />
      <Tab.Screen name={'My Garden'} component={DummyScreen} />
      <Tab.Screen name={'Profile'} component={DummyScreen} />
    </Tab.Navigator>
  );
}
