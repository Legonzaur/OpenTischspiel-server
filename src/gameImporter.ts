import fs from 'fs';
console.log(fs.readdirSync("../Games"));

export interface Game {
    maxPlayerCount: number;
    minPlayerCount: number;
}