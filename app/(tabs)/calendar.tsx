import { StyleSheet, Image, Platform, Text, View } from 'react-native';

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <Text>Agenda</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
