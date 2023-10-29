import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Add} from 'iconsax-react-native';
import {BlogList} from '../../../data';
import { ItemBookmark } from '../../components';
import { fontType, colors } from '../../assets/theme';
const Bookmark = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SHStore</Text>
        <Add color={colors.black()} variant="Linear" size={24} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal:24, gap:10, paddingVertical:10}}>
        {BlogList.map((item, index) => (
          <ItemBookmark item={item} key={index} />
        ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default Bookmark;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black(),
  },
  header: {
    paddingHorizontal: 24,
    gap: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    letterSpacing: -0.3,
  },
});