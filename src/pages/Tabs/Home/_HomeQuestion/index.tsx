import {ImageBackground, Text, View} from 'react-native';
import {IQuestion} from '../../../../services/serviceTypes';
import {homeQuestionStyles} from './styles';

export default function HomeQuestion(props: IQuestion) {
  return (
    <ImageBackground
      source={{uri: props.image_uri}}
      style={homeQuestionStyles.container}
      imageStyle={homeQuestionStyles.imageStyle}>
      <View style={homeQuestionStyles.titleArea}>
        <Text style={homeQuestionStyles.title}>{props.title}</Text>
      </View>
    </ImageBackground>
  );
}
