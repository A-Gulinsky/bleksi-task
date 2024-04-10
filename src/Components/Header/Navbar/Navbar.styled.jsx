'use client'
import styled from '@emotion/styled'
import Link from 'next/link';

export const Ul = styled.ul`
  width: 400px;

  display: flex;
  justify-content: space-evenly;
`

export const A = styled(Link)`
  display: inline-block;

  font-size: 22px;
  color: #f4f4f4;

  transition: 150ms;

  &:hover,
  &:focus {
    transform: scale(1.04);
  }
`;