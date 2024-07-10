import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react';
import AddCandidateForm from '../components/AddCandidateForm';

describe('AddCandidateForm', () => {
  test('renders form fields correctly', () => {
    act(() => {
      render(<AddCandidateForm />);
    });
    expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Apellido/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Teléfono/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Dirección/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Educación/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Experiencia Laboral/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/CV/i)).toBeInTheDocument();
  });

  test('validates form fields', () => {
    act(() => {
      render(<AddCandidateForm />);
    });
    fireEvent.click(screen.getByText(/Añadir Candidato/i));
    expect(screen.getByLabelText(/Nombre/i)).toBeInvalid();
    expect(screen.getByLabelText(/Apellido/i)).toBeInvalid();
    expect(screen.getByLabelText(/Email/i)).toBeInvalid();
    expect(screen.getByLabelText(/Teléfono/i)).toBeInvalid();
    expect(screen.getByLabelText(/Dirección/i)).toBeInvalid();
    expect(screen.getByLabelText(/Educación/i)).toBeInvalid();
    expect(screen.getByLabelText(/Experiencia Laboral/i)).toBeInvalid();
    expect(screen.getByLabelText(/CV/i)).toBeInvalid();
  });

  test('submits form data correctly', () => {
    act(() => {
      render(<AddCandidateForm />);
    });
    fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: 'Juan' } });
    fireEvent.change(screen.getByLabelText(/Apellido/i), { target: { value: 'Pérez' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'juan.perez@example.com' } });
    fireEvent.change(screen.getByLabelText(/Teléfono/i), { target: { value: '123456789' } });
    fireEvent.change(screen.getByLabelText(/Dirección/i), { target: { value: 'Calle Falsa 123' } });
    fireEvent.change(screen.getByLabelText(/Educación/i), { target: { value: 'Ingeniería' } });
    fireEvent.change(screen.getByLabelText(/Experiencia Laboral/i), { target: { value: '5 años' } });
    fireEvent.change(screen.getByLabelText(/CV/i), { target: { files: [new File(['cv'], 'cv.pdf', { type: 'application/pdf' })] } });

    fireEvent.click(screen.getByText(/Añadir Candidato/i));
    // Aquí se puede agregar más lógica para verificar el envío de datos
  });
});