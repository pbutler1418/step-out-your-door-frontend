const axios = require('axios');

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://step-out-your-door.herokuapp.com/' : 'http://localhost:3000'
});

// ====================================
// ============= Auth =================
// ====================================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

// ====================================
// ============= Experiences ================
// ====================================

export const showExperiences = async () => {
  const experiences = []
  const resp = await axios.get(`http://localhost:3000/experiences/`)
  experiences.push(resp)
  return experiences
}

export const showUserExperiences = async () => {
  const experiences = []
  const resp = await axios.get(`http://localhost:3000/users/:id/experiences`)
  experiences.push(resp)
  return experiences
}

// export const showFoodExperience = async (id) => {
//   const resp = await api(`/foods/${id}`)
//   return resp.data;
// }

export const postExperience = async (item) => {
  const resp = await api.post(`/users/:id/experiences`, { experience: item })
  return resp.data
}

// export const putExperience = async (item, id) => {
//   const resp = await api.put(`/foods/${id}`, { food: item })
//   return resp.data
// }
// export const destroyExperience = async (id) => {
//   const resp = await api.delete(`/foods/${id}`);
//   return resp.data;
// }
