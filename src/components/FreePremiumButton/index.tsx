import {Text, TouchableOpacity, View} from 'react-native';
import {freePremiumButtonStyles} from './styles';
import FreePremiumIcon from '../../icon/freePremium.svg';
import ArrowIcon from '../../icon/rightArrow.svg';

export default function FreePremiumButton() {
  return (
    <TouchableOpacity
      style={freePremiumButtonStyles.container}
      activeOpacity={0.8}>
      <FreePremiumIcon />
      <View style={freePremiumButtonStyles.column}>
        <Text style={freePremiumButtonStyles.premiumTitle}>
          <Text style={freePremiumButtonStyles.premiumBoldTitle}>FREE</Text>{' '}
          Premium Available
        </Text>
        <Text style={freePremiumButtonStyles.premiumSubtitle}>
          Tap to upgrade your account!
        </Text>
      </View>
      <ArrowIcon />
    </TouchableOpacity>
  );
}
