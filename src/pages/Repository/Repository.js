import React, { Component } from 'react';
import api from '../../services/api'
import PropTypes from 'prop-types'
import { Loading } from './styles';
import Container from '../../Components/Container/Container'

class Repository extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                repository: PropTypes.string,
            })
        }).isRequired,
    }

    state = {
        repository: {},
        issues: [],
        loading: true
    }

    // Mudei para um componentede classe, usei o component como assincrono para poder sar a api do github
    async componentDidMount() {
        const { match } = this.props

        const repoName = decodeURIComponent(match.params.repository)

        // como fazer duas chamadas de api ao mesmo tempo

        const [repository, issues] = await Promise.all([
            api.get(`/repos/${repoName}`),
            api.get(`/repos/${repoName}/issues`, {
                params: {
                    state: 'open',
                    per_page: 5
                },
            }),
        ])
        // parametros só os que estão aberto e aprnas 5 issues

        this.setState({
            repository: repository.data,
            issues: issues.data,
            loading: false
        })
    }

    render() {
        const { repository, issues, loading } = this.state

        if (loading) {
            return <Loading>Carregando...</Loading>
        }
        return <h1>Repository</h1>
    }
}

export default Repository;
