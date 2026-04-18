import { matchesQueryOptions } from '../../hooks/useGetMatches'

import { useEditMatchMutation } from '../../mutations/useEditMatchMutation'
import { FormMatch } from './FormMatch'
import { teamsQueryOptions } from '../../hooks/useGetTeams'
import { useSuspenseQuery } from '@tanstack/react-query'
import type { OrderDataMatches } from './matchesSchema'
import useModalStore from '../../store/useModalStore'
import { useNotificationStore } from '../../store/useNotificationStore'
import { useDeleteMatchMutation } from '@/mutations/useDeleteMatchMutation'

type Props = {
  matchId: string
}
export const EditMatch = ({ matchId }: Props) => {
  const showNotification = useNotificationStore((state) => state.showNotification)
  const setIdEditMatch = useModalStore((state) => state.setIdEditMatch)
  const { mutate, isPending } = useEditMatchMutation(matchId)
  const { mutate: deleteMatch } = useDeleteMatchMutation()
  const { data: allMatches } = useSuspenseQuery(matchesQueryOptions)
  const { data: teams = [] } = useSuspenseQuery(teamsQueryOptions)
  const matchEdit = allMatches?.find((e) => e.id == matchId)
  if (!matchEdit) {
    return <p>Nie znaleziono meczu do edycji.</p>
  }

  const onSubmit = (data: OrderDataMatches) => {
    mutate(
      {
        date: data.date,
        place: data.place,
        duration: data.duration,
        team1Id: data.team1Id,
        team2Id: data.team2Id,
        team1Score: data.team1Score,
        team2Score: data.team2Score,
      },
      {
        onSuccess: () => {
          setIdEditMatch(null)
          showNotification('Match details updated successfully!')
        },
      },
    )
  }
  const handleDeleteMatch = () => {
    deleteMatch(matchId, {
      onSuccess: () => {
        setIdEditMatch(null)
        showNotification('Match permanently deleted!')
      },
    })
  }

  return (
    <FormMatch
      isLoading={isPending}
      handleDeleteMatch={handleDeleteMatch}
      onCancel={() => setIdEditMatch(null)}
      onSubmit={onSubmit}
      teams={teams}
      defaultValues={{ ...matchEdit, date: matchEdit.date ? matchEdit.date.split('T')[0] : ' ' }}
    />
  )
}
