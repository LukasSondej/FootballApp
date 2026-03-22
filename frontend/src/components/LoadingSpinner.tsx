type LoadingSpinnerProps = {
    message?: string;
};

export const LoadingSpinner = ({ message = "Loading data..." }: LoadingSpinnerProps) => {
    return (
        <div className="flex flex-col items-center justify-center py-20 w-full col-span-full">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-500 font-medium">{message}</p>
        </div>
    );
};