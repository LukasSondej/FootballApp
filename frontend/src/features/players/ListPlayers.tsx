import { useSuspenseQuery } from "@tanstack/react-query"
import { playersQueryOptions} from "../../hooks/useGetPlayers"
import { SinglePlayer } from "./SinglePlayer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


export const ListPlayers = () => {
const {data}= useSuspenseQuery(playersQueryOptions)
  return (
    <Card className="p-4 bg-white shadow-sm border-gray-200">
<CardHeader><CardTitle className="text-xl text-gray-800">Players</CardTitle></CardHeader>

<CardContent>
     <Table>

<TableHeader>

<TableRow>

<TableHead>Name</TableHead>
<TableHead>Last Name</TableHead>
<TableHead>Team</TableHead>


</TableRow>

</TableHeader>

<TableBody>

   
        {data.map(player =>
        <TableRow key={player.id}>
<TableCell className="font-medium">{player.name}</TableCell>
<TableCell>{player.lastName}</TableCell>
<TableCell className="text-gray-500">
                {player.team?.name || "No team"}
                </TableCell>
        </TableRow>
           )}


</TableBody>

 



 </Table>
</CardContent>

    </Card>
 
  )
}