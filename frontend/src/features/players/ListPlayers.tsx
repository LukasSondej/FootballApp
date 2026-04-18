import { useSuspenseQuery } from '@tanstack/react-query'
import { playersQueryOptions } from '../../hooks/useGetPlayers'
import { Card, CardContent } from '../../components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table'
import useModalStore from '../../store/useModalStore'

export const ListPlayers = () => {
  const { data } = useSuspenseQuery(playersQueryOptions)
  const setIdEditPlayer = useModalStore((state) => state.setIdEditPlayer)

  return (
    <div className="w-full p-4">
      <Card className="bg-white border-gray-300 rounded shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="font-bold text-black">First Name</TableHead>
                <TableHead className="font-bold text-black">Last Name</TableHead>
                <TableHead className="font-bold text-black">Team</TableHead>
                <TableHead className="font-bold text-black text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {data.map((player) => (
                <TableRow
                  key={player.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="font-medium">{player.name}</TableCell>
                  <TableCell>{player.lastName}</TableCell>
                  <TableCell className="text-gray-500">
                    {player.team?.name || '-- No team --'}
                  </TableCell>
                  <TableCell className="text-right flex justify-end gap-2">
                    <button
                      className="bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100 font-medium py-1 px-3 rounded text-sm transition-colors"
                      onClick={() => setIdEditPlayer(player.id)}
                    >
                      Edit
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
