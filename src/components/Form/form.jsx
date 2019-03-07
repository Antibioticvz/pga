import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'

function isFloat(num) { return parseInt(num, 10) !== parseFloat(num) }

const Form = ({ addPlayer }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [score, setScore] = useState('')
  const dropForm = () => {
    setFirstName('')
    setLastName('')
    setScore('')
  }
  return (
    <>
      <form className="">
        <Typography variant="h3">
          New Player is Coming
        </Typography>

        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">First Name</InputLabel>
          <Input
            value={firstName}
            name="firstName"
            autoFocus
            onChange={e => setFirstName(e.currentTarget.value)}
          />
        </FormControl>

        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Last Name</InputLabel>
          <Input
            value={lastName}
            name="lastName"
            onChange={e => setLastName(e.currentTarget.value)}
          />
        </FormControl>

        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Score</InputLabel>
          <Input
            value={score}
            name="score"
            type="number"
            onChange={
              ({ currentTarget: { value } }) => {
                const newScore = Number(value)
                if (newScore > 0 && newScore < 101 && !isFloat(newScore)) setScore(newScore.toString())
                else setScore('')
              }
            }
            // @ts-ignore
            onInput={(({ currentTarget: { value } }) => Number(parseInt(value, 10)))}
          />
        </FormControl>
      </form>

      <Button
        disabled={firstName === '' || lastName === '' || score === ''}
        variant="contained"
        color="primary"
        type="number"
        onClick={(e) => {
          e.preventDefault()
          addPlayer(firstName, lastName, Number(score))
          dropForm()
        }}
        fullWidth
      >
        Add
      </Button>
    </>
  )
}

Form.propTypes = {
  addPlayer: PropTypes.func.isRequired,
}

export default Form
