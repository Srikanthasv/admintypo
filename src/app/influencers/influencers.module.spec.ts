import { InfluencersModule } from './influencers.module';

describe('InfluencersModule', () => {
  let InfluencersModule: InfluencersModule;

  beforeEach(() => {
    InfluencersModule = new InfluencersModule();
  });

  it('should create an instance', () => {
    expect(InfluencersModule).toBeTruthy();
  });
});
