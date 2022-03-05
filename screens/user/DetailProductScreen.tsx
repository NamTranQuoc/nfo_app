import {ScrollView, StyleSheet} from 'react-native';

import {Text, View} from '../../components/Themed';
import * as React from 'react';
import {RootTabScreenProps} from "../../types";
import {Button} from "react-native-paper";
import {useDispatch} from "react-redux";
import Layout from "../../constants/Layout";
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {ITEM_WIDTH, SLIDER_WIDTH} from '../../components/CarouselCardItem';
import {color1} from "../../constants/Colors";

const width = Layout.window.width - 10;

const product = {
  "name": "Jordan Flight 9",
  "image": [
    "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F1.png?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F1-1.png?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F1-2.png?alt=media",
  ],
  "price": "790.000",
  "types": [
    "38-99%",
    "38-97%",
    "40-98%",
  ]
}

const data = [
  {
    title: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    imgUrl: "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F1.png?alt=media"
  },
  {
    title: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl: "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F1-1.png?alt=media"
  },
  {
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl: "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F1-2.png?alt=media"
  }
]
export default function DetailProductScreen({navigation}: RootTabScreenProps<'DetailProduct'>) {
  const dispatch = useDispatch();
  const isCarousel = React.useRef(null)

  return (
    <ScrollView style={{backgroundColor: "#fff"}}>
      <View style={{
        borderWidth: 2,
        borderColor: color1,
        borderRadius: 20,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
      }}>
        <Carousel
          layout="tinder"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
      </View>
      <View>
        <Text style={{margin: 10, fontSize: 20}}>{product.name}</Text>
        <View style={{
          borderWidth: 2,
          borderColor: color1,
          borderRadius: 20,
          margin: 10,
          marginTop: 10,
          height: 70,
          padding: 10,
          display: "flex",
          flexDirection: "row"
        }}>
          {product.types.map((item) => {
            return <Button
              mode="outlined"
              onPress={() => console.log('Pressed')}
              style={{
                borderWidth: 2,
                borderColor: "#000",
                width: 100,
                borderRadius: 10,
                marginRight: 10
              }}
              labelStyle={{fontWeight: "bold", fontSize: 15}}>
              {item}
            </Button>
          })}
        </View>
      </View>
      <View style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10
      }}>
        <Text style={{fontSize: 20, marginTop: 0, color: "red", fontWeight: "bold"}}>₫{product.price}</Text>
        <Button
          mode="contained"
          color={color1}
          onPress={() => console.log('Pressed')}
          style={{
            borderWidth: 2,
            borderColor: "#000",
            width: 150,
            borderRadius: 10,
          }}>
          Add to cart
        </Button>
      </View>
      <View style={{
        display: "flex",
        margin: 10,
        marginTop: 20
      }}>
        <Text style={{fontSize: 17, marginTop: 0, fontWeight: "bold"}}>Mô tả</Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          Jordan Flight 9 (Giày cũ)
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          - Condition: Giày chính hãng đã qua sử dụng.
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          - Giá tiền của sản phẩm sẽ phụ thuộc vào độ mới của từng đôi.
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          - Lưu ý: Các bạn trước khi đặt nên nhắn cho shop để xem ảnh chi tiết hoặc video đôi đó nhé, vì mỗi đôi giày
          2hand sẽ có ngoại hình khác nhau.
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          💥 ĐẶC ĐIỂM SẢN PHẨM
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ✔ Giày dễ phối đồ thích hợp cho các hoạt động đi lại hàng ngày, chạy bộ
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ✔ Mũi Giày tròn, đế cao su tổng hợp, xẻ rãnh tạo cảm giác thoải mái khi đi
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ✔ Thích hợp với các mùa trong năm: Xuân - Hè - Thu - Đông
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          💥 HƯỚNG DẪN BẢO QUẢN
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ✔ Để giày ở nơi khô ráo thoáng mát để giữ giày được bền đẹp hơn
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ✔ Vệ sinh giày, dùng khăn hay bàn trải lông mềm để chải sạch giày cùng với nước tẩy rửa giày chuyên dụng với
          da hay da Pu
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ✔ Có thể giặt giày cùng với chất tẩy rửa nhẹ
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ❌ KHUYẾN CÁO
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ⛔ Không dùng hóa chất hay bột giặt có hoạt tính tẩy rửa mạnh
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ⛔ Không dùng bàn chải cứng để vệ sinh giày sẽ làm hư
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ⛔ Không đi mưa ngâm nước lâu, không phơi giày trực tiếp dưới ngoài trời nắng gắt
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
