import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {
    render() {
        const comments = [{
            nickname: 'Joana Elena Silva',
            comment: 'Excelente foto'
        }, {
            nickname: 'Rafael Gustavo Pereira',
            comment: 'Muito ruim, Faço melhor'
        }]

        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Header />
                    <Post image={require('./src/assets/imgs/fence.jpg')} comments={comments} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
