const LoadingSpinner = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="space-y-10">
        <div className="flex justify-center">
          <div
            className="w-10 h-10 border-4 border-blue-500
                        border-t-transparent rounded-full
                        animate-spin"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
