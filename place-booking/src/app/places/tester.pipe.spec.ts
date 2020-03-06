import { TesterPipe } from './tester.pipe';

describe('TesterPipe', () => {
  it('create an instance', () => {
    const pipe = new TesterPipe();
    expect(pipe).toBeTruthy();
  });
});
