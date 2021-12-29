import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props{
    exercise: string;
    repsAndWeight: string;
    sets: string[]
}

export const WorkoutCard: React.FC<Props> = ({exercise, repsAndWeight, sets}) => {

    return(
        <View style={styles.card}>
        <View style={styles.topRow}>
        <Text style={styles.topRowText}>{exercise}</Text>
        <Text style={styles.topRowText}>{repsAndWeight}</Text>
        </View>

        <View style={styles.bottomRow}>
        {sets.map((set, index) => {
            if (set === 'x') {
                return(
                    <View style={[styles.circle, styles.fadedBackground]} key={set + index}>
                        <Text style={[styles.grayText, styles.circleText]}>X</Text>
                    </View>
                )
            }
            
            if (set === '') {
                return(
                    <View style={[styles.circle, styles.fadedBackground]} key={set + index}>
                       
                    </View>
                )
            }

            return(
                <View style={styles.circle} key={set + index}>
                    <Text style={[styles.whiteText, styles.circleText]}>{set}</Text>
                </View>
            )
        })}
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: 'column',
        padding: 10
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topRowText: {
        fontSize: 16
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 14
    },
    circle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#8FB299',
    },
    whiteText: {
        color: '#fff'
    },
    circleText:{
        fontSize: 16,
        margin: 'auto'
    },
    grayText: {
        color: '#655252'
    },
    fadedBackground: {
        backgroundColor: '#B2A1A1'
    }
});





