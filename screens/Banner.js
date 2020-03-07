import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions } from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 150;

const images = [
    "https://pmcvariety.files.wordpress.com/2019/12/cheezit_teaser1_still.png?w=1000&h=563&crop=1",
    "https://www.socialmediaexaminer.com/wp-content/uploads/2019/06/instagram-ads-sales-andrew-hubbard-1200.png",
    "https://coverfiles.alphacoders.com/382/38216.jpg",
];

export default class App extends React.Component {
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight,  borderRadius:20, }} source={{ uri: image }} />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
});