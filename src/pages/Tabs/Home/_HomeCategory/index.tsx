import {ICategory} from '../../../../services/serviceTypes';
import {ImageBackground, Text, View} from 'react-native';
import {homeCategoryStyles} from './styles';

export default function HomeCategory(props: ICategory) {
  return (
    <ImageBackground
      source={{uri: props.image.url}}
      style={homeCategoryStyles.container}
      imageStyle={homeCategoryStyles.imageStyle}>
      <Text style={homeCategoryStyles.title}>{props.title}</Text>
    </ImageBackground>
  );
}
