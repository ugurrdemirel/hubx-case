import {Text, View} from 'react-native';
import {premiumFeatureStyles} from './styles';
import {ReactElement} from 'react';

export interface PaywallPremiumFeatureItemProps {
  icon: ReactElement<any>;
  title: string;
  subtitle: string;
}

export default function PaywallPremiumFeatureItem(
  props: PaywallPremiumFeatureItemProps,
) {
  return (
    <View style={premiumFeatureStyles.container}>
      <View style={premiumFeatureStyles.iconBg}>{props.icon}</View>
      <Text style={premiumFeatureStyles.title}>{props.title}</Text>
      <Text style={premiumFeatureStyles.subtitle}>{props.subtitle}</Text>
    </View>
  );
}
