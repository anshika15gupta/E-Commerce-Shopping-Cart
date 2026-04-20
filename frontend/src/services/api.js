import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_URL,
})

// Interceptor to add token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (userData) => api.put('/auth/profile', userData),
}

// Product API
export const productAPI = {
  getAll: (filters) => api.get('/products', { params: filters }),
  getById: (id) => api.get(`/products/${id}`),
  create: (productData) => api.post('/products', productData),
  update: (id, productData) => api.put(`/products/${id}`, productData),
  delete: (id) => api.delete(`/products/${id}`),
}

// Cart API
export const cartAPI = {
  getCart: () => api.get('/cart'),
  addToCart: (cartData) => api.post('/cart/add', cartData),
  updateItem: (itemId, quantity) =>
    api.put(`/cart/item/${itemId}`, { quantity }),
  removeItem: (itemId) => api.delete(`/cart/item/${itemId}`),
  clearCart: () => api.delete('/cart/clear'),
}

// Order API
export const orderAPI = {
  create: (orderData) => api.post('/orders', orderData),
  getMyOrders: () => api.get('/orders/my-orders'),
  getById: (id) => api.get(`/orders/${id}`),
  updateStatus: (id, statusData) =>
    api.put(`/orders/${id}/status`, statusData),
  cancel: (id) => api.put(`/orders/${id}/cancel`),
}

export default api
