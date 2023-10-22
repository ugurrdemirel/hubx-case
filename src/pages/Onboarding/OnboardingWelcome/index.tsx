import {View, Text, Image} from 'react-native';
import OnboardingGradientBG from '../_OnboardingGradientBG';
import {onboardingStyles} from '../sharedStyles';
import Button from '../../../components/Button';
import {StackActions, useNavigation} from '@react-navigation/native';

export default function OnboardingWelcomeScreen() {
  const navigation = useNavigation();
  return (
    <OnboardingGradientBG>
      <View style={{width: 300}}>
        <Text style={onboardingStyles.titleLight}>
          Welcome to <Text style={onboardingStyles.titleRegular}>PlantApp</Text>
        </Text>
        <Text style={onboardingStyles.description}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
      </View>
      <Image
        source={require('../../../images/onboarding/onboarding-start.png')}
        style={onboardingStyles.image}
      />
      <View>
        <Button
          variant={'primary'}
          onPress={() => {
            navigation.dispatch(StackActions.replace('OnboardingSlides'));
          }}>
          <Button.Text>Get Started</Button.Text>
        </Button>
        <Text style={onboardingStyles.legalText}>
          By tapping next, you are agreeing to PlantID{' '}
          <Text style={onboardingStyles.legalTextUnderline}>Terms of Use</Text>{' '}
          &{' '}
          <Text style={onboardingStyles.legalTextUnderline}>
            Privacy Policy
          </Text>
          .
        </Text>
      </View>
    </OnboardingGradientBG>
  );
}
