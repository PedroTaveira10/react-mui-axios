import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  form: {
    margin: '50px 0 20px 0'
  },
  input: {
    width: '100%'
  },
  button: {
    margin: '0 5px'
  }
}))

function BooksForm ({
  bookForm,
  onValueChange,
  refreshPage,
  createOrUpdateBook,
  isEditing
}) {
  const classes = useStyles()

  return (
    <>
      <form className={classes.form} noValidate autoComplete='off'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              id='Nome'
              name='Nome'
              value={bookForm.Nome}
              onChange={onValueChange}
              label='Nome do Responsável'
              variant='outlined'
              error={!bookForm.Nome}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              id='apelido'
              name='apelido'
              value={bookForm.apelido}
              onChange={onValueChange}
              label='Apelido'
              variant='outlined'
              error={!bookForm.apelido}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              id='email'
              name='email'
              value={bookForm.email}
              onChange={onValueChange}
              label='E-mail'
              variant='outlined'
              type='email'
              error={!bookForm.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              className={classes.input}
              id='year'
              name='year'
              value={bookForm.year}
              onChange={onValueChange}
              label='Ano'
              variant='outlined'
              error={!bookForm.year}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              id='cpf'
              name='cpf'
              value={bookForm.cpf}
              onChange={onValueChange}
              label='CPF'
              variant='outlined'
              error={!bookForm.cpf}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              id='cnpj'
              name='cnpj'
              value={bookForm.cnpj}
              onChange={onValueChange}
              label='CNPJ'
              variant='outlined'
              error={!bookForm.cnpj}
            />
          </Grid>
        </Grid>
      </form>

      <Button
        variant='contained'
        color='primary'
        onClick={createOrUpdateBook}
        className={classes.button}
      >
        {isEditing ? 'Atualizar' : 'Criar'}
      </Button>
      <Button
        variant='contained'
        onClick={refreshPage}
        className={classes.button}
      >
        Cancelar
      </Button>
    </>
  )
}

export default BooksForm
