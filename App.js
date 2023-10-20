import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Element3, Receipt21, Clock, Message } from 'iconsax-react-native';
import { fontType, colors } from './src/assets/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SH_Store.</Text>
        <Element3 color={colors.black()} variant="Linear" size={24} />
      </View>
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ ...category.item, marginLeft: 24 }}>
            <Text style={{ ...category.title, color: colors.blue() }}>
              Popular
            </Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Latest</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Technology</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Fashion</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Health</Text>
          </View>
          <View style={{ ...category.item, marginRight: 24 }}>
            <Text style={category.title}>Lifestyle</Text>
          </View>
        </ScrollView>
      </View>
      <ListBlog />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
})

const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 15 }}>
          <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://data:image/jpeg;base64,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',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Exploring the World of Electric Cars
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://data:image/jpeg;base64,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',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Exploring the World of Electric Cars
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://data:image/jpeg;base64,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',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Exploring the World of Electric Cars
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://data:image/jpeg;base64,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',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Baking 101: Mastering the Art of Baking
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemHorizontal.cardItem, marginRight: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQDG7ImVvD9KI1qEjhqCgMD3Zs1wVSDgFYnw&usqp=CAU',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Rediscovering Vinyl: The Resurgence of Analog
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC32tC-cfb04MA7AFXvFrqAIugY86NoYTrDQ&usqp=CAU',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{ gap: 5, width: '70%' }}>
                  <Text style={itemVertical.cardCategory}>Technology</Text>
                  <Text style={itemVertical.cardTitle}>
                    How to use Redux in ReactJS
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn9Wa4rvFjbDl2zNNHkMgid0_xYQMNvKA7Eg&usqp=CAU',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{ gap: 5, width: '70%' }}>
                  <Text style={itemVertical.cardCategory}>Technology</Text>
                  <Text style={itemVertical.cardTitle}>
                    Boosting Traffic with SEO
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://https://preloved.co.id/_ipx/f_webp,q_80,fit_cover,s_480x480/https://preloved.sgp1.cdn.digitaloceanspaces.com/products/1023/9019E425-21A7-4750-9ACB-48370513D2EF.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{ gap: 5, width: '70%' }}>
                  <Text style={itemVertical.cardCategory}>Food</Text>
                  <Text style={itemVertical.cardTitle}>
                    Culinary Adventures: Exploring Exotic Flavors
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://https://preloved.co.id/_ipx/f_webp,q_80,fit_cover,s_480x480/https://preloved.sgp1.cdn.digitaloceanspaces.com/products/817/306117795_612530463835810_4856083896733774158_n.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{ gap: 5, width: '70%' }}>
                  <Text style={itemVertical.cardCategory}>Fashion</Text>
                  <Text style={itemVertical.cardTitle}>Sneaker Culture</Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://https://preloved.co.id/_ipx/f_webp,q_80,fit_cover,s_480x480/https://preloved.sgp1.cdn.digitaloceanspaces.com/products/1694/319cd9a5-29e3-4f4f-8a3c-48acdee1b7f3.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{ gap: 5, width: '70%' }}>
                  <Text style={itemVertical.cardCategory}>Lifestyle</Text>
                  <Text style={itemVertical.cardTitle}>
                    Balancing Work and Well-being
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://https://preloved.co.id/_ipx/f_webp,q_80,fit_cover,s_480x480/https://preloved.sgp1.cdn.digitaloceanspaces.com/products/2755/e00b8b52-5cc0-4ec2-9195-8f66810cd537.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{ gap: 5, width: '70%' }}>
                  <Text style={itemVertical.cardCategory}>Health</Text>
                  <Text style={itemVertical.cardTitle}>
                    Home Fitness Revolution
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://https://preloved.co.id/_ipx/f_webp,q_80,fit_cover,s_480x480/https://preloved.sgp1.cdn.digitaloceanspaces.com/products/2176/70d2bc8f-f320-4d4f-86d4-c3a4ade8af4e.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{ gap: 5, width: '70%' }}>
                  <Text style={itemVertical.cardCategory}>Fashion</Text>
                  <Text style={itemVertical.cardTitle}>
                    Intersection of Fashion
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
