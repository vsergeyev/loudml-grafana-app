// Loud ML API class
// Connects to Loud ML server
//
// https://loudml.io
// http://github.com/regel/loudml

import { BackendSrv } from 'grafana/app/core/services/backend_srv';

import {
  DEFAULT_LOUDML_RP,
  MODEL_TYPE_LIST,
  DEFAULT_MODEL,
  DEFAULT_FEATURE,
  DEFAULT_START_OPTIONS,
  MIN_INTERVAL_SECOND,
  MIN_INTERVAL_UNIT,
  MAX_INTERVAL_SECOND,
  MAX_INTERVAL_UNIT,
  MIN_SPAN,
  MAX_SPAN,
  DEFAULT_ANOMALY_TYPE,
  ANOMALY_HOOK_NAME,
  ANOMALY_HOOK
} from './types';


export default class LoudMLAPI {
  private url: string;

  constructor(instanceSettings: any, private backendSrv: BackendSrv) {
    this.url = instanceSettings.url;
  }

  async get(url: string, params?: any) {
    return this._query('GET', url, params);
  }

  private async _query(method: string, url: string, data?: any, data_as_params: false) {
    method = method.toUpperCase();
    let options: any = {
      method,
      url: this.url + url
    };
    if(method === 'GET' || method === 'DELETE' || data_as_params) {
      options.params = data;
    } else {
      options.data = data;
    }

    const response = await this.backendSrv.datasourceRequest(options);
    const responseData = response.data;

    return responseData;
  }

  createAndGetBucket = async (database, retentionPolicy, measurement, source) => {
    const {host, port} = this.splitAddr('http://localhost:8086', 8086) //source.url, 8086)
    const bucketName = [
        database,
        retentionPolicy,
        measurement,
    ].join('_')
    const settings = {
        type: source.type,
        name: bucketName,
        retention_policy: retentionPolicy,
        database,
        measurement,
        addr: `${host}:${port}`,
        username: source.username,
        password: source.password,
    }

    await this._query('POST', '/buckets', settings)
    const response = await this._query('GET', `/buckets/${bucketName}`)

    return response[0];
  }

  splitAddr = (url, port) => {
    // extract host and port from url address
    const re = /(https?:)?(\/\/)?([\w\.]*):?(\d*)?/
    const res = re.exec(url)
    return {
        host: res[3],
        port: res[4]||port,
    }
  }

  createModel = async model => {
    // POST model JSON to /models
    return this._query('POST', '/models', model)
  }

  deleteModel = async name => {
    return this._query('DELETE', `/models/${name}`)
  }

  createHook = (hook, bucket) => {
    const h = {...hook}
    h.config.bucket = bucket
    return h
  }

  createModelHook = async (name, hook) => {
    // POST model hook to /models/${name}/hooks
    return this._query('POST', `/models/${name}/hooks`, hook)
  }

  trainAndStartModel = async (name, from, to) => {
    const params = {
      from,
      to,
      ...DEFAULT_START_OPTIONS,
    }
    return this._query('POST', `/models/${name}/_train`, params, true)
  }

  trainModel = async (name, data) => {
    const {
        lower,
        upper
    } = this.convertTimeRange(data.timeRange)

    return await this.trainAndStartModel(name, lower, upper)
  }

  startModel = async (name) => {
    const params = {
      ...DEFAULT_START_OPTIONS,
    }
    return this._query('POST', `/models/${name}/_start`, params, true)
  }

  stopModel = async (name) => {
    const params = {}
    return this._query('POST', `/models/${name}/_stop`, params, true)
  }

  convertTimeRange = timeRange => {
    const {from, to} = timeRange.raw
    return {
        lower: from,
        upper: to,
    }
    // const regex = /[ \(\)]/g
    // return {
    //     lower: (from||'now()').replace(regex, ''),
    //     upper: (to||'now()').replace(regex, ''),
    // }
  }
}
