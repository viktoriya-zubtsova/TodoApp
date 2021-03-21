import React from 'react';
import MetaTags from 'react-meta-tags';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import Todo from '../Todo/Todo';
import About from '../About/About';

import styles from './App.module.css';

const App = () =>
    (<Router>
      <div className={styles.wrap}>
        <MetaTags>
            <title>TodoApp</title>
            <meta property="og:title" content="MyTodoReactApp"/>
            <meta property="og:image" content="title.png"/>
            <meta property="og:image:width" content="450"/>
            <meta property="og:image:height" content="323"/>
        </MetaTags>
        <Card className={styles.sidebar}>
            <Link to='/' className={styles.link}><Button variant="outlined" color="primary">Обо мне</Button></Link>
            <Link to='/todo' className={styles.link}><Button variant="outlined" color="primary">Дела</Button></Link>
        </Card>
        <Card className={styles.content}>
          <Route path='/' exact component={About} />
          <Route path='/todo' component={Todo} />
        </Card>
      </div>
    </Router>);

export default App;
