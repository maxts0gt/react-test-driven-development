import SignUpPage from './SignUpPage';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Sign Up Page', () => {
  describe('Layout', () => {
    it('has header', () => {
      render(<SignUpPage />);
      const header = screen.queryByRole('heading', { name: 'Sign Up' });
      expect(header).toBeInTheDocument();
    });
    it('has username input', () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText('Username');
      expect(input).toBeInTheDocument();
    });
    it('has email input', () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText('E-mail');
      expect(input).toBeInTheDocument();
    });
    it('has password input', () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText('Password');
      expect(input).toBeInTheDocument();
    });
    it('has password type input', () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText('Password');
      expect(input.type).toBe('password');
    });
    it('has password repeat input', () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText('Password Repeat');
      expect(input).toBeInTheDocument();
    });
    it('has password repeat type  input', () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText('Password Repeat');
      expect(input.type).toBe('password');
    });
    it('has Sign Up Button', () => {
      render(<SignUpPage />);
      const buton = screen.queryByRole('button', { name: 'Sign Up' });
      expect(buton).toBeInTheDocument();
    });
    it('disabled button initially', () => {
      render(<SignUpPage />);
      const buton = screen.queryByRole('button', { name: 'Sign Up' });
      expect(buton).toBeDisabled();
    });
  });
  describe('Interactions', () => {
    it('enables button when passwords match', () => {
      render(<SignUpPage />);
      const passwordInput = screen.getByLabelText('Password');
      const passwordRepeatInput = screen.getByLabelText('Password Repeat');
      userEvent.type(passwordInput, 'P4assword');
      userEvent.type(passwordRepeatInput, 'P4assword');
      const button = screen.queryByRole('button', { name: 'Sign Up' });
      expect(button).not.toBeEnabled();
    });
  });
});
