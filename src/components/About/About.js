import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Pagination from '@material-ui/lab/Pagination';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';

const octokit = new Octokit();
class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    error: false,
    repoPaginList: [],
    paginLimit: 2
  }
  componentDidMount() {
    octokit.users.getByUsername({
      username: 'viktoriya-zubtsova'
    }).then(( json ) => {
        this.setState({
          userName: json.data.login,
          userAvatar: json.data.avatar_url,
          userUrl: json.data.html_url,
          userBio: json.data.bio
      });
    }).catch(error => {
      this.setState({
        error: true,
        isLoading: false,
        textError: 'Что-то пошло не так...'
    })
  });
    octokit.repos.listForUser({
      username: 'viktoriya-zubtsova'
    }).then(({ data }) => {
      this.setState({
        repoList: data,
        isLoading: false
      })
      this.setState({
        repoPaginList: this.state.repoList.slice(0, this.state.paginLimit),
        paginCount: Math.ceil(this.state.repoList.length / this.state.paginLimit)
      });
      }).catch(error => {
        this.setState({
          error: true,
          isLoading: false,
          textError: 'Что-то пошло не так...'
      })
    });
  }
  changePagin(event, value) {
        this.setState({
          currentPage: value,
          repoPaginList: this.state.repoList.slice((value - 1) * this.state.paginLimit, ((value - 1) * this.state.paginLimit + this.state.paginLimit))
        });
}

  render() {
    const { isLoading, repoPaginList, error, paginCount} = this.state;

    if (this.state.error) {
			return (<div>
				<h2 className={styles.title}>{this.state.textError}</h2>
			</div>);
		} else {
    return (
      <div>
        {!isLoading && <div>
          <div className={styles.user}>
            <img className={styles.userAvatar} src={this.state.userAvatar}/>
            <div className={styles.userInfo}>
              <h3 className={styles.userTitle}>Виктория Зубцовa</h3>
              <p className={styles.userText}>{this.state.userBio}</p>
              <p className={styles.userText}>
                <MailOutlineIcon className={styles.userIcon} /> wow55222@yandex.ru</p>
              <p className={styles.userText}>
                <TelegramIcon className={styles.userIcon} /><WhatsAppIcon className={styles.userIcon} /> +79130822502</p>
              <p className={styles.userText}>
                <InstagramIcon className={styles.userIcon} />
                <a className={styles.link} href={'https://www.instagram.com/zy_vi_an'}> zy_vi_an</a></p>
              <p className={styles.userText}>
                <GitHubIcon className={styles.userIcon} />
                <a className={styles.link} href={this.state.userUrl}> {this.state.userName}</a></p>
            </div>
          </div>
          <h2 className={styles.title}>Мои проекты:</h2>
          <ul>
            <li><a className={styles.projectLink} href='https://webheroschool.github.io/zubtsova-final-HTML-CSS/'>Axion</a></li>
            <li><a className={styles.projectLink} href='https://viktoriya-zubtsova.github.io/Bali/'>Bali</a></li>
            <li><a className={styles.projectLink} href='https://webheroschool.github.io/zubtsova-JS/'>Карты с багами оО</a></li>
          </ul>
        </div>}
        <h2 className={styles.title}>{ isLoading ? <LinearProgress color="primary" /> : 'Мои репозитории:'}</h2>
        {!isLoading && <div>
          <ol className={styles.list}>
            {this.state.repoPaginList.map(repo => (<li className={styles.listItem} key={repo.id}>
              <a className={styles.projectLink} href={repo.html_url}>{repo.name}</a>
              <p className={styles.text}>{repo.description} ({repo.language})</p>
              <span className={styles.text}>обновлён: {new Date(repo.updated_at).toLocaleString()}</span>
            </li>))}
          </ol>
          <div className={styles.pagination}>
            <Pagination
              count={this.state.paginCount}
              variant="outlined"
              color="primary"
              onChange={this.changePagin.bind(this)} />
          </div>
        </div>}
      </div>
    );
  }
  }
}

export default About;
