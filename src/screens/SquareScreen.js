import React, { useReducer } from "react";
import { StyleSheet, View, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 20;

const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number};
    // action === {colorToChange: 'red' || 'gree' || 'blue', amount: 15 || -15}

    switch (action.colorToChange) {
        case 'red':
            // never going to do state.red = state.red - 15
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
};
const SquareScreen = () => {
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    // const setColor = (color, change) => {
    //     switch (color) {
    //         case 'red':
    //             red + change > 255 || red + change < 0 ? null : setRed(red + change);
    //             return;
    //         case 'green':
    //             green + change > 255 || green + change < 0 ? null : setGreen(green + change);
    //             return;
    //         case 'blue':
    //             blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
    //             return;
    //         default:
    //             return;
    //     }

    // };

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});

    return (
        <View>
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color="Red" />
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color="Green" />
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color="Blue" />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default SquareScreen;