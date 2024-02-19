import { StyleSheet } from "react-native";

export const card_style = StyleSheet.create({
  card: {
    alignItems: "center",
    margin: 10,
    width: 200,
  },
});

export const styles = StyleSheet.create({
  title: {
    padding: 10,
    fontSize: 20,
  },
  image: {
    borderRadius: 10,
    width: 200,
    height: 200,
  },
  price: {
    borderRadius: 20,
    paddingBottom: 10,
    fontSize: 15,
    // backgroundColor:'red',
  },
  category: {
    paddingBottom: 10,
  },
  discript: {
    paddingBottom: 10,
  },
});

export const detail_style = StyleSheet.create({
  image: {
    height: 400,
  },
  all: {
    alignItems: "center",
  },
});

export const category_style = StyleSheet.create({
  title: {
    margin: 10,
    fontSize: 35,
    fontWeight: "bold",
  },
});

export const dstyles = StyleSheet.create({
  descriptionText: {
    fontSize: 16,
  },
  moreText: {
    fontSize: 16,
    color: "blue",
    marginTop: 5,
  },
});
