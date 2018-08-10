import { DatapointsModule } from './datapoints.module';

describe('DatapointsModule', () => {
  let datapointsModule: DatapointsModule;

  beforeEach(() => {
    datapointsModule = new DatapointsModule();
  });

  it('should create an instance', () => {
    expect(datapointsModule).toBeTruthy();
  });
});
