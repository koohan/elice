import { useCookies } from 'react-cookie';

export const useCookieManager = () => {
  const [cookies, , removeCookie] = useCookies();

  const clearAllCookies = () => {
    Object.keys(cookies).forEach(cookie => removeCookie(cookie));
  };

  return { clearAllCookies };
};
