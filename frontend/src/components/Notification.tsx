import { useNotificationStore } from '../store/useNotificationStore'
import { useShallow } from 'zustand/react/shallow'
export const Notification = () => {
  const { notificationMessage, clearNotification } = useNotificationStore(
    useShallow((state) => ({
      notificationMessage: state.notificationMessage,
      clearNotification: state.clearNotification,
    })),
  )

  if (!notificationMessage) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full flex flex-col gap-6 text-center border-t-4 border-gray-800">
        <p className="text-xl font-semibold text-gray-800">{notificationMessage}</p>

        <div className="flex justify-center">
          <button
            onClick={clearNotification}
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-8 rounded transition-colors"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}
