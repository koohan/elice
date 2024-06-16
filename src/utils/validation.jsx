export const validateForm = (formData, user = {}) => {
  const { name, email, phoneNumber, password, confirmPassword } = formData;

  if (!name || !email || !phoneNumber) {
    return "모든 필드를 입력해주세요.";
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    return "유효한 이메일 주소를 입력해주세요.";
  }

  const phonePattern = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/;
  if (!phonePattern.test(phoneNumber)) {
    return "유효한 전화번호를 입력해주세요. (형식: 000-0000-0000)";
  }

  if (password !== confirmPassword) {
    return "비밀번호가 일치하지 않습니다.";
  }

  if (user && name === user.name && email === user.email && phoneNumber === user.phoneNumber) {
    return "회원정보가 변경되지 않았습니다.";
  }

  return "";
};
