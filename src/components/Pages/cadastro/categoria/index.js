import React from 'react'
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';

function paginaCadastroCategoria () {
    return (
    <PageDefault>
        <h1>Cadastro de categoria</h1>

        <Link to="/">
            Retornar a home
        </Link>
    </PageDefault>
    )
}

export default paginaCadastroCategoria;