import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import FooterDaisy from './FooterDaisy';

describe('FooterDaisy Component', () => {
    it('renders all navigation links', () => {
        render(
            <Router>
                <FooterDaisy />
            </Router>
        );

        // Check if all navigation links are present
        expect(screen.getByTestId('footer-home')).toBeInTheDocument();
        expect(screen.getByTestId('footer-about')).toBeInTheDocument();
        expect(screen.getByTestId('footer-services')).toBeInTheDocument();
        expect(screen.getByTestId('footer-contact')).toBeInTheDocument();
    });

    it('renders all legal links', () => {
        render(
            <Router>
                <FooterDaisy />
            </Router>
        );

        // Check if all legal links are present

        expect(screen.getByTestId('footer-legal')).toBeInTheDocument();
        expect(screen.getByTestId('footer-terms')).toBeInTheDocument();
        expect(screen.getByTestId('footer-privacy')).toBeInTheDocument();
        expect(screen.getByTestId('footer-cookie')).toBeInTheDocument();
    });

    // Add more tests as needed, such as testing the presence of the newsletter form
});
