import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Hello, welcome to my first react rails app</h1>
      <button type="button" onClick={() => { navigate('/greeting'); }}>View a greeting</button>
    </>
  );
};

export default Home;
