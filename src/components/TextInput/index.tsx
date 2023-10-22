import {
  TextInputProps as BaseTextInputProps,
  TextInput as BaseTextInput,
  View,
  ViewStyle,
} from 'react-native';
import {ReactElement} from 'react';
import {textInputStyles} from './styles';

export interface TextInputProps extends BaseTextInputProps {
  leftIcon?: ReactElement;
  containerStyle?: ViewStyle;
}

export default function TextInput(props: TextInputProps) {
  const {leftIcon, containerStyle, ...rest} = props;
  return (
    <View
      style={{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        ...(containerStyle as {[key: string]: Object}),
      }}>
      {props.leftIcon && (
        <View style={textInputStyles.iconContainer}>{leftIcon}</View>
      )}
      <BaseTextInput
        {...rest}
        style={[
          textInputStyles.textInput,
          leftIcon && {paddingLeft: 42},
          rest.style as {[key: string]: Object},
        ]}
      />
    </View>
  );
}
