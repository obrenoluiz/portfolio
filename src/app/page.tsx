import React from 'react';
import Link from 'next/link';
import Header from './components/Header';

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto flex items-center">
          {/* Imagem à esquerda */}
          <div className="w-48 h-48 mr-8">
            <img
              src="https://avatars.githubusercontent.com/u/169003766?v=4"
              alt="Profile"
              className="rounded-full border-4 border-gray-300 shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl"
            />
          </div>

          {/* Textos à direita da imagem */}
          <div className="text-left">
            <h1 className="text-4xl font-bold mb-4">Web Developer ・ Mobile Developer</h1>
            <p className="text-lg text-gray-600 mb-6">
            Explore meu portfólio e veja como transformo ideias em aplicações digitais incríveis e centradas no usuário. <br />Do desenvolvimento front-end ao back-end, utilizo tecnologias de ponta para criar soluções completas e eficientes. <br />Vamos construir algo extraordinário juntos!
            </p>
            <div className="space-x-4">
              <Link
                href="#about"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                About Me
              </Link>
              <Link
                href="#projects"
                className="bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;