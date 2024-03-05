
import Cookies from 'js-cookie';
const isUserExist = () => {
  return Cookies.get('user') ? true : false;
};

// get user name & email
const getCurrentUser = () => {
  return JSON.parse(Cookies.get('user') || '{}');
};

// get user id
const getUserId = () => {
  let user = JSON.parse(Cookies.get('user') || '{}');
  return parseInt(user.id);
};

const getToken = () => {
  return JSON.parse(Cookies.get('session') || '{}');
};

const storeDataToStorage = (response) => {
  Cookies.set('user', JSON.stringify(response.user), { expires: 7 });
  // Cookies.set('is_verified', JSON.stringify(response.is_verified), { expires: 7 });
  Cookies.set('session', JSON.stringify(response.token), { expires: 7 });
};


const logout = async () => {
  Cookies.remove('user');
  Cookies.remove('_rand');
  Cookies.remove('is_verified');
  Cookies.remove('session');

  localStorage.clear();
};

export {
  getCurrentUser,
  getUserId,
  logout,
  getToken,
  storeDataToStorage,
  isUserExist
};
