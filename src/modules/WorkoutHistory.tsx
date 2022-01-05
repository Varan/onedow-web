import { observer } from "mobx-react-lite";
import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { RouteComponentProps } from "react-router"; // react router or react router native?
import { RootStoreContext } from "../stores/RootStore";
import { CurrentExercise } from "../stores/WorkoutStore";
import { HistoryCard } from "../ui/HistoryCard";

interface Props extends RouteComponentProps{}

export const WorkoutHistory: React.FC<Props> = observer(({history}) => {
    const rootStore = React.useContext(RootStoreContext)

    const rows: Array<
    Array<{
      date: string;
      exercises: CurrentExercise[];
    }>
  > = [];

    Object.entries(rootStore.workoutStore.history).forEach(([date, exercises], i) => {

        if (i % 3 === 0){
            rows.push([{
                date,
                exercises
            }])
        } else {
            rows[rows.length - 1].push({
                date,
                exercises
            })
        }
    });

/*
HOW IT USED TO WORK:

// object.entries turns an object into an array; each item is an array is a key, value pair of date, currentExercises

[
    [hc, hc]
    [hc, hc]
    ...
]
*/

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

                history.push('/current-workout')
                }}>
                </Button>

            <FlatList 
            renderItem={({item}) => (
                <View style={styles.row}>
                    {item.map(({date, exercises}) => (
                    <View key={date} style={styles.cardContainer}>
                     <HistoryCard onPress={() => {
                         const parts = date.split('-')
                         history.push(`/workout/${parts[0]}/${parts[1]}/${parts[2]}`);
                        }}
                          header={date} currentExercises={exercises}></HistoryCard>
                    </View>
                    ))}
                {item.length < 3 ? <View style={styles.cardContainer}></View>:null}
                {item.length < 2 ? <View style={styles.cardContainer}></View>:null}

                </View>
            )}
            data={rows} 
            keyExtractor={(item) => item.reduce((pv, cv) => pv + " " + cv.date, "")}>

            </FlatList>
            
        </View>
    );
});

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    cardContainer: {
        flex: 1,
        padding: 10
    }
})
