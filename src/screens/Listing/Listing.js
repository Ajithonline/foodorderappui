import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Platform,
  TextInput,
  FlatList,
} from 'react-native';
import {styles} from './styles';

export const Listing = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.heading}>What do you</Text>
          <Text style={styles.heading}>have a taste for?</Text>
        </View>
        <View>
          <View style={styles.basketWrapper}>
            <Image
              style={styles.icon1}
              source={require('../../../assets/images/basket.png')}
            />
            <Text style={styles.smallTitle}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.subTitleWrapper}>
        <Text style={styles.subTitle}>1240 Restaraunts available</Text>
      </View>
      <View style={styles.searchBoxWrapper}>
        <TextInput placeholder={'Search for a restaraunt'} />
        <Image source={require('../../../assets/images/search.png')} />
      </View>
      <View>
        <ScrollView
          contentContainerStyle={styles.categoryWrapper}
          horizontal={true}>
          <View style={styles.categoryItem}>
            <View style={styles.categoryCard}>
              <Image source={require('../../../assets/images/dinner.png')} />
            </View>
            <Text style={styles.label2}>Dinner</Text>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.categoryCardActive}>
              <Image source={require('../../../assets/images/lunch.png')} />
            </View>
            <Text style={styles.label2}>Lunch</Text>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.categoryCard}>
              <Image source={require('../../../assets/images/breakfast.png')} />
            </View>
            <Text style={styles.label2}>Breakfast</Text>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.categoryCard}>
              <Image source={require('../../../assets/images/dessert.png')} />
            </View>
            <Text style={styles.label2}>Dessert</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.subHeadingWrapper}>
        <Text style={styles.subHeading}>Lunch restaurants near you</Text>
      </View>

      <ScrollView contentContainerStyle={styles.foodListingWrapper}>
        <View style={styles.foodItemWrapper}>
          <Image
            style={styles.foodImage}
            source={require('../../../assets/images/bangels.png')}
          />
          <Text style={styles.foodItemTitle}>Noah’s Bagels</Text>
          <Text style={styles.foodItemSpecs}>Lunch . American .$$</Text>
          <View style={styles.percentageWrapper}>
            <Image source={require('../../../assets/images/happy.png')} />
            <Text style={styles.percentageText}>97%</Text>
          </View>
          <View style={styles.distance}>
            <Text style={styles.distanceText}>10 miles</Text>
          </View>
        </View>

        <View style={styles.foodItemWrapper}>
          <Image
            style={styles.foodImage}
            source={require('../../../assets/images/saigon.png')}
          />
          <Text style={styles.foodItemTitle}>Pho Saigon</Text>
          <Text style={styles.foodItemSpecs}>Lunch . American .$$</Text>
          <View style={styles.percentageWrapper}>
            <Image source={require('../../../assets/images/happy.png')} />
            <Text style={styles.percentageText}>97%</Text>
          </View>
          <View style={styles.distance}>
            <Text style={styles.distanceText}>16 miles</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footerWrapper}>
        <View style={styles.footerMenuItemWrapper}>
          <Image source={require('../../../assets/images/home.png')} />
          <Text style={styles.label}>Home</Text>
        </View>
        <View>
          <Image source={require('../../../assets/images/profile.png')} />
        </View>
        <View>
          <Image source={require('../../../assets/images/bookmark.png')} />
        </View>
        <View>
          <Image source={require('../../../assets/images/bell.png')} />
        </View>
      </View>
    </SafeAreaView>
  );
};
