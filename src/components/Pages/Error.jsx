import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css'; // Importando o arquivo CSS

export default function PageNotFound() {
    return (
        <div className="page-not-found-container">
            <div className="error-container">
                <h1 className="error-code">404</h1>
                <p className="error-message">A página que você está procurando não foi encontrada.</p>
                <Link to="/" className="go-home-btn">Voltar para a página inicial</Link>
            </div>
        </div>
    );
}
