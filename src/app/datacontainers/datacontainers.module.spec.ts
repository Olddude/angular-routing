import { DatacontainersModule } from './datacontainers.module';

describe('DatacontainersModule', () => {
  let datacontainersModule: DatacontainersModule;

  beforeEach(() => {
    datacontainersModule = new DatacontainersModule();
  });

  it('should create an instance', () => {
    expect(datacontainersModule).toBeTruthy();
  });
});
