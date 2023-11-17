/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';

import AboutForm from '@/components/AboutForm';
import AppBar from '@/components/AppBar';
import BoxDetail from '@/components/BoxDetail';
import TextButton from '@/components/buttons/TextButton';
import Containers from '@/components/Containers';
import DetailAbout from '@/components/DetailAbout';
import Form from '@/components/Form';
import HeaderAbout from '@/components/HeaderAbout';

import { getProfile, updateProfile } from '@/services/profile';

function HomePage() {
  const [isEdit, setIsEdit] = React.useState(false);
  const [profile, setProfile] = React.useState<any>();
  const router = useRouter();

  const fetchAPI = async () => {
    const tokenSession = window.localStorage.getItem('token_session');
    if (!tokenSession) {
      router.push('/login');
      return;
    }
    const profiles = await getProfile();
    if (profiles.status === 500) {
      router.push('/login');
      window.localStorage.clear();
      return;
    }
    setProfile(profiles?.data?.data);
  };
  React.useEffect(() => {
    fetchAPI();
    return () => {
      // cleanup
    };
  }, []);
  const onSubmit = async () => {
    try {
      await updateProfile({
        ...profile,
        image: null,
        height: Number(profile.height),
        weight: Number(profile.weight),
      }).then((res) => {
        if (res.status == 200) {
          alert('Success Update profile');
          setIsEdit(false);
          fetchAPI();
        } else {
          alert('failed update profile');
        }
      });
    } catch (err) {
      alert(err);
    }
  };
  const handleChangeProfile = (e: any) => {
    setProfile((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <Containers>
      <AppBar title={`@${profile?.username}`} />
      <div className='p-4'>
        <HeaderAbout value={profile} />
        <Form onSubmit={onSubmit}>
          <BoxDetail
            title='About'
            className='mb-4 mt-4'
            onEdit={() => {
              setIsEdit(true);
            }}
            customRightElement={
              isEdit ? (
                <TextButton type='submit' className='text-[#D5BE88]'>
                  Save & Update
                </TextButton>
              ) : null
            }
          >
            {!isEdit ? (
              <DetailAbout value={profile} />
            ) : (
              <AboutForm value={profile} onChange={handleChangeProfile} />
            )}
          </BoxDetail>
        </Form>
        <BoxDetail
          title='Interest'
          className='mb-4 mt-4'
          onEdit={() => {
            router.push('/edit-interest');
          }}
        >
          <div className='flex flex-wrap gap-4'>
            {profile?.interests?.length > 0 ? (
              profile?.interests?.map((i: string) => (
                <div
                  key={i}
                  className='rounded-[100px] bg-[rgba(255,_255,_255,_0.06)] px-4 py-2'
                >
                  <p className='text-center text-[14px] font-semibold not-italic leading-[normal] text-[#FFF]'>
                    {i}
                  </p>
                </div>
              ))
            ) : (
              <p className='text-[14px] font-medium not-italic leading-[normal] text-[rgba(255,_255,_255,_0.52)]'>
                Add in your interest to find a better match
              </p>
            )}
          </div>
        </BoxDetail>
      </div>
    </Containers>
  );
}
export default HomePage;
