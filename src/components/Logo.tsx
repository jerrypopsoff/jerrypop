import type { Theme } from '../types/theme';
import { SLOW_DANGLE_STYLE } from '../constants/css/rotation';
import logo from '../images/colonel.svg';
import styled from 'styled-components';
import { LOGO_Z_INDEX } from '../constants/z-index';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const WordmarkRepeated = dynamic(() => import('./WordmarkRepeated'), {
  ssr: false,
});

const StyledWordmark = styled(WordmarkRepeated)`
  height: 698px;
  max-width: 90vw;
  width: 450px;
`;

const StyledButton = styled.button`
  ${SLOW_DANGLE_STYLE}
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  overflow: visible;
  padding: 0;
  position: absolute;
  z-index: ${LOGO_Z_INDEX};
`;

const StyledLogo = styled(Image)`
  height: 300px;
  margin-bottom: -8px; // Offset drop shadow dead space.
  max-width: 70vw;
  width: 300px;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Edge, Opera and Firefox */
`;

interface Props {
  onToggleTheme: () => void;
  theme: Theme;
}

const Logo = ({ onToggleTheme, theme }: Props) => {
  return (
    <>
      <StyledWordmark fillColor={theme.mainThemeMedium} />
      <StyledButton
        aria-label="Change website theme colors"
        onClick={onToggleTheme}
      >
        <StyledLogo
          alt="Jerrypop logo"
          height={300}
          src={logo.src}
          width={300}
        />
      </StyledButton>
    </>
  );
};

export default Logo;
