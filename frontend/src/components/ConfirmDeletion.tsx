// ZMIANA: Usunięto styled-components
type PropsNoti = {
    handleDelete?: () => void;
    onClose: () => void;
    message: string;
}

export const ConfirmDeletion = ({onClose, message, handleDelete}: PropsNoti) => {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-4">

            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full flex flex-col gap-6 text-center">
                
                <p className="text-xl font-semibold text-gray-800">
                    {message}
                </p>

                <div className="flex justify-center gap-4">
                    <button 
                        onClick={onClose}
                        className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-6 rounded transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleDelete}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-colors"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}