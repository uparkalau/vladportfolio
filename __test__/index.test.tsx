import '@testing-library/jest-dom'
import React from 'react'
import { render } from '@testing-library/react'
import Index from '../pages/index'

// Mock the animations module
jest.mock('@/animations', () => ({
    fadeInUp: {},
}))

test('renders index page correctly', () => {
    const { getByText } = render(<Index />)

    // Check if the main text content is present
    const mainText = getByText(
        /Experienced result-oriented full-stack software engineer/i
    )
    expect(mainText).toBeInTheDocument()

    // Check if service cards are present
    const serviceCards = getByText(/What I offer/i)
    expect(serviceCards).toBeInTheDocument()
})
