import { createContext } from "react";

type WorkoutDay = 'a' | 'b';

interface WorkoutHistory {
    [key: string]: Array<{
        exercise: string,
        value: number
    }>
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


class WorkoutStore{
    currentSquat: number;
    currentBenchPress: number;
    currentOverheadPress: number;
    currentDeadlift: number;
    currentBarbellRow: number;

    lastWorkoutType: WorkoutDay;

    history: WorkoutHistory;
}

export const WorkoutStoreContext = createContext(new WorkoutStore());