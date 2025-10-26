export type Player = {
    id: string,
    name: string,
    lastName: string,
    teamId: number | null
}
export type NewPlayer = {
  
    name: string,
    lastName: string,
    teamId: number | null
}
export type Team = {
    id: string,
    name: string,
    yearEstablished: number,
    location: string
}
export type NewTeam = {
  
    name: string,
    yearEstablished: number,
    location: string
}
