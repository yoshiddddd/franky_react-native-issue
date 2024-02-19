import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { styles, card_style } from "./Styles";
import { PriceFormat, formatDescription } from "./App_utils";
import Swiper from "react-native-swiper";

export const ProductList = ({ products, navigation }) => {
  return (
    <ScrollView horizontal={true}>
      {products.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() =>
            navigation.navigate("ProductDetail", { productId: item.id })
          }
        >
          <View key={item.id} style={card_style.card}>
            <Swiper
              showsButtons={false} // 左右のナビゲーションボタンを非表示にする
              autoplay={true}
              loop={true}
              height={200}
            >
              {item.images.map((image) => (
                <Image
                  style={styles.image}
                  key={image.id}
                  source={{ uri: image.url }}
                />
              ))}
            </Swiper>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.title}>{item.name}</Text>
              <PriceFormat price={item.price} />
              <Text style={styles.category}>categoy : {item.categoryName}</Text>
              <Text style={styles.description}>
                {formatDescription(item.description)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
