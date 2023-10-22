import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  variant: 'primary' | 'white';
}

function Button(props: ButtonProps) {
  const {variant, ...rest} = props;
  const baseStyle = StyleSheet.compose(
    buttonStyles.default,
    (buttonStyles as {[key: string]: Object})[variant], // automatically map variant to style
  );
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...rest}
      style={StyleSheet.compose(baseStyle, rest.style)}>
      {props.children}
    </TouchableOpacity>
  );
}

interface ButtonTextProps {
  children: string;
}

function ButtonText(props: ButtonTextProps) {
  return <Text style={buttonTextStyles.text}>{props.children}</Text>;
}

const buttonStyles = StyleSheet.create({
  default: {
    padding: 16,
    borderRadius: 12,
  },
  primary: {
    backgroundColor: 'rgba(40, 175, 110, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const buttonTextStyles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 24,
  },
});

Button.Text = ButtonText;
export default Button;
