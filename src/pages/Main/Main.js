import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'
import { Container, Form, SubmitButton } from './styles';

import api from '../../services/api'

// quando preciso estilizar um elemento baseado em alguma propriedade, criar componentes
class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: false
    }

    handleInputChange = e => {
        this.setState({
            newRepo: e.target.value
        })
    }
    // Como vai levar um tempo, esse metodo deve ser assincrono
    handleSubmit = async e => {
        e.preventDefault()

        this.setState({
            loading: true
        })

        const { repositories, newRepo } = this.state;

        const response = await api.get(`/repos/${newRepo}`)

        const data = {
            name: response.data.full_name
        }

        this.setState({
            repositories: [...repositories, data],
            newRepo: '',
            loading: false
        })
    }

    render() {
        const { repositories, newRepo, loading } = this.state;

        return (
            <>
                <Container>
                    <h1>
                        <FaGithubAlt />
                    Repositórios
                 </h1>
                    <Form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="Adicionar Repositório"
                            value={newRepo}
                            onChange={this.handleInputChange}
                        />
                        <SubmitButton loading={loading}>
                            {loading ? (
                                <FaSpinner color="#FFF" size={14} />
                            ) : (
                                    <FaPlus color="#FFF" size={14} />
                                )}
                        </SubmitButton>
                    </Form>
                    {/* <ul>
                        {repositories.map(repo => {
                            <li>{repo}</li>
                        })}
                    </ul> */}
                </Container>
            </>
        )
    }
}

export default Main;
