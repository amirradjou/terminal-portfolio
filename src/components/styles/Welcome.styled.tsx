import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  /* The terminal is anchored to the bottom (column-reverse wrapper), so the
     text block goes last: it always sits right above the prompt, and only
     the decorative art can scroll out of view on short viewports. */
  flex-wrap: wrap-reverse;

  @media (max-width: 932px) {
    margin-bottom: 1.5rem;
  }

  > div {
    @media (min-width: 1024px) {
      flex-basis: 50%;
    }
  }

  .info-section {
    margin-top: 0.5rem;
  }
`;

export const HeroName = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors?.primary};
`;

export const HeroHeadline = styled.p`
  font-weight: 700;
  line-height: 1.5rem;
`;

export const HeroTagline = styled.p`
  line-height: 1.5rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors?.text[200]};
`;

export const HeroLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  margin-bottom: 0.25rem;
`;

export const PreImg = styled.pre`
  /* The art is 133 monospace columns (~0.6em each) by 32 lines. Scale it so
     it fits the viewport width (it used to be clipped at the right edge on
     laptops) and leaves room for the text block and prompt below it. */
  font-size: clamp(
    0.5rem,
    min((100vw - 4rem) / 80, (100vh - 20rem) / 37),
    1rem
  );

  @media (max-width: 550px) {
    display: none;
  }
`;

export const Seperator = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const Cmd = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors?.secondary};
  text-decoration: none;
  line-height: 1.5rem;
  white-space: nowrap;
  border-bottom: 2px dashed ${({ theme }) => theme.colors?.secondary};

  &:hover {
    border-bottom-style: solid;
  }
`;
