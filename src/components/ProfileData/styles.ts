import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
} from "react-icons/ri";

import styled, { css } from "styled-components";

const iconCSS = css`
  width: 1rem;
  height: 1rem;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const Container = styled.div``;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 24px;

    > h1 {
      font-size: 1.6rem;
      line-height: 1.25;
      color: var(--gray-dark);
      font-weight: 600;
    }

    > h2 {
      font-size: 1rem;
      color: var(--username);
      font-weight: 300;
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;

export const Avatar = styled.img`
  width: 16%;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 80%;
    margin-top: -34px;
  }
`;

export const Row = styled.ul`
  display: flex;
  align-items: center;
  margin: 20px 0;
  flex-wrap: wrap;

  > li {
    display: flex;
    align-items: center;

    > span {
      font-size: 0.9rem;
      color: var(--gray);
    }

    > * {
      margin-right: 5px;
    }
  }
`;

export const PeopleIcon = styled(RiGroupLine)`
  ${iconCSS}
`;

export const Column = styled.ul`
  li {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
  }

  li + li {
    margin-top: 10px;
  }

  span {
    margin-left: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const CompanyIcon = styled(RiBuilding4Line)`
  ${iconCSS}
`;

export const LocationIcon = styled(RiMapPin2Line)`
  ${iconCSS}
`;

export const EmailIcon = styled(RiMailLine)`
  ${iconCSS}
`;

export const BlogIcon = styled(RiLinksLine)`
  ${iconCSS}
`;
