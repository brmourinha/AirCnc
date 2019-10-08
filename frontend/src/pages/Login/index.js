import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/sessions', { email });

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }

  return (
    <>
      <p>
        {' '}
        <strong>Spots</strong> para programadores e <strong>talentos</strong>{' '}
        para a sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          placeholder='Inserir Email'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button className='btn' type='submit'>
          Entrar
        </button>
      </form>
    </>
  );
}
