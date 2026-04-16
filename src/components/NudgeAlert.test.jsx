import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NudgeAlert from './NudgeAlert';

describe('NudgeAlert', () => {
  it('renders custom message correctly without waiting', () => {
    const message = "Please proceed to gates safely.";
    render(<NudgeAlert customMessage={message} />);
    expect(screen.getByText("Congestion Alert")).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
