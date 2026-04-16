import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WaitTimeBadge from './WaitTimeBadge';

describe('WaitTimeBadge', () => {
  it('renders the correct wait time and MINS label', () => {
    render(<WaitTimeBadge waitTime={15} />);
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('MINS')).toBeInTheDocument();
  });

  it('applies standard DOM structuring', () => {
    const { container } = render(<WaitTimeBadge waitTime={45} />);
    expect(container.firstChild).toHaveClass('wait-badge');
  });
});
