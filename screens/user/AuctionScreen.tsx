import {Image, ScrollView, StyleSheet} from 'react-native';

import {Text, View} from '../../components/Themed';
import * as React from 'react';
import {RootTabScreenProps} from "../../types";
import {Button, TextInput} from "react-native-paper";
import {useDispatch} from "react-redux";
import Layout from "../../constants/Layout";
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {ITEM_WIDTH, SLIDER_WIDTH} from '../../components/CarouselCardItem';
import {color1} from "../../constants/Colors";
import ItemProductAuction from "../../components/ItemProductAuction";

const width = Layout.window.width - 10;

const product = {
  "name": "Jordan Flight 9 (size 40)",
  "image": [
    "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F1.png?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F1-1.png?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F1-2.png?alt=media",
  ],
  "price": "790.000",
  "maxPrice": "1.000.000",
  "minStep": "50.000"
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

export default function AuctionScreen({navigation}: RootTabScreenProps<'Auction'>) {
  const dispatch = useDispatch();
  const isCarousel = React.useRef(null);
  const time = new Date().getHours() + 1;

  const products = [
    {
      "name": "Jordan Flight 9",
      "image": "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F1.png?alt=media",
      "price": "790.000",
      "time": time + ":10",
    },
    {
      "name": "Nike Airmax Excee",
      "image": "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F2.png?alt=media",
      "price": "550.000",
      "time": time + ":20",
    },
    {
      "name": "??o Dallas",
      "image": "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F3.png?alt=media",
      "price": "49.000",
      "time": time + ":30",
    },
    {
      "name": "?????m voan Nh???t",
      "image": "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F4.png?alt=media",
      "price": "160.000",
      "time": time + ":40",
    },
    {
      "name": "Th???t l??ng da th???t",
      "image": "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F5.png?alt=media",
      "price": "280.000",
      "time": time + ":50",
    }
  ]

  return (
    <ScrollView style={{backgroundColor: "#fff"}}>
      <Text style={{fontSize: 30, marginTop: 20, fontWeight: "bold", alignSelf: "center", color: "#a41616"}}>?????u gi??
        hi???n t???i</Text>
      <Text style={{fontSize: 20, fontWeight: "bold", alignSelf: "center", color: "#a41616", marginBottom: 10}}>(H???n
        ch???t phi??n {time}:00)</Text>
      <View style={{
        borderWidth: 2,
        borderColor: color1,
        borderRadius: 20,
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
        <Text style={{margin: 10, fontSize: 20, fontWeight: "bold"}}>{product.name}</Text>
      </View>
      <View style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10
      }}>
        <Text style={{fontSize: 20, marginTop: 0}}>Gi?? kh???i ??i???m</Text>
        <Text style={{fontSize: 20, marginTop: 0, fontWeight: "bold"}}>???{product.price}</Text>
      </View>
      <View style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10
      }}>
        <Text style={{fontSize: 20, marginTop: 0}}>B?????c gi??</Text>
        <Text style={{fontSize: 20, marginTop: 0, fontWeight: "bold"}}>???{product.minStep}</Text>
      </View>
      <View style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10
      }}>
        <Text style={{fontSize: 20, marginTop: 0}}>Gi?? hi???n t???i</Text>
        <Text style={{fontSize: 20, marginTop: 0, color: "red", fontWeight: "bold"}}>???{product.maxPrice}</Text>
      </View>
      <View style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10
      }}>
        <Button
          mode="contained"
          color={color1}
          onPress={() => console.log('Pressed')}
          style={{
            borderWidth: 2,
            borderColor: "#000",
            width: 125,
            borderRadius: 10,
          }}>
          ?????u gi??
        </Button>
        <TextInput
          label="Gi?? b???n s??? mua"
          mode={'outlined'}
          theme={{roundness: 30}}
          style={{
            height: 40,
            width: 140,
            justifyContent: "center"
          }}
        />
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
      <View style={{
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBottom: 20
      }}>
        <Text style={{margin: 10,
          fontSize: 30,
          fontWeight: "bold",
          alignSelf: "center",
          color: "#a41616",
          width: "100%",
          textAlign: "center",
          borderRadius: 20,
          backgroundColor: color1,
          padding: 5
        }}>S???n ph???m ti???p theo</Text>
        {products.map((item) => {
          return <ItemProductAuction product={item}/>
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
