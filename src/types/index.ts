export type Player = {
    id: number,
    name: string,
    lastName: string,
    teamId: number
}
export type NewPlayer = {
  
    name: string,
    lastName: string,
    teamId: number
}
export type Team = {
    id: number,
    name: string,
    yearEstablished: number,
    location: string
}
export type NewTeam = {
  
    name: string,
    yearEstablished: number,
    location: string
}
