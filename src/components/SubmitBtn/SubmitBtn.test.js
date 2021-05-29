import { render, fireEvent } from '@testing-library/react'
import SubmitBtn from './SubmitBtn'

it('Check button render', () => {
  const { queryByTitle } = render(<SubmitBtn/>)
  const btn = queryByTitle('sumbmitBtn')
  expect(btn).toBeTruthy()
})

it('correct text', () => {
  const shortText = "testText"
  const { queryByTitle } = render(<SubmitBtn label={shortText}/>)
  const btn = queryByTitle('sumbmitBtn')
  expect(btn.textContent).toBe(shortText)
})

it('submits on click', ()=>{
  const mockSubmit = jest.fn()
  const submitBtnTitle = "testSubmitBtn"
  
  const { queryByTitle } = render(
    <form onSubmit={mockSubmit}>
      <SubmitBtn title={submitBtnTitle}/>
    </form>
  )
  const btn = queryByTitle(submitBtnTitle)

  fireEvent(btn,new MouseEvent('click'))
  expect(mockSubmit).toHaveBeenCalled()
})
