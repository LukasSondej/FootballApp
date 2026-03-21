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
   type="button"
    onClick={onClose}
    className="bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-6 rounded transition-colors"
>
    Cancel
</button>
    <button 
    type="button"
    onClick={handleDelete}
    className="border border-transparent bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-colors cursor-pointer"
>
    Confirm
</button>
                </div>
            </div>
        </div>
    )
}