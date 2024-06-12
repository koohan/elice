import { useState, useRef } from "react";

const useUserManagement = () => {
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleKeyDown = (e, nextInputRef) => {
    if (e.key === "Enter" && nextInputRef) {
      nextInputRef.current.focus();
    }
  };

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

  const handleUpdateUser = async (userId, updateData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
        credentials: "include",
      });

      console.log("Response:", response);

      if (!response.ok) {
        throw new Error("사용자 정보를 수정하는데 오류가 발생했습니다.");
      }

      const result = await response.json();
      alert("사용자 정보가 성공적으로 수정되었습니다.");
      return result;
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      if (passwords.newPassword !== passwords.confirmPassword) {
        throw new Error("비밀번호가 일치하지 않습니다.");
      }

      const response = await fetch(`/api/user/change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: passwords.newPassword }),
        credentials: "include",
      });

      console.log("Response:", response);

      if (!response.ok) {
        throw new Error("비밀번호 변경 중 오류가 발생했습니다.");
      }

      alert("비밀번호가 성공적으로 변경되었습니다.");
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    passwords,
    newPasswordRef,
    confirmPasswordRef,
    handlePasswordChange,
    handleKeyDown,
    handleDeleteUser,
    handleUpdateUser,
    handleChange,
    isLoading,
    error,
  };
};

export default useUserManagement;
