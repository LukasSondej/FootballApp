import { FormPlayer } from './FormPlayer'
import { useEditPlayerMutation } from '../../mutations/useEditPlayerMutation'
import type { OrderDataPlayer } from './playerSchema'
import useModalStore from '../../store/useModalStore'
import { useSuspenseQuery } from '@tanstack/react-query'
import { playersQueryOptions } from '../../hooks/useGetPlayers'
import { useNotificationStore } from '../../store/useNotificationStore'
import { useDeletePlayerMutation } from '@/mutations/useDeletePlayerMutation'

type PropsPlayer = {
  id: string
}
export const EditPlayer = ({ id }: PropsPlayer) => {
  const { mutate: deletePlayer } = useDeletePlayerMutation()
  const showNotification = useNotificationStore((state) => state.showNotification)
  const setIdEditPlayer = useModalStore((state) => state.setIdEditPlayer)
  const { data: allPlayers } = useSuspenseQuery(playersQueryOptions)

  const player = allPlayers.find((p) => p.id === id)

  if (!player) return <p>Player not found</p>

  const { mutate, isPending } = useEditPlayerMutation()
  const onSubmit = (data: OrderDataPlayer) => {
    mutate(
      {
        id: id,
        name: data.name,
        lastName: data.lastName,
        teamId: data.teamId,
      },
      {
        onSuccess: () => {
          setIdEditPlayer(null)

          showNotification('Player details have been updated!')
        },
      },
    )
  }
  const handleDeletePlayer = () => {
    deletePlayer(id, {
      onSuccess: () => {
        setIdEditPlayer(null)
        showNotification('The player has been permanently removed!')
      },
    })
  }

  return (
    <FormPlayer
      isLoading={isPending}
      handleDeletePlayer={handleDeletePlayer}
      onSubmit={onSubmit}
      onCancel={() => setIdEditPlayer(null)}
      defaultValues={{ name: player.name, lastName: player.lastName, teamId: player.teamId }}
    />
  )
}
