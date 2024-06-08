import { useState, useRef } from "react";

const usePasswordChange = () => {
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleKeyDown = (e, nextInputRef) => {
    if (e.key === "Enter" && nextInputRef) {
      nextInputRef.current.focus();
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    console.log("New Password:", passwords.newPassword);
    // 비밀번호 변경 관련해서 백엔드로 UPDATE 요청 보내야 함
  };

  const handleDeleteUser = (e) => {
    e.preventDefault();
    console.log("Success");
    // 사용자 탈퇴 관련해서 백엔드로 DELETE 요청 보내야 함
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const maskPassword = (password) => {
    const visibleLength = 2;
    const maskedLength = password.length - visibleLength;
    return "*".repeat(maskedLength) + password.slice(-visibleLength);
  };

  return {
    passwords,
    newPasswordRef,
    confirmPasswordRef,
    handleChange,
    handleKeyDown,
    handlePasswordChange,
    handleDeleteUser,
    maskPassword,
  };
};

export default usePasswordChange;
