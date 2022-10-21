import { describe } from 'vitest'
import {render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => { 
  //it.todo('should render');
  test('should render', () => 
    {render(<App />);}
  );

  //it.todo('should have title "Mi DUI es valido?"');
  test( 'should have title "Mi DUI es valido?"', () => {
    render(<App />);
    const title = screen.getByText('Mi DUI es valido?');
    expect(title).toBeInTheDocument();
  });

  //it.todo('should have an input text');
  test('should have an input text', () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  //it.todo('should have a button with text "Validar"');
  test('should have a button with text "Validar"', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  /* Lo que demas que se les ocurra que puedan probar */
  // N/A
})
