import React from 'react';

type Props = {
  isTruthy: string;
};

export default class Bool extends React.Component<Props> {
  render() {
    return !!this.props.isTruthy;
  }

  onEnterKeyDown = async () => {
    let token = await this.current?.keepOwnership() ?? '31337';
    return this.props.updateMode(token);
  };
}

export function Hook() {
  React.useEffect(() => {
    localStorage.setItem('formData', 'DATA');
  });

  return <Bool />;
}
