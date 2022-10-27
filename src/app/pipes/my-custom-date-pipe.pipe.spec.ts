import { MyCustomDatePipePipe } from './my-custom-date-pipe.pipe';

describe('MyCustomDatePipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyCustomDatePipePipe();
    expect(pipe).toBeTruthy();
  });
});
