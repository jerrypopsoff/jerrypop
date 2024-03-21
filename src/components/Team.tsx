import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import AboutJerryPhotograph from '../images/about-jerry.jpeg';
import AboutJerryPhotographWebp from '../images/about-jerry.webp';
import OptimizedImage from './OptimizedImage';
import { YOU_TUBE_CHANNEL_URL } from '../constants/url';

const PHOTOGRAPH_MAX_HEIGHT_PX = 400;
const PHOTOGRAPH_MAX_WIDTH_PX = 300;
const HORIZONTAL_MARGIN = 24;
const PAGE_BREAKPOINT_PX = PHOTOGRAPH_MAX_WIDTH_PX + 2 * HORIZONTAL_MARGIN;

const StyledTeamMemberList = styled.ul`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledTeamMemberListItem = styled.li`
  margin: 24px 0 0;
`;

const StyledTeamMemberPhotograph = styled(OptimizedImage)`
  height: ${PHOTOGRAPH_MAX_HEIGHT_PX}px;
  width: ${PHOTOGRAPH_MAX_WIDTH_PX}px;

  @media (max-width: ${PAGE_BREAKPOINT_PX}px) {
    height: unset;
    width: calc(100vw - 2 * ${HORIZONTAL_MARGIN}px);
  }
`;

const StyledTeamMemberName = styled(Typography)`
  font-size: 22px;
  margin: 12px 0 0;
  text-transform: uppercase;
`;

const StyledTeamMemberTitle = styled(Typography)`
  font-size: 13px;
  font-weight: 300;
  margin: 8px 0;
  text-transform: uppercase;
`;

const Team: React.FC = () => {
  return (
    <StyledTeamMemberList>
      <StyledTeamMemberListItem>
        <StyledTeamMemberPhotograph
          alt="Photograph of Jerry Haagsma, Jerrypop Founder"
          fallbackSrc={AboutJerryPhotograph}
          fallbackSrcSet={`${AboutJerryPhotograph} 600w`}
          sizes={`${PHOTOGRAPH_MAX_WIDTH_PX}px (min-width: ${PAGE_BREAKPOINT_PX}px), 95vw`}
          srcSet={`${AboutJerryPhotographWebp} 600w`}
        />
        <StyledTeamMemberName type="h2">Jerry Haagsma</StyledTeamMemberName>
        <StyledTeamMemberTitle type="h3">Founder</StyledTeamMemberTitle>
        <Typography maxWidth="600px" type="p">
          In 2013 my interest in popcorn was sparked when my college roommate’s
          parents bought us ten pounds of kernels, and we challenged ourselves
          to use the entire supply before finals. After experimenting with
          flavors I discovered popcorn was a healthier alternative to junk food,
          and I continued inventing new varieties on my journey to losing 130
          pounds.
        </Typography>
        <Typography maxWidth="600px" type="p">
          In 2015 I earned the nickname <i>Jerrypop</i> among friends for
          showing up to every gathering with a bold new flavor of handcrafted
          popcorn, such as PB&J or Habanero Ranch.
        </Typography>
        <Typography maxWidth="600px" type="p">
          After moving to San Francisco in 2017, I continued to hone my craft,
          eventually turning to{' '}
          <a href={YOU_TUBE_CHANNEL_URL} rel="noreferrer" target="_blank">
            video production
          </a>{' '}
          during the pandemic to share my popcorn techniques and learnings. In
          April 2022 I{' '}
          <a
            href="https://www.washingtonpost.com/technology/2023/02/27/tech-workers-layoffs-quit/"
            rel="noreferrer"
            target="_blank"
          >
            quit my job
          </a>{' '}
          to pursue my dream of starting a business dedicated to producing the
          most satisfying popcorn in the world.
        </Typography>
        <Typography maxWidth="600px" type="p">
          I handle numerous functions including recipe development, ingredient
          sourcing, manufacturing, distribution, marketing, sales, web design,
          and more. Through Jerrypop I’ve had the opportunity to share my love
          of popcorn with others and bring delight to people’s lives. It’s been
          an incredible journey, and I could not have done it without the
          support of my friends and customers.
        </Typography>
      </StyledTeamMemberListItem>
    </StyledTeamMemberList>
  );
};

export default Team;
