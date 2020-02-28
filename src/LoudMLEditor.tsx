import React, { PureComponent } from 'react';
import { FormField } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

import { LoudMLOptions } from './types';

export class LoudMLEditor extends PureComponent<PanelEditorProps<LoudMLOptions>> {
  onTextChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, loudmlserver: target.value });
  };

  render() {
    const { options } = this.props;

    return (
      <div className="section gf-form-group">
        <h5 className="section-heading">Configuration</h5>
        <FormField
          label="LoudML Server"
          labelWidth={20}
          inputWidth={20}
          type="text"
          onChange={this.onTextChanged}
          value={options.loudmlserver || ''}
        />
      </div>
    );
  }
}
