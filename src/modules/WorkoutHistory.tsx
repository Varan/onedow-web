import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStoreContext } from "../stores/RootStore";

interface Props{}

export const WorkoutHistory: React.FC<Props> = observer(() => {
    const rootStore = React.useContext(RootStoreContext)

    return(
        <View>
            <Text>Workout History page</Text>
            <Button title="create workout"
            onPress={() => {
                rootStore.workoutStore.currentExercises.push(
                {
                exercise: "Squat",
                numSets: 5,
                reps: 5,
                sets: ["", "", "", "", ""],
                weight: 260
                },
                {
                exercise: "Bench Press",
                numSets: 5,
                reps: 5,
                sets: ["5", "5", "5", "5", "5"],
                weight: 145
                },
                {
                exercise: "Deadlift",
                numSets: 1,
                reps: 5,
                sets: ["x", "x", "x", "x", "x"],
                weight: 360
                }
                );
                rootStore.routerStore.screen = 'CurrentWorkout';}}></Button>
        </View>
    );
});