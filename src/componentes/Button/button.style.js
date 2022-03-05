import styled from 'styled-components';
import { colors } from '../../config/colors';

export const ButtonStyled = styled.button`
  height: 40px;
  border-radius: 10px;
  background-color: ${colors.primary};
  color: ${colors.white};
  text-align: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '')};
`;
