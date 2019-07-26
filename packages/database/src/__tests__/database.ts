import { Database } from '../database';

describe('class Database', () => {
  test('constructor', () => {
    const db = new Database({
      connection: 'postgresql://localhost:5432/test'
    });
    expect(db).not.toBeNull();
  });
});
