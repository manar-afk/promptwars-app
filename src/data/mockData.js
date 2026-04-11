export const POI_TYPES = {
  FOOD: 'Food & Beverage',
  RESTROOM: 'Restroom',
  GATE: 'Gate',
  MERCH: 'Merchandise'
};

export const MOCK_VENUES = {
  main_stadium: {
    id: 'stadium_1',
    name: 'Pulsepoint Arena',
    sections: ['101', '102', '103', '104', '201', '202', '301']
  }
};

export const MOCK_POIS = [
  { id: 'f1', type: POI_TYPES.FOOD, name: 'Stadium Dogs', section: '101', wait_time: 4, coords: { x: 200, y: 150 } },
  { id: 'f2', type: POI_TYPES.FOOD, name: 'Neon Bites', section: '103', wait_time: 12, coords: { x: 600, y: 150 } },
  { id: 'f3', type: POI_TYPES.FOOD, name: 'Burger Blitz', section: '201', wait_time: 25, coords: { x: 400, y: 50 } },
  { id: 'r1', type: POI_TYPES.RESTROOM, name: 'Restroom A (Men/Women)', section: '101', wait_time: 2, coords: { x: 150, y: 250 } },
  { id: 'r2', type: POI_TYPES.RESTROOM, name: 'Restroom B (Family)', section: '103', wait_time: 15, coords: { x: 650, y: 250 } },
  { id: 'r3', type: POI_TYPES.RESTROOM, name: 'Restroom C', section: '202', wait_time: 8, coords: { x: 400, y: 450 } },
  { id: 'g1', type: POI_TYPES.GATE, name: 'North Gate', section: 'Gate N', wait_time: 5, coords: { x: 400, y: 10 } },
  { id: 'g2', type: POI_TYPES.GATE, name: 'South Gate', section: 'Gate S', wait_time: 18, coords: { x: 400, y: 590 } },
];

export const MOCK_USER_STATE = {
  currentSection: '102',
  ticketInfo: {
    seat: 'Row 12, Seat 4',
    entrance: 'North Gate'
  }
};

export const MOCK_CONGESTION = {
  '101': 'Low',
  '102': 'High', // High congestion to trigger our nudge
  '103': 'Medium',
  '104': 'Low',
  '201': 'Low',
  '202': 'Medium'
};

// Helper function to get status bucket
export const getWaitStatus = (minutes) => {
  if (minutes < 5) return 'green';
  if (minutes <= 15) return 'yellow';
  return 'red';
};
