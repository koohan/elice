import { useState } from "react";

const useUserManagement = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteUser = async (e, userId) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/user/${userId}`, {
        method: "DELETE",
        credentials: "include",
      });

      console.log("Response:", response);

      if (!response.ok) {
        throw new Error("사용자를 삭제하는데 오류가 발생했습니다.");
      }

      const result = await response.text();
      alert(result);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleDeleteUser,
    isLoading,
    error,
  };
};

export default useUserManagement;
