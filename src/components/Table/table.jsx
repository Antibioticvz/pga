/* eslint-disable no-nested-ternary */
import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const tableStyles = makeStyles(() => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}))


const SimpleTable = (props) => {
  const { delPlayer, rows } = props
  const classes = tableStyles()

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
          {sortedData.map(row => (
            <TableRow key={row.lastName}>
              <TableCell align="center">{`${row.firstName}, ${row.lastName}`}</TableCell>
              <TableCell align="center">{row.score}</TableCell>
              <TableCell align="center">
                <Button variant="text" color="primary" onClick={() => delPlayer(row.firstName, row.lastName)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

SimpleTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  delPlayer: PropTypes.func.isRequired,
}

export default SimpleTable
