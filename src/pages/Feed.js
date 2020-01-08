import React, { Component } from 'react'

import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Rafael',
            email: 'rafael@gmail.com',
            image: require('../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'John',
                comment: 'Stunning'
            }, {
                nickname: 'Ana',
                comment: 'Foto dahora!'
            }]
        }, {
            id: Math.random(),
            nickname: 'Francisco Djow',
            email: 'francisco@gmail.com',
            image: require('../assets/imgs/bw.jpg'),
            comments: []
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Post key={item.id} {...item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    }
})

export default Feed