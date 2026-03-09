export type Player = {
    id: string,
    name: string,
    lastName: string,
    teamId: string | null
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
    team2Score: number
}

export type NewMatch = Omit<Match, 'id'>;
