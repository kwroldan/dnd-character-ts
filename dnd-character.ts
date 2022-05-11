/* eslint-disable prettier/prettier */
export class DnDCharacter {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    hitpoints: number;

    constructor() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    }

    static getModifierFor(constitution: number) {
        return Math.floor((constitution - 10) / 2)
    }

    static generateAbilityScore() {
        const topThree = this.topThreeDiceRolls();
        const sum = 0;
        return topThree.reduce((previousValue, currentValue) => previousValue + currentValue, sum);
    }
    
    static topThreeDiceRolls() {
        const diceRolls: number[] = [];
        while (diceRolls.length < 4) {
            diceRolls.push(this.rollDice())
        }
        const lowestRoll = Math.min(...diceRolls);
        return diceRolls.filter(roll => roll !== lowestRoll)
    }

    static rollDice() {
        return Math.ceil(Math.random() * 6)
    }
}