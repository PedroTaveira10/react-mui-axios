import './App.css'
import BooksPage from './pages/BooksPage'
import Container from '@material-ui/core/Container'
import SnackbarAlert from './components/SnackbarAlert'
import Header from './components/Header'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

function App () {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className='App'>
      <SnackbarAlert open={open} setOpen={setOpen} message={errorMessage} />
      <Header />
      <Container maxWidth='lg' className={classes.root}>
        <BooksPage setOpen={setOpen} setErrorMessage={setErrorMessage}  />
        {/* use switch for multiple pages */}
      </Container>
    </div>
  )
}

export default App
