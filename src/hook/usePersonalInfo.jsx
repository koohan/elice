import { useState } from "react";
import { validateForm } from "../utils/validation";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const usePersonalInfo = (initialUser, apiUrl) => {
  const [formData, setFormData] = useState({
    name: initialUser.name,
    email: initialUser.email,
    phoneNumber: initialUser.phoneNumber,
  });
  const [notification, setNotification] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMessage = validateForm(formData, initialUser);
    if (errorMessage) {
      setNotification(errorMessage);
      await delay(1500);
      setNotification("");
    } else {
      try {
        const response = await fetch(apiUrl, { 
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to update user information");
        }

        setNotification("회원정보가 성공적으로 변경되었습니다.");
        await delay(1500);
        setNotification("");
      } catch (error) {
        setNotification("회원정보 변경에 실패했습니다.");
        await delay(1500);
        setNotification("");
      }
    }
  };

  return {
    formData,
    notification,
    handleChange,
    handleSubmit,
  };
};

export default usePersonalInfo;
