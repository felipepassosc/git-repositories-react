import React from 'react';

import { FaGithubAlt } from 'react-icons/fa'
import { Container } from './styles';

function Main() {
    return (
        <Container>
            <h1>
                <FaGithubAlt />
                Repositórios
             </h1>
            <Form onSubmit={() => { }}>
                <input
                    type="text"
                    placeholder="Adicionar Repositório"
                />
            </Form>
        </Container>
    )
}

export default Main;
