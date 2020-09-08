import React, { useState, createContext} from 'react';

export const QuizContext = createContext();

function QuizContextProvider(props) {
    const initialisationCol = [{initialIndex: 0, arr: [1,2], cardProp: [{state: true, speak: "Yes!", value: 1}, {state: false, speak: "Nooo", value: 2}]},
                            {initialIndex: 0, arr: [2,1], cardProp: [{state: true, speak: "Yes!", value: 2}, {state: false, speak: "Nooo", value: 1}]},
                            {initialIndex: 1, arr: [1,2], cardProp: [{state: false, speak: "Nooo", value: 1}, {state: true, speak: "Yes!", value: 2}]},
                            {initialIndex: 1, arr: [2,1], cardProp: [{state: false, speak: "Nooo", value: 2}, {state: true, speak: "Yes!", value: 1}]}];
    const initialisationProps = Math.floor(Math.random()*4);
    const initIndex = initialisationCol[initialisationProps].initialIndex;

    const [cardProps, setCardProps] = useState(() => {
        return ([
            {numRange: initialisationCol[initialisationProps].arr},
            {arrToDisplay: initialisationCol[initialisationProps].arr},
            {cardPropsArr: initialisationCol[initialisationProps].cardProp},
            {correctVal: initialisationCol[initialisationProps].arr[initIndex]}
        ])
    });
    
    let correctValue = "";
    
    function addNum(){
        if (cardProps[0].numRange.length < 20) {
            const oldRange = cardProps[0].numRange;
            const range = [...oldRange];
            
            const buildRange = [...buildNumRangeAdd(range)];
            const arrayToDisplay = buildArrToDisplay(buildRange);
            console.log(`from context - arrToDisplay: ${arrayToDisplay}`)
            const allCardsProps = buildAllCardsProps(arrayToDisplay);
            
            setCardProps([{numRange: buildRange}, {arrToDisplay: arrayToDisplay}, {cardPropsArr: allCardsProps}, {correctVal: correctValue}]);
        }
    }

    function moveToNext(){
        const oldRange = cardProps[0].numRange;
        const range = [...oldRange];
        
        const buildRange = [...nextCard(range)];
        const arrayToDisplay = buildArrToDisplay(buildRange);
        console.log(`from context - arrToDisplay: ${arrayToDisplay}`)
        const allCardsProps = buildAllCardsProps(arrayToDisplay);
        
        setCardProps([{numRange: buildRange}, {arrToDisplay: arrayToDisplay}, {cardPropsArr: allCardsProps}, {correctVal: correctValue}]);
}

    const buildNumRangeAdd = (arr) => {
            let rebuildRange = [];

            for (let i = 0; i < arr.length; i++) {
                rebuildRange[i] = i+1;
            }
        
            rebuildRange.push(rebuildRange.length+1);
            return rebuildRange;
    }
    
    const nextCard = (arr) => {
        let rebuildRange = [];

            for (let i = 0; i < arr.length; i++) {
                rebuildRange[i] = i+1;
            }
        
            return rebuildRange;
    }

    function removeNum() {
        if (cardProps[0].numRange.length > 2) {
            const oldRange = cardProps[0].numRange;
            const range = [...oldRange];
            
            const buildRangeRem = buildNumRangeRemove(range);  
            const arrayToDisplay = buildArrToDisplay(buildRangeRem);
            const allCardsProps = buildAllCardsProps(arrayToDisplay);

            setCardProps([{numRange: buildRangeRem}, {arrToDisplay: arrayToDisplay}, {cardPropsArr: allCardsProps}, {correctVal: correctValue}]);
        }
    }

    const buildNumRangeRemove = (arr) => {
        let rebuildRange = [];

        for (let i = 0; i < arr.length; i++) {
            rebuildRange[i] = i+1;
        }
    
        rebuildRange.pop();
        return rebuildRange;
    }

    function shuffleArr(arr) {
        for (let index = 0; index < arr.length; index++) {
            let temp = arr[index];
            let swapIndex = Math.floor(Math.random()*arr.length);
            arr[index] = arr[swapIndex];
            arr[swapIndex] = temp;
        }
        return arr;
    }

    const buildArrToDisplay = (arr) => {
        let shuffled = shuffleArr(arr);

        const nR = [...shuffled];
        const newArr = [];

        if (nR.length === 2) {
            for (let i = 0; i < 2; i++) {
                newArr.push(nR[i]);
            }
        } else {
            for (let i = 0; i < 3; i++) {
                newArr.push(nR[i]);
            }
        }
        return newArr;
    }

    const buildAllCardsProps = (toDisplay) => {
        let propsArr = [];
        let cardStates = [false, false, false];

        const ansIndxCalculated = Math.floor(Math.random()*toDisplay.length);
        cardStates[ansIndxCalculated] = true;
        const cardValues = toDisplay;
        correctValue = cardValues[ansIndxCalculated];

        for (let i = 0; i < toDisplay.length; i++) {
            propsArr[i] = {
                state: cardStates[i],
                speak: cardStates[i] ? "Yes!" : "Nooo",
                value: cardValues[i]};
        }
        return propsArr;
    }
  
    return(
        <QuizContext.Provider value={{cardProps, addNum, removeNum, moveToNext}}>
            {props.children}
        </QuizContext.Provider>
    );
}

export default QuizContextProvider;