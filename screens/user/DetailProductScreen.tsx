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
        <Text style={{fontSize: 20, marginTop: 0, color: "red", fontWeight: "bold"}}>???{product.price}</Text>
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
        <Text style={{fontSize: 17, marginTop: 0, fontWeight: "bold"}}>M?? t???</Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          Jordan Flight 9 (Gi??y c??)
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          - Condition: Gi??y ch??nh h??ng ???? qua s??? d???ng.
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          - Gi?? ti???n c???a s???n ph???m s??? ph??? thu???c v??o ????? m???i c???a t???ng ????i.
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          - L??u ??: C??c b???n tr?????c khi ?????t n??n nh???n cho shop ????? xem ???nh chi ti???t ho???c video ????i ???? nh??, v?? m???i ????i gi??y
          2hand s??? c?? ngo???i h??nh kh??c nhau.
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ???? ?????C ??I???M S???N PH???M
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ??? Gi??y d??? ph???i ????? th??ch h???p cho c??c ho???t ?????ng ??i l???i h??ng ng??y, ch???y b???
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ??? M??i Gi??y tr??n, ????? cao su t???ng h???p, x??? r??nh t???o c???m gi??c tho???i m??i khi ??i
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ??? Th??ch h???p v???i c??c m??a trong n??m: Xu??n - H?? - Thu - ????ng
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ???? H?????NG D???N B???O QU???N
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ??? ????? gi??y ??? n??i kh?? r??o tho??ng m??t ????? gi??? gi??y ???????c b???n ?????p h??n
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ??? V??? sinh gi??y, d??ng kh??n hay b??n tr???i l??ng m???m ????? ch???i s???ch gi??y c??ng v???i n?????c t???y r???a gi??y chuy??n d???ng v???i
          da hay da Pu
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ??? C?? th??? gi???t gi??y c??ng v???i ch???t t???y r???a nh???
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ??? KHUY???N C??O
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ??? Kh??ng d??ng h??a ch???t hay b???t gi???t c?? ho???t t??nh t???y r???a m???nh
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ??? Kh??ng d??ng b??n ch???i c???ng ????? v??? sinh gi??y s??? l??m h??
        </Text>
        <Text style={{fontSize: 17, marginTop: 0}}>
          ??? Kh??ng ??i m??a ng??m n?????c l??u, kh??ng ph??i gi??y tr???c ti???p d?????i ngo??i tr???i n???ng g???t
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
