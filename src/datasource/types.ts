import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface LoudMLOptions extends DataSourceJsonData {
  bucket: string;
}

export interface LoudMLQuery extends DataQuery {}

export const DEFAULT_LOUDML_RP = 'autogen'

export const MODEL_TYPE_LIST = [
    { name: 'Donut', type: 'donut', default: true },
    // { name: 'DiskUtil', type: 'donut-ns', default: false },
    // { name: 'donut multivariate', type: 'donut-mv', default: false },
]

export const DEFAULT_MODEL = {
    bucket_interval: '20m',
    default_bucket: null,
    features: [],
    interval: '1m',
    max_evals: 20,
    name: '',   // input value cannot be null
    offset: '10s',
    span: 10,
    type: MODEL_TYPE_LIST[0].type,
}

export const DEFAULT_FEATURE = {
    name: '',      // input value cannot be null
    measurement: null,
    field: null,
    metric: 'mean',
    default: null,
    io: 'io',
    anomaly_type: 'low_high',
    match_all: [],
}

export const MIN_INTERVAL_SECOND = 5

export const MIN_INTERVAL_UNIT = `${MIN_INTERVAL_SECOND}s`

export const MAX_INTERVAL_SECOND = 60

export const MAX_INTERVAL_UNIT = `${MAX_INTERVAL_SECOND}s`

export const MIN_SPAN = 10

export const MAX_SPAN = 100
