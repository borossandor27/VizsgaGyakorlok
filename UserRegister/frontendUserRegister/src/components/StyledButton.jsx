import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => (props.variant === 'update' ? '#4CAF50' : '#F44336')};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.variant === 'update' ? '#45a049' : '#e53935')};
  }
`;

export default StyledButton;