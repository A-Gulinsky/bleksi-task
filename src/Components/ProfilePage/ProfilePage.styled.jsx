import styled from '@emotion/styled'

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  padding-top: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Li = styled.li`
  font-size: 22px;
  font-weight: 600;
  color: #fee8e8;
`

export const ErrorText = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: #f4f4f4;
`