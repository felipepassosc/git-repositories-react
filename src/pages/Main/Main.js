import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'
import { Container, Form, SubmitButton, List } from './styles';

import api from '../../services/api'

// quando preciso estilizar um elemento baseado em alguma propriedade, criar componentes
class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: false
    }
// carregar dados do localStorage
    componentDidMount(){
        const repositories = localStorage.getItem('repositories')

        if (repositories) {
            this.setState({
                repositories: JSON.parse(repositories)
            })
        }
    }
// salvar dados do localStorage
// componentDidUpdate - toda vez que atualizar, vai comparar o estado antigo com o novo, se for diferente, da um localStorage.setItem
    componentDidUpdate(_, prevState){
        const { repositories } = this.state

        if (prevState.repositories !== repositories){
            localStorage.setItem('repositories', JSON.stringify(repositories))
        }
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
                    <List>
                        {repositories.map(repo => (
                            <li key={repo.name}>
                                <span>{repo.name}</span>
                                <a href="">Detalhes</a>
                            </li>
                        ))}
                    </List>
                </Container>
            </>
        )
    }
}

export default Main;
