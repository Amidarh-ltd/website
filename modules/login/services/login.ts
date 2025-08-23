/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '@/core/services/api';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { loginSchema, LoginFormData } from '../schema/loginSchema';

export function useLogin() {
  const router = useRouter();
  const [serverError, setServerError] = useState('');

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const login = async (data: LoginFormData) => {
    setServerError('');

    try {
      const res = await api.post('/auth/login', data);

      if (res.status === 203) {
        if ((res.data.doc.role).toLowerCase() === 'user') {
          router.push(`/2fa?token=${res.data.doc.token}`);
        } else {
          router.push(`/admin-controller/2fa?token=${res.data.doc.token}`);
        }
        return;
      }

      const { user, token, refreshToken } = res.data.doc;
      router.push('/dashboard');
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
