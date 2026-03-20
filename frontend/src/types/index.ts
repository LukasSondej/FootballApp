export type Player = {
    id: string,
    name: string,
    lastName: string,
    teamId: string | null,
    team?: {
        id: string,
        name: string,
        yearEstablished: number,
        location: string
    }

}

export type NewPlayer= Omit<Player, 'id'>;

export type Team = {
    id: string,
    name: string,
    yearEstablished: number,
    location: string,
}

export type NewTeam = Omit<Team, 'id'>;

export type EditTeamPayload = NewTeam & { playerIds: string[] };

export type Match = {
    id: string,
    date: string,
    place: string,
    duration: number,
    team1Id: string,
    team2Id: string,
    team1Score: number,
    team2Score: number,

    team1: Team,
    team2: Team

}

export type NewMatch = {
  
    date: string,
    place: string,
    duration: number,
    team1Id: string,
    team2Id: string,
    team1Score: number,
    team2Score: number,
}
