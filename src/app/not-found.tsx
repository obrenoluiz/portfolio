import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <img src="/404.png" alt="Página Não Encontrada" className="w-1/3 h-auto" />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Página Não Encontrada</h1>
            <p className="text-lg text-gray-600">Desculpe, a página que você está procurando não existe.</p>
        </div>
    );
};

export default NotFoundPage;
