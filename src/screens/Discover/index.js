import {StyleSheet, Text, View, ScrollView, FlatList, Animated, TouchableWithoutFeedback} from 'react-native';
import React, {useRef} from 'react';
import { useNavigation } from "@react-navigation/native";
import {BlogList} from '../../../data';
import {ItemSmall} from '../../components'; 
import {SearchNormal1} from 'iconsax-react-native';
import { fontType, colors } from '../../assets/theme';

const data = [
  {id: 1, label: 'Popular'},
  {id: 2, label: 'New'},
  {id: 3, label: 'Up To %'},
  {id: 4, label: 'Casual'},
  {id: 5, label: 'Sport'},
];

const ItemRecent = ({item}) => {
  return (
    <View style={recent.button}>
      <Text style={recent.label}>{item.label}</Text>
    </View>
  );
};
const FlatListRecent = () => {
  const renderItem = ({item}) => {
    return <ItemRecent item={item} />;
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24, paddingVertical: 10}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};


const Discover = () => {

  const navigation = useNavigation()

  const recentBlog = BlogList.slice(5);
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 142],
    outputRange: [0, -142],
    extrapolate: 'clamp',
  });
  return ( 
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("SearchPage")}>
      <View style={styles.header}>
        <View style={styles.bar}>
          <SearchNormal1 size={18} color={colors.grey(0.5)} variant="Linear" />
          <Text style={styles.placeholder}>Search</Text>
        </View>
      </View>
      </TouchableWithoutFeedback>
      <Animated.View style={[recent.container, {transform: [{translateY: recentY}]}]}>
        <Text style={recent.text}>Recent Search</Text>
        <FlatListRecent />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event( [{nativeEvent: {contentOffset: {y: scrollY}}}],{useNativeDriver: true},
        )}
        contentContainerStyle={{paddingTop: 142}}>
         <View style={styles.listCard}>
        {recentBlog.map((item, index) => (
            <ItemSmall item={item} key={index} />
        ))}
        </View>
        </Animated.ScrollView>
      </Animated.View>
      </View>
  );
};
export default Discover;
const styles = StyleSheet.create({
  listCard: {
    gap: 14,
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'center'
    
  },
  container: {
    flex: 1,
    backgroundColor: colors.grey(),
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    top: 0,
    zIndex: 1000,
    right: 0,
    left: 0,
    backgroundColor: colors.white(),
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.black(0.05),
    borderRadius: 10,
    flex: 1,
  },
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.5),
    lineHeight: 18,
  },
});
const recent = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    borderColor: colors.black(0.15),
    borderWidth: 1,
    backgroundColor: colors.grey(0.03),
  },
  label: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(0.65),
  },
  text: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    paddingVertical: 5,
    paddingHorizontal: 24,
  },
  container:{
    position: 'absolute',
    backgroundColor: colors.white(),
    zIndex: 999,
    top: 52,
    left: 0,
    right: 0,
    elevation: 1000,
  },
});