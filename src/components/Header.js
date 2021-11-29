import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  Header: {
    background:'#071A2F'
  },
  Nome: {
    flexGrow: 1
  }
}));

function Header () {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar className={classes.Header}>
        <Typography variant='h6' className={classes.Nome}>
          Projeto Banco de Usuarios
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
