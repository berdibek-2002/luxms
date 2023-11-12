'use client'

import axios from 'axios';
import Link from 'next/link';
import {useState} from 'react';

interface ITeacher {
  id: number;
  userId?: number;
  name: string;
  setEmail: string;
  password: string;
  science: string;
  group: string;
}

export const AddTeacher = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [science, setScience] = useState('');
  const [group, setGroup] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [teachers, setTeachers] = useState([]);

  const onAddTeachers = (obj:[]) => {
    const newList:any = [
      ...teachers,
      obj
    ]
    setTeachers(newList)
  }
  
  const onClose = () => {
    setName('');
    setEmail('');
    setPassword('');
    setScience('');
    setGroup('');
  };
  
  const addList:any = () => {
    if (!name) {
      alert('Введите название списка');
      return;
    }
    setIsLoading(true);
    axios
      .post('https://64f82e4b824680fd217f39b9.mockapi.io/teachers', {
        name,
        email,
        password,
        science,
        group
      })
      .then(({ data }) => {
        const listObj = { ...data };
        onAddTeachers(listObj);
        onClose();
      })
      .catch(() => {
        alert('Ошибка при добавлении списка!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div className='w-96 h-full bg-white mx-auto rounded-xl py-4 px-3'>
      <div>
        <h2 className="text-xl font-semibold mb-2">Add Teacher</h2>
      </div>

      <div>
        <div className='mb-2'>
          <label htmlFor="name" className='block text-base font-medium mb-1'>Name</label>
          <input 
            type="text"
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='John Deo'
            className='w-full h-10 border rounded-xl bg-gray-300 pl-5' 
          />
        </div>

        <div className='mb-2'>
          <label htmlFor="email" className='block text-base font-medium mb-1'>Email</label>
          <input
            type="email"
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='john@deo.com'
            className='w-full h-10 border rounded-xl bg-gray-300 pl-5'
          />
        </div>

        <div className='mb-2'>
          <label htmlFor="password" className='block text-base font-medium mb-1'>Password</label>
          <input
            type="password"
            name='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='12345678'
            className='w-full h-10 border rounded-xl bg-gray-300 pl-5'
          />
        </div>

        <div className='mb-2'>
          <label htmlFor="science" className='block text-base font-medium mb-1'>Science</label>
          <input
            type="text"
            name='science'
            value={science}
            onChange={e => setScience(e.target.value)}
            placeholder='English'
            className='w-full h-10 border rounded-xl bg-gray-300 pl-5'
          />
        </div>

        <div className='mb-2'>
          <label htmlFor="group" className='block text-base font-medium mb-1'>Group</label>
          <input
            type="text"
            name='group'
            value={group}
            onChange={e => setGroup(e.target.value)}
            placeholder='23-216'
            className='w-full h-10 border rounded-xl bg-gray-300 pl-5'
          />
        </div>

        <div className='mb-2'>
          <input type="checkbox" name='check' className='bg-gray-300' />
          <label htmlFor="check" className='text-xl ml-1'>Remember my preference</label>
        </div>

        <div className='flex w-full'>
          <button onClick={addList} className='w-1/2 bg-blue-950 text-white p-2 rounded-xl mr-1'>{isLoading ? 'Добавление...' : 'Добавить'}</button>
          <button className='w-1/2 bg-red-950 text-white p-2 rounded-xl'><Link href='/admin-dashboard'>Закрывать</Link></button>
        </div>
      </div>
    </div>
  )
}