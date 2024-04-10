'use client'

import styled from '@emotion/styled'

export const UserDiv = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`

export const UserDisplayName = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #f4f4f4;
`;

export const ButtonSignIn = styled.button`
  background-color: transparent;
  border: none;
  outline: transparent;

  font-size: 22px;
  color: #f4f4f4;

  transition: 150ms;

  &:hover,
  &:focus {
    transform: scale(1.04);
  }

  cursor: pointer;
`

export const ButtonSignOut = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  background-color: transparent;
  border: none;
  outline: transparent;

  transition: 150ms;

  &:hover,
  &:focus {
    transform: scale(1.04);
  }

  cursor: pointer;
`;

export const ButtonText = styled.p`
  font-size: 18px;
  color: #f4f4f4;
`