import { render, fireEvent } from '@testing-library/react'
import GoBtn from './GoBtn'

it('Check button render', () => {
  const { queryByTitle } = render(<GoBtn/>)
  const btn = queryByTitle('sumbmitBtn')
  expect(btn).toBeTruthy()
})

it('correct text', () => {
  const { queryByTitle } = render(<GoBtn/>)
  const btn = queryByTitle('sumbmitBtn')
  expect(btn.innerHTML).toBe('Ir')
})

