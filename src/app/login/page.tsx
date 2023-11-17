/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/components/buttons/Button';
import Containers from '@/components/Containers';
import Form from '@/components/Form';
import TextInput from '@/components/TextInput';

import { loginService } from '@/services/auth';

import BackArrow from '~/svg/back-arrow.svg';

export default function LoginPage() {
  const router = useRouter();
  const onSubmit = async (data: FormData) => {
    try {
      const form: any = Object.fromEntries(data.entries());

      await loginService({
        email: form.email,
        password: form.password,
        username: form.username,
      }).then((res) => {
        if (res.status == 201) {
          window.localStorage.setItem('token_session', res?.data?.access_token);
          router.push('/');
        } else {
          alert('There was an error');
        }
      });
    } catch (err) {
      alert(err);
    }
  };
  return (
    <Containers>
      <div className='p-4 pt-9'>
        <button className='flex items-center bg-none outline-none'>
          <BackArrow className='mr-2 w-2' />
          <p className='m-0 text-[14px] font-bold not-italic leading-[normal] text-[#FFF]'>
            Back
          </p>
        </button>
        <div className='mt-[60px]'>
          <h1 className='text-[24px] font-bold not-italic leading-[normal] text-[#FFF]'>
            Login
          </h1>
          <Form onSubmit={onSubmit} className='mt-6'>
            <TextInput
              placeholder='Enter email'
              name='email'
              errorText='Format email is invalid'
              type='text'
              pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
              required
            />
            <TextInput
              placeholder='Enter username'
              name='username'
              type='text'
              required
            />
            <TextInput
              placeholder='Enter password'
              name='password'
              type='password'
              required
            />

            <Button
              type='submit'
              className='mt-8 flex w-full justify-center rounded-[8px]  bg-[linear-gradient(108deg,_#62CDCB_24.88%,_#4599DB_78.49%)] py-3'
            >
              Login
            </Button>
          </Form>
          <div className='mt-8 flex items-center justify-center'>
            <p className='text-center text-[13px] font-medium not-italic leading-[normal] text-[#FFF]'>
              No account?
            </p>
            <Link
              href='/register'
              className='ml-2 text-[13px] font-medium not-italic leading-[normal] text-[#D5BE88] [text-decoration-line:underline]'
            >
              Register Here
            </Link>
          </div>
        </div>
      </div>
    </Containers>
  );
}
