import React from 'react';
import styled from 'styled-components';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: yellow;
`;

function TodoList(props) {
  return <TodoListBlock></TodoListBlock>;
}

export default TodoList;
