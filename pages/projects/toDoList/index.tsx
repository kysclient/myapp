import {DragDropContext, DropResult} from "react-beautiful-dnd";
import {useRecoilState} from "recoil";
import {toDoState} from "../../../src/atoms/todo-atoms";
import styled from "styled-components";
import {Default} from "../../../src/components/layouts/Default";
import {NextPage} from "next";
import exp from "constants";
import Board from "../../../src/components/templates/board/Board";

const Wrapper = styled.div`
  display: flex;
  //width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;



const ToDoList: NextPage = () => {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDragEnd = (info: DropResult) => {
        const { destination, draggableId, source } = info;
        if(!destination) return;
        if (destination?.droppableId === source.droppableId) {
            setToDos((allBoards) => {
                const boardCopy = [...allBoards[source.droppableId]];
                const taskObj = boardCopy[source.index];
                boardCopy.splice(source.index, 1);
                boardCopy.splice(destination?.index, 0, taskObj);
                return {
                    ...allBoards,
                    [source.droppableId]: boardCopy,
                };
            });
        }
        if (destination.droppableId !== source.droppableId) {
            setToDos((allBoards) => {
                const sourceBoard = [...allBoards[source.droppableId]];
                const taskObj = sourceBoard[source.index];
                const destinationBoard = [...allBoards[destination.droppableId]];
                sourceBoard.splice(source.index, 1);
                destinationBoard.splice(destination?.index, 0, taskObj);
                return {
                    ...allBoards,
                    [source.droppableId]: sourceBoard,
                    [destination.droppableId]: destinationBoard,
                };
            });
        }
    };
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Default pageName={"ToDo List"}>
            <Wrapper>
                <Boards>
                    {Object.keys(toDos).map((boardId) => (
                        <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
                    ))}
                </Boards>
            </Wrapper>
            </Default>

        </DragDropContext>
    )
}

export default ToDoList