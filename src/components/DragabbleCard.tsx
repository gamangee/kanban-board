import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoState } from '../atoms';

interface IDragabbleCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
  boardId: string;
}

function DragabbleCard({
  toDoId,
  toDoText,
  index,
  boardId,
}: IDragabbleCardProps) {
  const setToDos = useSetRecoilState(toDoState);

  const handleDelete = () => {
    setToDos((oldToDo) => {
      const copyTodo = [...oldToDo[boardId]];
      const filterTodo = copyTodo.filter((todo) => todo.id !== toDoId);
      return {
        ...oldToDo,
        [boardId]: filterTodo,
      };
    });
  };

  return (
    <Draggable draggableId={toDoId + ''} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDoText}
          <button onClick={handleDelete}>delete</button>
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) =>
    props.isDragging ? '#e4f2ff' : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? '0px 2px 5px rgba(0, 0, 0, 0.05)' : 'none'};
`;
