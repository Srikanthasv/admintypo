import { RidersModule } from './riders.module';

describe('RidersModule', () => {
  let RidersModule: RidersModule;

  beforeEach(() => {
    RidersModule = new RidersModule();
  });

  it('should create an instance', () => {
    expect(RidersModule).toBeTruthy();
  });
});
