import styled from "styled-components";

export const ExpIntro = styled.div`
  margin-bottom: 0.75rem;
`;

export const ExpItem = styled.div`
  margin-bottom: 1rem;
  max-width: 720px;

  .title {
    font-weight: 700;
    margin-bottom: 0.275rem;
  }

  .meta {
    color: ${({ theme }) => theme.colors?.text[200]};
    margin-bottom: 0.375rem;
  }

  ul {
    margin: 0;
    padding-left: 1.25rem;
    color: ${({ theme }) => theme.colors?.text[200]};
    line-height: 1.5rem;
  }

  li {
    margin-bottom: 0.25rem;
  }
`;
