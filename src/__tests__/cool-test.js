jest.unmock('../cool');

import TEST from '../cool';

describe('TEST', () => {
  it('should do it', () => {
    console.log('test', TEST);
    
    expect(true).toBe(true);
  });
});
