import {Text, TouchableOpacity, View} from 'react-native';
import {radioStyles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';

export interface RadioProps {
  selected?: boolean;
  radioKey: string;
  title: string;
  subtitle?: string;
  // onClick callback function. Returns clicked item key
  onPress?: (selectedKey: string) => void;
  hint?: string;
}

export default function Radio(props: RadioProps) {
  const [hintWidth, setHintWidth] = useState<number>(0);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        radioStyles.container,
        props.selected && radioStyles.containerSelected,
      ]}
      onPress={() => {
        if (props.onPress) {
          props.onPress(props.radioKey);
        }
      }}>
      <ActiveRadioWrapper isActive={props.selected}>
        <View style={radioStyles.row}>
          <View
            style={[
              radioStyles.circle,
              props.selected && radioStyles.circleSelected,
            ]}>
            <View
              style={[
                radioStyles.circleDot,
                props.selected && radioStyles.circleDotSelected,
              ]}
            />
          </View>
          <View>
            <Text
              style={[
                radioStyles.title,
                props.subtitle && props.hint
                  ? {paddingRight: hintWidth + 8}
                  : undefined,
              ]}>
              {props.title}
            </Text>
            {props.subtitle && (
              <Text style={radioStyles.subtitle}>{props.subtitle}</Text>
            )}
          </View>
        </View>
        {props.hint && (
          <View
            style={radioStyles.hint}
            onLayout={e => {
              setHintWidth(e.nativeEvent.layout.width);
            }}>
            <Text style={{color: 'white'}} numberOfLines={1}>
              {props.hint}
            </Text>
          </View>
        )}
      </ActiveRadioWrapper>
    </TouchableOpacity>
  );
}

interface ActiveRadioWrapperProps {
  isActive?: boolean;
  children: any;
}

function ActiveRadioWrapper(props: ActiveRadioWrapperProps) {
  if (!props.isActive) {
    return <View style={radioStyles.wrapper}>{props.children}</View>;
  } else {
    return (
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
        colors={['rgba(40, 175, 110, 0.17)', 'rgba(40, 175, 110, 0.00)']}
        style={radioStyles.wrapper}>
        {props.children}
      </LinearGradient>
    );
  }
}
