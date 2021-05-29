import { render, fireEvent } from '@testing-library/react'
import FormInput from './FormInput.js'

it('Input render Check', () => {
  const inputTitle= "testTitle" 
  const { queryByTitle } = render(
  <FormInput 
    inputData={{ 
      inputId:'testInputForm', 
      inputTitle: inputTitle,
      inputProps: {},
    }}
    labelData={{
      labelTitle: 'labelTitle',
      labelWidth: 130,
    }}
  />)
  const input  = queryByTitle(inputTitle)
  expect(input).toBeTruthy()
})

it('Labeling', () => {
    const shortText = "testText"
    const labelTitle = "labelTitle"
    const { queryByTitle } = render(<FormInput label={shortText} labelTitle={labelTitle}/>)
    const label  = queryByTitle(labelTitle)
    expect(label.textContent).toBe(shortText)
})

it('onChange', () => {
  const shortText = "testText"
  const inputTitle = "inputTitle"
  const { queryByTitle } = render(<FormInput inputTitle={inputTitle}/>)
  const input  = queryByTitle(labelTitle)
  fireEvent.change(input,{target:{value:{shortText}}})
  expect(input.value).toBe(shortText)
})



