import { render, fireEvent } from '@testing-library/react'
import Search from './Search.js'

it("Search input render Check", () => {
  const { queryByTitle } = render(<Search/>)
  const input  = queryByTitle('UserInput')
  expect(input).toBeTruthy()
})

describe("ChangeInInput", () => {
  it('onChange', () => {
    const { queryByTitle } = render(<Search/>)
    const input  = queryByTitle('UserInput')
    fireEvent.change(input,{ target: {value: 'textoDePrueba'}})
    expect(input.value).toBe('textoDePrueba')
  })
})

