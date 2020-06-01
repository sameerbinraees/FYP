/*import React from 'react';
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
});*/
/*
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image
} from 'react-native';
import ViewSlider from 'react-native-view-slider'

const { width, height } = Dimensions.get('window');
const BannerWidth = Dimensions.get('window').width;


function Banner() {
    return (
        <>
            <ViewSlider
                renderSlides={
                    <>
                        <View style={styles.viewBox}>
                            <Image source={{ uri: 'https://pmcvariety.files.wordpress.com/2019/12/cheezit_teaser1_still.png?w=1000&h=563&crop=1' }} style={{ height: 150, width: BannerWidth, }} />
                        </View>
                        <View style={styles.viewBox}>
                            <Image source={{ uri: 'https://www.socialmediaexaminer.com/wp-content/uploads/2019/06/instagram-ads-sales-andrew-hubbard-1200.png' }} style={{ height: 150, width: BannerWidth, }} />
                        </View>
                        <View style={styles.viewBox}>
                            <Image source={{ uri: 'https://coverfiles.alphacoders.com/382/38216.jpg' }} style={{ height: 150, width: BannerWidth, }} />
                        </View>

                    </>
                }
                style={styles.slider}     //Main slider container style
                height={200}    //Height of your slider
                slideCount={3}    //How many views you are adding to slide
                dots={true}     // Pagination dots visibility true for visibile 
                dotActiveColor='#1e6262'     //Pagination dot active color
                dotInactiveColor='gray'    // Pagination do inactive color
                dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
                autoSlide={true}    //The views will slide automatically
                slideInterval={5000}    //In Miliseconds
            />
        </>
    );
};

const styles = StyleSheet.create({
    viewBox: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        width: width,
        padding: 10,
        alignItems: 'center',
        height: 150,
        borderRadius: 50
    },
    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 15
    }
});

export default Banner;
*/
import React from 'react';
import {
    StyleSheet, View, Text, Image, Dimensions,
} from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';

const { width } = Dimensions.get('window');

const DATA = [
    {
        coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920321-2357b680-4900-11ea-89d5-2e8cbecec9f6.jpg',
        cornerLabelColor: '#FFD300',
        cornerLabelText: 'GOTY',
    },
    {
        coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920358-336f9600-4900-11ea-8eec-cc919b991e90.jpg',
        cornerLabelColor: '#0080ff',
        cornerLabelText: 'NEW',
    },
    {
        coverImageUri: 'https://user-images.githubusercontent.com/6414178/73927874-25744200-490d-11ea-940f-db3e5dbd8b2b.jpg',
        cornerLabelColor: '#2ECC40',
        cornerLabelText: '-75%',
    },
    {
        coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920399-45e9cf80-4900-11ea-9d5b-743fe5e8b9a4.jpg',
        cornerLabelColor: '#2ECC40',
        cornerLabelText: '-20%',
    },
];

const Banner = () => {
    const renderItem = data => (
        <View
            key={data.coverImageUri}
            style={styles.cardContainer}
        >
            <View
                style={styles.cardWrapper}
            >
                <Image
                    style={[styles.card, {
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10
                    }]}
                    source={{ uri: data.coverImageUri }}
                />
                <View
                    style={[
                        styles.cornerLabel,
                        { backgroundColor: data.cornerLabelColor },
                    ]}
                >
                    <Text style={styles.cornerLabelText}>
                        {data.cornerLabelText}
                    </Text>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Carousel
                pagination={PaginationLight}
                renderItem={renderItem}
                data={DATA}
                loop
                autoplay
                autoplayInterval={5000}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width,

    },
    cardWrapper: {
        //borderRadius: 8,
        overflow: 'hidden',

    },
    card: {
        width: width,
        height: 140,

    },
    cornerLabel: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 8,
    },
    cornerLabelText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '600',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
    },
});

export default Banner;
