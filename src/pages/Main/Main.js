import React from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa'
import { Container, Form, SubmitButton } from './styles';
// quando preciso estilizar um elemento baseado em alguma propriedade, criar componentes
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
                <SubmitButton>
                    <FaPlus color="#FFF" size={14}/>
                </SubmitButton>
            </Form>
        </Container>
    )
}

export default Main;
