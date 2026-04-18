import { useSuspenseQuery } from '@tanstack/react-query'
import { useAddTeamMutation } from '../../mutations/useAddTeamMutation'
import useModalStore from '../../store/useModalStore'
import { useNotificationStore } from '../../store/useNotificationStore'
import type { EditTeamPayload } from '../../types'
import { FormTeam } from './FormTeam'
import { playersQueryOptions } from '../../hooks/useGetPlayers'

export const AddTeam = () => {
  const { mutate, isPending } = useAddTeamMutation()
  const setIsAddingTeam = useModalStore((state) => state.setIsAddingTeam)
  const showNotification = useNotificationStore((state) => state.showNotification)
  const { data: allPlayers } = useSuspenseQuery(playersQueryOptions)
  const onSubmit = (data: EditTeamPayload) => {
    return mutate(
      {
        name: data.name,
        yearEstablished: data.yearEstablished,
        location: data.location,
        playerIds: data.playerIds,
      },
      {
        onSuccess: () => {
          setIsAddingTeam(false)

          showNotification('Team successfully added!')
        },
      },
    )
  }
  return (
    <FormTeam
      isLoading={isPending}
      allPlayers={allPlayers}
      onSubmit={onSubmit}
      onCancel={() => setIsAddingTeam(false)}
    />
  )
}
