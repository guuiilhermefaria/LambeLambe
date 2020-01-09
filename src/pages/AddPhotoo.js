import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    ScrollView,
    Alert
} from 'react-native'

//import { ImagePicker } from ''
import ImagePicker from 'react-native-image-picker'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/FontAwesome'

class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    }
    pickLocalImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    }

    pickCameraImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    }

    pickImage = () => {
        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800,
        }, res => {
            if (!res.didCancel) {
                this.setState({ image: { uri: res.uri, base64: res.data } })
            }
        })
    }

    save = async () => {
        Alert.alert('Imagem adicionada!', this.state.comment)
    }

    render() {
        return (            
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                enableAutomaticScroll={true}
                keyboardOpeningTime={0} >
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.title}>Compartilhe uma imagem</Text>
                        <View style={styles.imageContainer}>
                            <Image source={this.state.image} style={styles.image} />
                        </View>
                        <TextInput
                            placeholder='Algum comentário para a foto?'
                            style={styles.input}
                            value={this.state.comment}
                            onChangeText={comment => this.setState({ comment })}
                        />
                        <View style={styles.choicesContainer}>
                            <Text style={styles.butttomText}>Escolha uma foto</Text>
                            <View style={styles.buttonsContainer}>
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    onPress={this.pickLocalImage}
                                >
                                    <Icon name='folder' size={30} color="#000" />
                                    <Text > arquivos</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    onPress={this.pickCameraImage}
                                >
                                    <Icon name='camera' size={30} color="#000" />
                                    <Text >camera</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    onPress={this.save}
                                >
                                    <Icon name='share' size={30} color="#000" />
                                    <Text >share</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View >
                </ScrollView >
            </KeyboardAwareScrollView >            

            // <KeyboardAwareScrollView
            //     enableOnAndroid={true}
            //     enableAutomaticScroll={true}
            //     keyboardOpeningTime={0} >
            //     <ScrollView>
            //         <View style={styles.container}>
            //             <Text style={styles.title}>Compartilhe uma imagem</Text>
            //             <View style={styles.imageContainer}>
            //                 <Image source={this.state.image} style={styles.image} />
            //             </View>
            //             <TouchableOpacity onPress={this.pickImage} style={styles.buttom}>
            //                 <Text style={styles.buttomText}>Escolha a foto</Text>
            //             </TouchableOpacity>
            //             <TextInput
            //                 placeholder='Algum comentário para a foto?'
            //                 style={styles.input}
            //                 value={this.state.comment}
            //                 onChangeText={comment => this.setState({ comment })}
            //             />
            //             <TouchableOpacity onPress={this.save} style={styles.buttom}>
            //                 <Text style={styles.buttomText}>Salvar</Text>
            //             </TouchableOpacity>
            //         </View>
            //     </ScrollView>
            // </KeyboardAwareScrollView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: 30,
        fontWeight: 'bold',
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#eee',
        marginTop: 10,
    },
    image: {
        width: '100%',
        width: Dimensions.get('window').width / 2,
        resizeMode: 'contain',
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    choicesContainer: {
        flexDirection: 'column',
        alignContent: 'center',
        width: '90%',
        marginTop: 30,
        padding: 5,
        backgroundColor: '#4286F4',

    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
        padding: 10,
    },
    buttomText: {
        fontSize: 20,
        color: '#fff',
    },
    input: {
        marginTop: 20,
        width: '90%',
    }
})

export default AddPhoto