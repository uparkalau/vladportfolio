import React from 'react'
import { render } from '@testing-library/react'
import Bar from '../components/Bar'
import '@testing-library/jest-dom'

describe('Bar Component', () => {
    const mockData = {
        Icon: () => <div>Mock Icon</div>,
        level: '80%', // Update with appropriate level value
        name: 'Mock Skill',
    }

    it('renders correctly', () => {
        const { getByText } = render(<Bar data={mockData} />)
        const skillName = getByText('Mock Skill')
        expect(skillName).toBeInTheDocument()
    })

    it('applies animation variants', () => {
        const { container } = render(<Bar data={mockData} />)
        const animatedDiv = container.querySelector('.bg-gradient-to-r')

        // Replace with actual style checks based on your variants
        expect(animatedDiv).toHaveStyle('width: 0px')
    })
})
