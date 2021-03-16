import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';

const octokit = new Octokit();
class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    error: false
  }
  componentDidMount() {
    octokit.repos.listForUser({
      username: 'viktoriya-zubtsova'
    }).then(({ data }) => {
      this.setState({
        repoList: data,
        isLoading: false,
        userName: data[0].owner.login,
				userAvatar: data[0].owner.avatar_url
      });
      }).catch(error => {
        this.setState({
          error: true,
          isLoading: false,
          textError: 'Что-то пошло не так...'
      })
    })
  }

  render() {
    const { isLoading, repoList, error } = this.state;

    if (this.state.error) {
			return (<div>
				<h3>{this.state.textError}</h3>
			</div>);
		} else {
    return (
      <div>
        <img className={styles.userAvatar} src={this.state.userAvatar}/>
        <h3>Мой логин на github.com: {this.state.userName}</h3>
        <h1 className={styles.title}>{ isLoading ? <CircularProgress /> : 'Мои репозитории:'}</h1>
        {!isLoading && <ol>
          {repoList.map(repo => (<li key={repo.id}>
            <a className={styles.link} href={repo.html_url}>{repo.name}</a>
          </li>))}
        </ol>}
      </div>
    );
  }
  }
}

export default About;
