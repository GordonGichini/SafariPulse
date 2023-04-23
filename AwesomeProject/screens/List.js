import React, { Component } from 'react';
import  { Text, StyleSheet, View, Scrollview, Flatlist, ImageBackground, Dimensions } from 'react-native'


const { width, height } = Dimensions.get('screen');
const mocks = [
    {
        id: 1,
        user: {
            name: '',
            avatar: '',
        },
        location: {
            
        }
    }
]
const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    column: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    header: {
        backgroundColor: 'white',
        paddingHorizontal: 36,
        paddingTop: 48,
        paddingBottom: 24,
    }, 
    articles: {
        paddingHorizontal: 36,
    },
    destinations: {  
        // paddingHorizontal: 36
    },
    destination: {
            width: width - (36 * 2),
            marginHorizontal: 36,
            innerhorizantal: 12,
            border: 12,
            backgroundColor: 'pink',
        }
    })

export default class List extends Component {
    static navigationOptions = {
        header: (
            <View style={[styles.flex, styles.row, styles.header]}> 
            <View>
                <Text>Search for a place</Text>
                <Text>Destination</Text>
            </View> 
            <View>
                <Text>Avatar</Text>
            </View>
            </View>
        )
    } 

    renderDestinations = () => {
        return (
            <View style={[ styles.flex, styles.column]}>
                <Scrollview horizontal>
                <View >
                    <Text>Destination 1</Text>
                </View>
                <View >
                    <Text>Destination 2</Text>
                </View>
                <View >
                    <Text>Destination 3</Text>
                </View>
                </Scrollview>
            </View>
        );
    }
    renderRecommend = () => {
        return (
            <View style={[ styles.flex, styles.column]}>
                <View>Recommend</View>
            </View>
        )
    }

render() {
    return (
        <View style={[ styles.flex, styles.articles ]}> 
        {this.renderDestinations()}
        {this.renderRecommend()}
        </View>
    ) 
} 
}
 


// class Articles extends Component
/*    static navigationOptions = {
        header: (
            <View style= {[styles.flex, styles.row, styles.header,]}>
            <View>
            <Text>Search for a place</Text>
            <Text style={{ fontSize: 24 }}>Destination</Text>
            </View>
            <View>
            <Image style={styles.avatar} source={{ uri: ''}} />
            </View>
            </View>
        )
    }

    renderDots() {
        const { destinations } = this.props;
        return (
            <View style={[styles.flex, styles.row, { justifyContent: 'center', alignContent: '', marginTop: ( 36 * 2) }]}
        )
    } */