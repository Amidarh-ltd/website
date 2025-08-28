/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '@/core/services/api';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { loginSchema, LoginFormData } from '../schema/loginSchema';
import { useStore } from '@/lib/utils/zustand/store';
import { toast } from 'sonner';

export function useLogin() {
  const router = useRouter();
  const [serverError, setServerError] = useState('');
  const { setUser, setIsAuthenticated, setToken, setRefreshToken } = useStore();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const login = async (data: LoginFormData) => {
    setServerError('');

    try {
      const res = await api.post('/auth/login', data);

      if (res.status === 203) {
          router.push(`/2fa?token=${res.data.doc.token}`);
      }
      if(res.status == 200) {
        const { user, token, refreshToken } = res.data.doc;
        setUser(user);
        setIsAuthenticated(true);
         const isProduction = process.env.NODE_ENV === 'production';
      const secureFlag = isProduction ? '; secure' : '';
      // Calculate expiry for 7 days from now
      const expires = new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ).toUTCString();
      // Set cookies client-side
      document.cookie = `accessToken=${token}; path=/${secureFlag}; SameSite=Strict`;
      document.cookie = `refreshToken=${refreshToken}; path=/${secureFlag}; SameSite=Strict; expires=${expires}`;
      document.cookie = `role=${user.role.toUpperCase()}; path=/${secureFlag}; SameSite=Strict`;
        setToken(token);
        setRefreshToken(refreshToken);
        toast.success("You're logged in successfully")
        router.push('/welcome');
      }
    } catch (err: any) {
      console.error(err);
      if (err.response?.status === 406) {
        router.push(`/verify-otp?token=${err.response.data.doc.token}`);
      } else {
        const errorMessage =
          err.response?.data?.message || err.message || 'Login failed';
        setServerError(errorMessage);
      }
    }
  };

  return {
    form,
    login,
    serverError,
  };
}
