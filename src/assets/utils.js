import { words } from "./words";

export function getRandomWord(){
    const randomIndex = Math.floor(Math.random() * words.length)
    const randomWord = words[randomIndex]
    return randomWord
}

export function getFarewellText(guessCount) { 
    const options = [
        "The bat broke in two.",
        "Your flashlight died.",
        "There go the snacks.",
        "Map lost.",
        "Click. Click. Out of ammo.",
        "Medic down!",
        "NOT THE DOG! You monster!",
        "Chomp. You are zombie food."
    ];
    return options[guessCount];
}