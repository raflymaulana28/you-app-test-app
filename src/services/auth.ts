import axiosInstance from '@/lib/axios';

interface RegisterDto {
  username: string;
  email: string;
  password: string;
}

export const registerService = async (payload: RegisterDto) => {
  const res = await axiosInstance.post('/register', payload);
  return res;
};

export const loginService = async (payload: RegisterDto) => {
  return await axiosInstance.post('/login', payload);
};
