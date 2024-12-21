import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from './components/Header';

const HomePage = () => {
  const projects = [
    {
      title: 'Nubank Clone',
      description: 'Esse projeto é inspirado no design e funcionalidades do aplicativo Nubank. Ele foi criado com o objetivo de replicar a interface moderna e intuitiva do famoso banco digital, proporcionando uma experiência prática para estudos.',
      image: '/nubank.png',
      link: 'https://github.com/obrenoluiz/Nubank-Clone',
      tags: ['Flutter'],
      isDevelopment: true,
    },
    {
      title: 'Panucci Delivery',
      description: 'Um projeto desenvolvido em Flutter que simula um sistema de delivery moderno e funcional. Utilizando o poderoso gerenciamento de estado GetX.',
      image: '/panucci.png',
      link: 'https://github.com/obrenoluiz/Flutter-Panucci-Delivery-using-GetX-Alura',
      tags: ['Flutter'],
      isDevelopment: false,
    },
    {
      title: 'Simple Virtual Store',
      description: 'Um aplicativo básico de comércio eletrônico desenvolvido com Flutter. Onde oferece uma interface simples e limpa para navegar pelos produtos, adicioná-los ao carrinho e finalizar a compra.',
      image: '/virtual_store.png',
      link: 'https://github.com/obrenoluiz/Simple-Virtual-Store-With-Flutter',
      tags: ['Flutter'],
      isDevelopment: false,
    },
    {
      title: 'Info Bitcoin',
      description: 'Um aplicativo em Flutter que permite aos usuários acessar informações em tempo real sobre o Bitcoin e outras criptomoedas. Com preços atualizados, gráficos interativos, notícias do mercado e conversor de moedas, oferece uma experiência intuitiva e amigável em dispositivos Android e iOS.',
      image: '/flutter_crypto.png',
      link: 'https://github.com/obrenoluiz/Info-Bitcoin-with-flutter',
      tags: ['Flutter'],
      isDevelopment: false,
    },
    {
      title: 'Anti VPN',
      description: 'Sistema feito em Typescript utilizando a API da proxycheck.io, para bloquear o uso de VPN no seu sistema.',
      image: '/anti_vpn.png',
      link: 'https://github.com/obrenoluiz/Anti-VPN',
      tags: ['Typescript'],
      isDevelopment: false,
    },
    {
      title: 'Discord Login',
      description: 'Esse projeto é uma solução moderna e eficiente para integração de autenticação em seu site, utilizando o poder do OAuth2 do Discord. Esta aplicação permite que os usuários façam login em seu site de forma rápida e segura, utilizando suas credenciais do Discord.',
      image: '/discord_login.png',
      link: 'https://github.com/obrenoluiz/Discord-Auth-Login',
      tags: ['HTML', 'Javascript'],
      isDevelopment: false,
    },
    {
      title: 'Basic Crud with Flutter',
      description: 'Um projeto Flutter que oferece uma implementação básica de operações CRUD (Create, Read, Update, Delete) utilizando o framework Flutter. Este projeto serve como um exemplo de como criar um aplicativo Flutter que interage e tem um grande potencial de gerenciar dados de forma eficiente.',
      image: '/crud.png',
      link: 'https://github.com/obrenoluiz/BASIC-CRUD-FLUTTER',
      tags: ['Flutter'],
      isDevelopment: false,
    },
    {
      title: 'Website with React + Next.js + Tailwind CSS',
      description: "Um site avançado que integra a API do Discord para autenticação de login e a API do MercadoPago para processar pagamentos, além de oferecer diversas outras funcionalidades!",
      image: '/website.png',
      link: 'http://surl.li/ztdrdp',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Typescript', 'MySQL'],
      isDevelopment: false,
    },
    {
      title: 'Chrome Extension',
      description: 'Uma extensão simples, desenvolvida entre 2018 e 2019, com o objetivo de manipular visualmente o jogo de futebol online Bonk.io.',
      image: '/chrome_extension.png',
      link: 'https://github.com/obrenoluiz/Chrome-extension-for-a-2D-game',
      tags: ['Javascript'],
      isDevelopment: false,
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

      <section
        id="projects"
        className="bg-white py-10 px-6 border-t flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold">PROJETOS</h2>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.isDevelopment && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                    Em Desenvolvimento
                  </span>
                )}
              </div>
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

      <section
        id="skills"
        className="bg-white py-10 px-6 border-t flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold">Minhas Habilidades</h2>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto grid gap-8 md:grid-cols-3">
        </div>
      </section>

      <section id="contact" className="bg-white py-10 px-6 border-t flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Contato</h2>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto grid gap-8 md:grid-cols-3">
        </div>
      </section>
    </>
  );
};

export default HomePage;