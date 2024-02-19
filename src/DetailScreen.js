import { product_list, category_list } from "./list";
import { ScrollView, View, Text, Image } from "react-native";
import { styles, detail_style } from "./Styles";
import Swiper from "react-native-swiper";
import { PriceFormat } from "./App_utils";

export const ProductDetailScreen = ({ route }) => {
  const { productId } = route.params;
  const detail_product = product_list.product_list.find(
    (product) => product.id === productId,
  );
  const category = category_list.category_list.find(
    (list) => list.id === detail_product.category_id,
  );
  const name = category ? category.category_name : "未分類";
  return (
    <ScrollView>
      <View style={detail_style.all}>
        <Swiper showsButtons={false} loop={true} height={400}>
          {detail_product.images.map((image) => (
            <Image
              style={detail_style.image}
              key={image.id}
              source={{ uri: image.url }}
            />
          ))}
        </Swiper>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>{detail_product.name}</Text>
          <PriceFormat price={detail_product.price} />
          <Text style={styles.category}>categoy : {name}</Text>
          <Text style={styles.description}>
            {detail_product.description.replace(/<\/?[^>]+(>|$)/g, "")}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
