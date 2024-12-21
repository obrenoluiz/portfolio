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
          <p className="text-lg text-gray-600 mt-4">
            Com uma paixão por aprender novas tecnologias, desenvolvi habilidades
            em diversas ferramentas e linguagens. Aqui estão algumas das tecnologias
            que mais utilizo para criar experiências digitais incríveis.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto grid gap-8 md:grid-cols-3">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">GitHub</h3>
            <p className="text-gray-600">
              GitHub é a plataforma que utilizo para versionamento de código. Através dela, gerencio todos os meus projetos e colaboro com outros desenvolvedores de forma eficiente.
              <br />
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn.worldvectorlogo.com/logos/git-icon.svg"
                alt="GitHub"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Git</h3>
            <p className="text-gray-600">
              Git é o sistema de controle de versão que utilizo para gerenciar o código dos meus projetos. Com ele, posso rastrear alterações, colaborar com outros desenvolvedores e manter um histórico completo do desenvolvimento.
              <br />
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                alt="React"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">React.js</h3>
            <p className="text-gray-600">
              React.js é minha principal biblioteca para desenvolvimento de interfaces interativas. Utilizo-o para criar aplicações rápidas e escaláveis com componentes reutilizáveis.
              <br />
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn.worldvectorlogo.com/logos/flutter.svg"
                alt="Flutter"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Flutter</h3>
            <p className="text-gray-600">
              Flutter é minha escolha para o desenvolvimento de aplicativos móveis. Com ele, crio apps nativos para Android e iOS com uma única base de código.
              <br />
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg"
                alt="Node.js"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Node.js</h3>
            <p className="text-gray-600">
              Node.js é uma plataforma poderosa para desenvolvimento de servidores e APIs. Utilizo-a para criar backends rápidos e escaláveis.
              <br />
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg"
                alt="Tailwind CSS"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Tailwind CSS</h3>
            <p className="text-gray-600">
              Tailwind CSS é um framework que me permite estilizar rapidamente interfaces com classes utilitárias, garantindo flexibilidade e controle total sobre o design.
              <br />
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn.worldvectorlogo.com/logos/markdown.svg"
                alt="Markdown"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Markdown</h3>
            <p className="text-gray-600">
              Markdown é uma linguagem de marcação simples e eficiente, que utilizo para criar documentos e conteúdos estruturados de maneira rápida e legível.
              <br />
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-4 space-x-4">
              <img
                src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
                alt="Typescript"
                className="w-12 h-12"
              />

              <img
                src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                alt="Javascript"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Typescript & Javascript</h3>
            <p className="text-gray-600">
              Typescript e Javascript são linguagens que utilizo para desenvolvimento web e mobile. Com elas, crio aplicações modernas e eficientes para diversos propósitos.
              <br />
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-4 space-x-4">
              <img
                src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                alt="HTML"
                className="w-12 h-12"
              />

              <img
                src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                alt="CSS"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">HTML & CSS</h3>
            <p className="text-gray-600">
              HTML e CSS são as linguagens fundamentais para o desenvolvimento web. Com elas, crio interfaces responsivas e acessíveis para todos os dispositivos.
              <br />
            </p>
          </div>

          <br />
          <hr className='my-8 border-gray-300' />
          <br />

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn.worldvectorlogo.com/logos/figma-icon.svg"
                alt="Figma"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Figma</h3>
            <p className="text-gray-600">
              Figma é a ferramenta que utilizo para design de interfaces. Com ela, crio wireframes, protótipos e designs completos para aplicações web e mobile.
              <br />
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg"
                alt="MySQL"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">MySQL</h3>
            <p className="text-gray-600">
              MySQL é o sistema de gerenciamento de banco de dados relacional que utilizo para armazenar e gerenciar dados de forma eficiente e segura.
              <br />
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg"
                alt="MongoDB"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">MongoDB</h3>
            <p className="text-gray-600">
              MongoDB é o banco de dados NoSQL que utilizo para armazenar dados não estruturados. Com ele, crio aplicações escaláveis e flexíveis.
              <br />
            </p>
          </div>
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