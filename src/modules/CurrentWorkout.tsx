import dayjs from "dayjs";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
import { RouteComponentProps } from "react-router-native";
import { RootStoreContext } from "../stores/RootStore";
import { WorkoutCard } from "../ui/WorkoutCard";
import { WorkoutTimer } from "../ui/WorkoutTimer";

interface Props extends RouteComponentProps{

}

export const CurrentWorkout: React.FC<Props> = observer(({history}) => {
    const rootStore = useContext(RootStoreContext);
    useEffect(() => {
        return () => {
            rootStore.workoutTimerStore.stopTimer();
        }
    }, [])
    
    return(   
        <View style={styles.container}>
            {rootStore.workoutStore.currentExercises.map(e => {
                return (
                    <WorkoutCard
                    onSetPress={setIndex => {
                        rootStore.workoutTimerStore.startTimer();
                        const v = e.sets[setIndex];
                        
                        let newValue: string;

                        if (v === '') {
                            newValue = `${e.reps}`
                        } else if (v === '0'){
                            rootStore.workoutTimerStore.stopTimer();
                            newValue = ''
                        } else {
                            newValue = `${parseInt(v) - 1}`
                        }

                        e.sets[setIndex] = newValue

                    }}
                    key={e.exercise}
                    sets={e.sets}
                    exercise={e.exercise} 
                    repsAndWeight={`${e.numSets}x${e.reps} ${e.weight}`}>
                    </WorkoutCard>
                )
            })}
            <Button title="SAVE" onPress={() => {
                rootStore.workoutStore.history[dayjs().format('YYYY-MM-DD')] = rootStore.workoutStore.currentExercises;
                rootStore.workoutStore.currentExercises = [];
                history.push('/');
            }}></Button>
            {rootStore.workoutTimerStore.isRunning ? (
            <WorkoutTimer 
            percent={rootStore.workoutTimerStore.percent}
            currentTime={rootStore.workoutTimerStore.display} 
            onXPress={() => rootStore.workoutTimerStore.stopTimer()}>
            </WorkoutTimer> 
            ) : null}
        </View>
    );
});

// insert the following into the parenthesis of dayjs() in line 53:
// new Date(+(new Date()) - Math.floor(Math.random()*10000000000))

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 10
    }
});
