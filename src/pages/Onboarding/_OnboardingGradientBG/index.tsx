import React from 'react';
import {ImageBackground, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export interface OnboardingGradientBGProps {
  children: React.ReactElement | Array<React.ReactElement>;
  style?: ViewStyle;
}

export default function OnboardingGradientBG(props: OnboardingGradientBGProps) {
  return (
    <ImageBackground
      source={require('../../../images/onboarding/onboarding-bg.png')}
      resizeMode={'stretch'}
      style={{
        display: 'flex',
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 12,
        ...props.style,
      }}>
      <SafeAreaView
        style={{
          height: '100%',
          justifyContent: 'space-between',
        }}>
        {props.children}
      </SafeAreaView>
    </ImageBackground>
  );
}
