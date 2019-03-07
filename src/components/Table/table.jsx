import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
})


const rows = [
  { firstName: 'Alex', lastName: 'Abrams', score: 99 },
  { firstName: 'Junge', lastName: 'AAJohn', score: 99 },
  { firstName: 'Vera', lastName: 'Rob', score: 77 },
  { firstName: 'Geary', lastName: 'Alice', score: 77 },
]

function SimpleTable(props) {
  const { classes } = props

  const sortedData = [...rows].sort((a, b) => (
    (a.score < b.score) ? 1 : (a.score === b.score) ? ((a.lastName > b.lastName) ? 1 : -1) : -1))

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Score </TableCell>
            <TableCell align="center">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row, i) => (
            <TableRow key={i}>
              <TableCell align="center">{`${row.firstName}, ${row.lastName}`}</TableCell>
              <TableCell align="center">{row.score}</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

SimpleTable.propTypes = {
  // classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleTable)
