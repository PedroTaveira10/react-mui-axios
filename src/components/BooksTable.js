import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Table } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  table: {
    marginTop: '50px'
  },
  button: {
    margin: '0 5px'
  }
}))

function BooksTable ({ books, startEditing, deleteBook }) {
  const classes = useStyles()

  return (
    <TableContainer>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align='right'>Nome</TableCell>
            <TableCell align='right'>Apelido</TableCell>
            <TableCell align='right'>E-mail</TableCell>
            <TableCell align='right'>Ano</TableCell>
            <TableCell align='right'>CPF</TableCell>
            <TableCell align='right'>CNPJ</TableCell>
            <TableCell align='right'>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map(book => (
            <TableRow key={book.id}>
              <TableCell component='th' scope='row'>
                {book.id}
              </TableCell>
              <TableCell align='right'>{book.Nome}</TableCell>
              <TableCell align='right'>{book.apelido}</TableCell>
              <TableCell align='right'>{book.email}</TableCell>
              <TableCell align='right'>{book.cpf}</TableCell>
              <TableCell align='right'>{book.cnpj}</TableCell>
              <TableCell align='right'>{book.year}</TableCell>
              <TableCell align='right'>
                <Button
                  variant='contained'
                  onClick={() => startEditing(book)}
                  className={classes.button}
                >
                  Editar
                </Button>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => deleteBook(book)}
                  className={classes.button}
                >
                  Deletar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BooksTable
