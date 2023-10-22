import {Image, Text, useWindowDimensions, View} from 'react-native';
import OnboardingGradientBG from '../_OnboardingGradientBG';
import React, {useRef, useState} from 'react';
import {onboardingStyles} from '../sharedStyles';
import Button from '../../../components/Button';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {StackActions, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OnboardingSlides() {
  const navigation = useNavigation();
  const dimensions = useWindowDimensions();
  const width = dimensions.width - 48;
  const swiperRef = useRef<SwiperFlatList>(null);
  const [isLast, setIsLast] = useState<boolean>(false);
  return (
    <OnboardingGradientBG>
      <SwiperFlatList
        ref={swiperRef}
        showPagination={true}
        disableGesture={true}
        onChangeIndex={item => {
          setIsLast(item.index === 1);
        }}
        paginationDefaultColor={'rgba(19, 35, 27, 0.25)'}
        paginationActiveColor={'rgba(19, 35, 27, 1)'}
        paginationStyleItemInactive={{height: 6, width: 6}}
        paginationStyleItemActive={{height: 10, width: 10}}>
        <View
          style={{
            width: width,
          }}>
          <View>
            <Text style={onboardingStyles.titleRegular}>
              Take a photo to{' '}
              <Text style={onboardingStyles.titleExtraBold}>identify</Text> the
              plant
            </Text>
          </View>
          <Image
            source={require('../../../images/onboarding/onboarding-1.png')}
            style={[onboardingStyles.slideImage, {height: 530}]}
            resizeMode={'contain'}
          />
        </View>
        <View style={{width: width}}>
          <View>
            <Text style={onboardingStyles.titleRegular}>
              Get plant{' '}
              <Text style={onboardingStyles.titleExtraBold}>care guides</Text>
            </Text>
          </View>
          <Image
            source={require('../../../images/onboarding/iphone.png')}
            style={onboardingStyles.slideImage}
            resizeMode={'contain'}
          />
        </View>
      </SwiperFlatList>
      <Button
        variant={'primary'}
        onPress={async () => {
          if (isLast) {
            await AsyncStorage.setItem('onboarding_finished', 'true');
            navigation.dispatch(StackActions.replace('Paywall'));
          } else {
            const index = swiperRef.current?.getCurrentIndex();
            if (index !== undefined) {
              swiperRef.current?.scrollToIndex({
                index: index + 1,
                animated: true,
              });
            }
          }
        }}
        style={{marginBottom: 32}}>
        <Button.Text>Continue</Button.Text>
      </Button>
    </OnboardingGradientBG>
  );
}
