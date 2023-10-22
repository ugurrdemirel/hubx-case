import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {homeHeaderStyles} from './headerStyles';
import TextInput from '../../../components/TextInput';
import SearchIcon from '../../../icon/search.svg';
import {homeStyles} from './homeStyles';
import FreePremiumButton from '../../../components/FreePremiumButton';
import {
  useGetCategoriesQuery,
  useGetQuestionsQuery,
} from '../../../services/apiService';
import {useEffect} from 'react';
import HomeQuestion from './_HomeQuestion';
import HomeCategory from './_HomeCategory';

export default function HomePage() {
  const questions = useGetQuestionsQuery();
  const categories = useGetCategoriesQuery();

  function renderQuestions() {
    return questions.data?.map(items => (
      <HomeQuestion {...items} key={items.id} />
    ));
  }

  function renderCategories() {
    return categories.data?.data.map(items => (
      <HomeCategory {...items} key={items.id} />
    ));
  }

  return (
    <ScrollView
      style={homeStyles.container}
      contentContainerStyle={homeStyles.contentContainer}>
      <FreePremiumButton />
      <Text style={homeStyles.sectionTitle}>Get Started</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={homeStyles.questionsContainer}
        contentContainerStyle={homeStyles.questionsContentContainer}>
        {renderQuestions()}
      </ScrollView>
      <View style={homeStyles.categoriesContainer}>{renderCategories()}</View>
    </ScrollView>
  );
}

export function HomeHeader() {
  const safeInsets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={require('../../../images/header/home-header.png')}
      style={[homeHeaderStyles.imageBg, {paddingTop: safeInsets.top}]}
      resizeMode={'stretch'}>
      <View style={homeHeaderStyles.container}>
        <Text style={homeHeaderStyles.title}>Hi, plant lover!</Text>
        <Text style={homeHeaderStyles.subtitle}>Good Afternoon! ⛅</Text>
        <TextInput
          containerStyle={{marginTop: 14, width: '100%'}}
          leftIcon={<SearchIcon />}
        />
      </View>
    </ImageBackground>
  );
}
