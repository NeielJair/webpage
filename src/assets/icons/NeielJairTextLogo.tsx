import { SVGProps } from 'react';
import { ReactComponent as TextLogoSVG } from '../images/neieljair-text-logo.svg';

export default function NeielJairTextLogo(props: SVGProps<SVGSVGElement>) {
  return <TextLogoSVG style={{ filter: 'invert(1)', fontFamily: 'Source Code Pro' }} {...props} />;
}
