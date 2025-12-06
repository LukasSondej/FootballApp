export type Player = {
    id: string,
    name: string,
    lastName: string,
    teamId: string | null
}
export type NewPlayer = {
  
    name: string,
    lastName: string,
    teamId: string | null
}
export type Team = {
    id: string,
    name: string,
    yearEstablished: number,
    location: string,
    playersId: string[]
}
export type NewTeam = {
  
    name: string,
    yearEstablished: number,
    location: string,
    playersId: string[]
}
export type Match = {
    id: string,
    date: string,
    place: string,
    duration: number,
    team1Id: string,
    team2Id: string,
    team1Score: string,
    team2Score: string

}
