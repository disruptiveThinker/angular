// Working with Interfaces
export interface IPlayers {
    getTotalPlayers():number;
}

export class MyCricketTeam implements IPlayers {
    getTotalPlayers():number {
        return 11;
    }
}

export class MyFootballTeam implements IPlayers {
    getTotalPlayers():number {
        return 9;
    }
}