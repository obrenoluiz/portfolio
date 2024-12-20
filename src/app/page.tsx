import React from 'react';
import Link from 'next/link';
import Header from './components/Header';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-red-600">Bem-vindo ao meu site - teste!</h1>
      </div>
    </>
  );
};

export default HomePage;
