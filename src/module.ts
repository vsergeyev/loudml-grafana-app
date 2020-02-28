import { PanelPlugin } from '@grafana/data';
import { LoudMLOptions, defaults } from './types';
import { LoudMLPanel } from './LoudMLPanel';
import { LoudMLEditor } from './LoudMLEditor';

export const plugin = new PanelPlugin<LoudMLOptions>(LoudMLPanel).setDefaults(defaults).setEditor(LoudMLEditor);
