import { h, Component, Fragment } from 'preact';
import Skeleton from 'react-loading-skeleton';
import useDimensions from 'react-cool-dimensions';
import { useRef } from 'preact/hooks';
import * as QRCode from 'qrcode';
import { useReactToPrint } from 'react-to-print';

export default class App extends Component<{}, {}> {
  render() {
    return <h1>All recipes</h1>;
  }
}
