import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const queryToken = searchParams.get("token");
  const queryEmail = searchParams.get("email");

  const onHandleClick = async () => {
    try {
      const apiResponse = await fetch(
        `http://localhost:3001/user/verify-email?token=${queryToken}&email=${queryEmail}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await apiResponse.json();

      if (!data.success) {
        toast.error(data.message);
        return;
      }

      toast.success(data.message);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h3 className="text-4xl font-semibold mb-3">Verify Your Email</h3>
      <button
        onClick={onHandleClick}
        className="bg-blue-500 text-white cursor-pointer px-6 py-2 hover:opacity-80 transition-all duration-300 ease-in-out rounded-md"
      >
        Click Me
      </button>
    </div>
  );
};

export default VerifyEmail;
