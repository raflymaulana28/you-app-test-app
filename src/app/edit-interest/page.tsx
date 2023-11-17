/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import AppBar from '@/components/AppBar';
import TextButton from '@/components/buttons/TextButton';
import Containers from '@/components/Containers';
import SelectInputTags from '@/components/SelectInputTags';

import { getProfile, updateProfile } from '@/services/profile';

export default function EditInterestPage() {
  const [selectedTags, setSelectedTags] = useState<Array<string>>([]);
  const [tagInput, setTagInput] = useState<string>('');
  const [profile, setProfile] = useState<any>();
  const router = useRouter();

  const fetchAPI = async () => {
    const tokenSession = window.localStorage.getItem('token_session');
    if (!tokenSession) {
      router.push('/login');
      return;
    }
    const profiles = await getProfile();
    if (profiles.status !== 200) {
      router.push('/login');
      window.localStorage.clear();
      return;
    }
    setProfile(profiles?.data?.data);
    if (profiles?.data?.data?.interests) {
      setSelectedTags(profiles?.data?.data?.interests);
    }
  };
  useEffect(() => {
    fetchAPI();
    return () => {
      // cleanup
    };
  }, []);
  const handleTagInputChange = (e: any) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = () => {
    if (tagInput.trim() !== '' && !selectedTags.includes(tagInput)) {
      setSelectedTags([...selectedTags, tagInput]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };
  const onSubmit = async () => {
    try {
      await updateProfile({
        ...profile,
        interests: selectedTags,
      }).then((res) => {
        if (res.status == 200) {
          alert('Success Update profile');
        } else {
          alert('failed update profile');
        }
      });
    } catch (err) {
      alert(err);
    }
  };
  return (
    <Containers>
      <AppBar
        right={
          <TextButton onClick={onSubmit} className='text-[#D5BE88]'>
            Save
          </TextButton>
        }
      />
      <div className='p-4 pt-8'>
        <p className='text-[14px] font-bold not-italic leading-[normal] text-[#D5BE88]'>
          Tell everyone about yourself
        </p>
        <p className='my-4 text-[20px] font-bold not-italic leading-[normal] text-[#FFF]'>
          What interest you?
        </p>
        <SelectInputTags
          selectedTags={selectedTags}
          handleAddTag={handleAddTag}
          removeTags={handleRemoveTag}
          onChangeText={handleTagInputChange}
          tagInput={tagInput}
        />
      </div>
    </Containers>
  );
}
