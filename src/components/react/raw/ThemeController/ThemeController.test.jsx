/* eslint-disable */

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeController from './ThemeController';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders ThemeController component', () => {
    render(
        <Router>
            <ThemeController />
        </Router>
    );

    // Check if the component renders without crashing
    expect(screen.getByTestId('theme-controller')).toBeInTheDocument();
});

test('initializes with prefersToggleTheme set to false', () => {
    render(<ThemeController />);

    // Check if the initial state of prefersToggleTheme is false
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
});

test('toggles theme when checkbox is clicked', () => {
    render(<ThemeController />);

    // Check if the initial state of prefersToggleTheme is false
    let checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    // Click the checkbox to toggle the theme
    fireEvent.click(checkbox);

    // Check if the state is updated to true
    checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
});

test('updates document theme on theme toggle', () => {
    render(<ThemeController />);

    // Check if the initial theme is set correctly
    let documentElement = document.documentElement;


    let themeA = documentElement.getAttribute('data-theme');

    // Click the checkbox to toggle the theme
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    // Check if the theme is updated to 'honestChoco'
    documentElement = document.documentElement;

    let themeB = documentElement.getAttribute('data-theme');

    fireEvent.click(checkbox);
    expect(documentElement.getAttribute('data-theme')).toBe(themeA);

    fireEvent.click(checkbox);
    expect(documentElement.getAttribute('data-theme')).toBe(themeB);
});

test('saves theme preference to local storage', () => {
    render(<ThemeController />);

    // Check if the initial theme preference is saved correctly
    localStorage.setItem('prefersToggleTheme', 'false'); // Set initial value as a string
    expect(localStorage.getItem('prefersToggleTheme')).toBe('false');

    // Click the checkbox to toggle the theme
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    // Check if the theme preference is updated to 'true' in local storage
    expect(localStorage.getItem('prefersToggleTheme')).toBe('true');
});