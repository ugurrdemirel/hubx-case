import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {paywallStyles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import CloseIcon from '../../icon/close.svg';
import PaywallPremiumFeatureItem, {
  PaywallPremiumFeatureItemProps,
} from './_PaywallPremiumFeatureItem';
import ScannerIcon from '../../icon/scanner.svg';
import SpeedometerIcon from '../../icon/speedometer.svg';
import Radio, {RadioProps} from '../../components/Radio';
import {useState} from 'react';
import Button from '../../components/Button';
import {StackActions, useNavigation} from '@react-navigation/native';

const premiumFeatures: Array<PaywallPremiumFeatureItemProps> = [
  {
    icon: <ScannerIcon />,
    title: 'Unlimited',
    subtitle: 'Plant Identify',
  },
  {
    icon: <SpeedometerIcon />,
    title: 'Faster',
    subtitle: 'Process',
  },
  {
    icon: <SpeedometerIcon />,
    title: 'Detailed',
    subtitle: 'Plant Care',
  },
];
const premiumPlans: Array<RadioProps> = [
  {
    radioKey: 'one-month',
    title: '1 Month',
    subtitle: '$2.99/month, auto renewable',
  },
  {
    radioKey: 'one-year',
    title: '1 Year',
    subtitle: 'First 3 days free, then $529,99/year',
    hint: 'Save 50%',
  },
];

export default function Paywall() {
  const [selectedPlan, setSelectedPlan] = useState<string>('one-year');
  const navigation = useNavigation();
  function renderPremiumFeatures() {
    return premiumFeatures.map(items => (
      <PaywallPremiumFeatureItem key={items.title} {...items} />
    ));
  }

  function renderPremiumPlans() {
    return premiumPlans.map(items => (
      <Radio
        key={items.radioKey}
        {...items}
        selected={selectedPlan === items.radioKey}
        onPress={selectedKey => {
          setSelectedPlan(selectedKey);
        }}
      />
    ));
  }

  return (
    <ScrollView
      style={paywallStyles.container}
      bounces={false}
      contentContainerStyle={{
        paddingBottom: 32,
      }}>
      <ImageBackground
        source={require('../../images/paywall/paywall-bg.png')}
        style={paywallStyles.bgImage}>
        <SafeAreaView edges={['top']} style={paywallStyles.headerContainer}>
          <TouchableOpacity
            style={paywallStyles.closeBtn}
            activeOpacity={0.5}
            onPress={() => navigation.dispatch(StackActions.replace('Tabs'))}>
            <CloseIcon width={24} height={24} />
          </TouchableOpacity>
          <View>
            <Text style={paywallStyles.appTitle}>
              PlantApp <Text style={paywallStyles.appTitleLight}>Premium</Text>
            </Text>
            <Text style={paywallStyles.premiumDescription}>
              Access All Features
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={paywallStyles.premiumFeaturesContainer}
              contentContainerStyle={
                paywallStyles.premiumFeaturesContentContainer
              }>
              {renderPremiumFeatures()}
            </ScrollView>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View style={paywallStyles.plansContainer}>
        <View style={paywallStyles.plans}>{renderPremiumPlans()}</View>
        <Button
          variant={'primary'}
          style={paywallStyles.tryButton}
          onPress={() => navigation.dispatch(StackActions.replace('Tabs'))}>
          <Button.Text>Try free for 3 days</Button.Text>
        </Button>
        <Text style={paywallStyles.infoText}>
          After the 3-day free trial period you’ll be charged ₺274.99 per year
          unless you cancel before the trial expires. Yearly Subscription is
          Auto-Renewable
        </Text>
        <Text style={paywallStyles.legal}>Terms • Privacy • Restore</Text>
      </View>
    </ScrollView>
  );
}
