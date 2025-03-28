import React, { useEffect } from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet } from 'react-native';
import { useJobContext } from '../context/JobContext';

const JobFinderScreen = () => {
    const { jobs, fetchJobs, saveJob, savedJobs, removeJob } = useJobContext();

    useEffect(() => {
        fetchJobs();
        console.log()
    }, []);

    return (
        <View style={styles.container}>
            <Text>Deez</Text>
            <FlatList
                data={jobs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.companyName}</Text>
                        <Image source={{ uri: item.companyLogo }} />
                        <Button title="Save Job" onPress={() => saveJob(item)} />
                    </View>
                )}
            />
        </View>
    );
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#8ABEBE',

    },
})
export default JobFinderScreen;
