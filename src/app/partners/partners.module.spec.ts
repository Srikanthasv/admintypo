import { PartnersModule } from './partners.module';

describe('PartnersModule', () => {
  let partnersModule: PartnersModule;

  beforeEach(() => {
    partnersModule = new PartnersModule();
  });

  it('should create an instance', () => {
    expect(partnersModule).toBeTruthy();
  });
});
