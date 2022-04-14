import { render, screen } from '@testing-library/react'
import Home from '@/pages/index';
import Editor from '@uiw/react-textarea-code-editor'

describe('Bug', () => {
  it('does not work because the Editor does not compile', () => {
    render(<Home />)

    console.log('Editor', {Editor});

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
