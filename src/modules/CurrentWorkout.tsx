import React from "react";
import { StyleSheet, View } from "react-native";
import { WorkoutCard } from "../ui/WorkoutCard";

interface Props{

}

export const CurrentWorkout: React.FC<Props> = () => {
    return(
        <View style={styles.container}>
            <WorkoutCard
            sets={["5", "", "5", "x", "5"]}
            exercise="squat" 
            repsAndWeight="5x5 260"></WorkoutCard>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        margin: 10
    }
});
