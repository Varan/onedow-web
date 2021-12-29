import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { CurrentWorkout } from "./modules/CurrentWorkout";
import { WorkoutHistory } from "./modules/WorkoutHistory";
import { RouterStoreContext } from "./stores/RouterStore";

export const Router = observer(() => {
  const routerStore = useContext(RouterStoreContext);

    // Ternary operator for determining what screen is displayed
    return routerStore.screen === 'WorkoutHistory' ? (
        <WorkoutHistory></WorkoutHistory>
        ) : (
        <CurrentWorkout></CurrentWorkout>
        ); 
})