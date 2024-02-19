import { styles } from "./Styles";
import { View, Text } from "react-native";

export const PriceFormat = ({ price }) => {
  const formattedPrice = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(price);

  return (
    <View>
      <Text style={styles.price}>{formattedPrice}</Text>
    </View>
  );
};

export const formatDescription = (desc, maxLength = 13) => {
  const strippedDesc = desc.replace(/<\/?[^>]+(>|$)/g, "");
  if (strippedDesc.length <= maxLength) {
    return strippedDesc;
  }
  return `${strippedDesc.substring(0, maxLength)}...`;
};

// カテゴリIDに基づいて各商品にカテゴリ名を追加する関数
export function mapProductsToCategories(products, categories) {
  return products.map((product) => {
    const category = categories.find(
      (category) => category.id === product.category_id,
    );
    const categoryName = category ? category.category_name : "未分類";
    return { ...product, categoryName };
  });
}
