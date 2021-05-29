import { render, fireEvent } from '@testing-library/react'
import SearchForm from './SearchForm.js'

it('check Search Form render', () => {
  const { queryByTitle } = render(<SearchForm/>)
  const form = queryByTitle('SearchForm')
  expect(form).toBeTruthy()
})
