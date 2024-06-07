import { useState, useRef } from "react";

const usePasswordChange = (user) => {
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleKeyDown = (e, nextInputRef) => {
    if (e.key === "Enter" && nextInputRef) {
      nextInputRef.current.focus();
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    console.log("New Password:", newPassword);
    // 비밀번호 변경 관련해서 백엔드로 UPDATE 요청 보내야 함
  };

  const handleDeleteUser = (e) => {
    e.preventDefault();
    console.log("Success");
    // 사용자 탈퇴 관련해서 백엔드로 DELETE 요청 보내야 함
  };

  const maskPassword = (password) => {
    const visibleLength = 2;
    const maskedLength = password.length - visibleLength;
    return "*".repeat(maskedLength) + password.slice(-visibleLength);
  };

  return {
    newPassword,
    confirmPassword,
    newPasswordRef,
    confirmPasswordRef,
    setNewPassword,
    setConfirmPassword,
    handleKeyDown,
    handlePasswordChange,
    handleDeleteUser,
    maskPassword,
  };
};

export default usePasswordChange;
