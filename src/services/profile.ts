import axiosInstance from '@/lib/axios';

interface CreateProfileDto {
  name?: string;
  birthday?: string;
  height?: number;
  weight?: number;
  interests?: [string];
  image?: string;
}

export const createProfile = async (payload: CreateProfileDto) => {
  return await axiosInstance.post('/createProfile', payload);
};

export const updateProfile = async (payload: CreateProfileDto) => {
  return await axiosInstance.put('/updateProfile', payload);
};
export const getProfile = async () => {
  return await axiosInstance.get('/getProfile');
};
