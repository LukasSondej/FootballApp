import type { Match } from "../types"

type PropsMatch ={
    matchData: Match;
}

export const SingleMatch = ({matchData}: PropsMatch) => {
return(
<div>
    <h1>{matchData.place}</h1>
</div>
)
}