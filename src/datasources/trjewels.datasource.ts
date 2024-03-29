import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'trjewels',
  connector: 'mysql',
  url: 'mysql://root:EnQos@2018@localhost/trjewels',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'EnQos@2018',
  database: 'trjewels'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class TrjewelsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'trjewels';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.trjewels', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
