import { observable } from "mobx";
import { WorkoutHistory } from "../modules/WorkoutHistory";
import { RootStore } from "./RootStore";

type WorkoutDay = 'a' | 'b';

interface WorkoutHistory {
    [key: string]: Array<{
        exercise: string,
        value: number
    }>
}

interface CurrentExercise {
    weight: number;
    reps: number;
    numSets: number;
    exercise: string;
    sets: string[];
}

/*
What it might look like inside

{
    '12-28-2021: [
        {
            exercise: 'squat',
            value: 90
        },
        {
            exercise; 'benchpress',
            value: 100
        }
    ]
}
*/


export class WorkoutStore{
    rootStore: RootStore;
    constructor(rootStore: RootStore){
        this.rootStore = rootStore;
    }
    
    @observable currentSquat: number;
    @observable currentBenchPress: number;
    @observable currentOverheadPress: number;
    @observable currentDeadlift: number;
    @observable currentBarbellRow: number;

    @observable lastWorkoutType: WorkoutDay;

    @observable currentExercises: CurrentExercise[] = []

    @observable history: WorkoutHistory;
}