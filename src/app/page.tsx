import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from './components/Header';

const HomePage = () => {
  const projects = [
    {
      title: 'Panucci Delivery',
      description: 'Um projeto desenvolvido em Flutter que simula um sistema de delivery moderno e funcional. Utilizando o poderoso gerenciamento de estado GetX.',
      image: '/panucci.png',
      link: 'https://github.com/obrenoluiz/Flutter-Panucci-Delivery-using-GetX-Alura',
      tags: ['Flutter'],
    },
    {
      title: 'Projeto 2',
      description: 'Descrição breve do projeto 2.',
      image: '/default.jpg',
      link: '#',
      tags: ['React', 'Node.js'],
    },
    {
      title: 'Projeto 3',
      description: 'Descrição breve do projeto 3.',
      image: '/default.jpg',
      link: '#',
      tags: ['Next.js', 'Tailwind CSS'],
    },
  ];

  return (
    <>
      <Head>
        <link rel="icon" href="/icon.png" />
      </Head>

      <Header />
      <section className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-48 h-48 mb-6 md:mb-0 md:mr-8">
            <img
              src="https://avatars.githubusercontent.com/u/169003766?v=4"
              alt="Profile"
              className="rounded-full border-4 border-gray-300 shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">
              Web Developer ・ Mobile Developer
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Explore meu portfólio e veja como transformo ideias em aplicações
              digitais incríveis e centradas no usuário. <br />
              Do desenvolvimento front-end ao back-end, utilizo tecnologias de
              ponta para criar soluções completas e eficientes. <br />
              Vamos construir algo extraordinário juntos!
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

      <div className="shadow-md bg-white text-black text-center py-6 px-6">
        <p className="text-xl font-semibold tracking-wide hover:text-gray-600 transition-colors">
          PROJETOS
        </p>
      </div>

      <section className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Saiba mais →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;