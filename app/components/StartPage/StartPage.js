import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import ProfilePage from '../ProfilePage/ProfilePage';

export default function StartPage(props) {
    
    const [profileVisible, setProfileVisible] = useState(false);

    const setProfileVisibleHandler = () => {
        setProfileVisible(!profileVisible);
    }

    return ( 
        props.StartPage  ?
            <View style={styles.container}>
                <Text>Start Page</Text>
                <Button title="Start" onPress={props.StartTrip}/>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={profileVisible}
                >
                    <ProfilePage />
                    <Button title="GoBack" onPress={setProfileVisibleHandler}/>
                </Modal>
                <Button title="Profile" onPress={setProfileVisibleHandler}/>
            {/* add search compo */}
            </View>
            :
            null
    );
}

const styles = StyleSheet.create({
    container: {

    },
});
