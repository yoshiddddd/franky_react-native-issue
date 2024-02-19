import { SafeAreaView, ScrollView, Text } from "react-native";
import { Divider } from "react-native-elements"; // npm install react-native-elements
import { category_style } from "./Styles";
import { product_list, category_list } from "./list";
import { ProductList } from "./View_product";
import { mapProductsToCategories } from "./App_utils";

export const HomeScreen = ({ navigation }) => {
  const mappedProducts = mapProductsToCategories(
    product_list.product_list,
    category_list.category_list,
  );
  const clothes_products = mappedProducts.filter(
    (product) => product.category_id === 1,
  );
  const shoes_products = mappedProducts.filter(
    (product) => product.category_id === 2,
  );
  const accessories_products = mappedProducts.filter(
    (product) => product.category_id === 3,
  );
  const undefined_products = mappedProducts.filter(
    (product) => product.category_id === undefined,
  );
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={category_style.title}>clothes</Text>
        <ProductList products={clothes_products} navigation={navigation} />
        <Divider />
        <Text style={category_style.title}>Shoes</Text>
        <ProductList products={shoes_products} navigation={navigation} />
        <Divider />
        <Text style={category_style.title}>Accessories</Text>
        <ProductList products={accessories_products} navigation={navigation} />
        <Divider />
        <Text style={category_style.title}>others</Text>
        <ProductList products={undefined_products} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};
