import {Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
import React, {useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import {useSetRecoilState} from "recoil";
import {ITodo, toDoState} from "../../../atoms/todo-atoms";
import DragabbleCard from "../draggableCard/DraggableCard";
import {Input} from "@chakra-ui/input";
import {Card, CardBody, CardHeader} from "@chakra-ui/card";


const Wrapper = styled.div`
  width: 300px;
  padding: 10px 0px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;


const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Form = styled.form`
  width: 100%;
  padding: 20px;
  input {
    width: 100%;
    background: none;
  }
`;



interface IAreaProps {
    isDraggingOver: boolean;
    isDraggingFromThis: boolean;
}

const Area = styled.div<IAreaProps>`
  background-color: ${(props) => props.isDraggingOver ? "#dfe6e9" : props.isDraggingFromThis ? "transparent" : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding:10px;
  border-radius: 10px;
`;

interface IForm {
    toDo: string;
}

interface IBoardProps {
    toDos: ITodo[];
    boardId: string;
}


const Board: React.FC<IBoardProps> = ({toDos, boardId})  => {

    useEffect(() => {

    }, [boardId])

    const setToDos = useSetRecoilState(toDoState);
    const { register, setValue, handleSubmit } = useForm<IForm>();
    const onValid = ({ toDo }: IForm) => {
        const newToDo = {
            id: Date.now(),
            text: toDo,
        };
        setToDos((allBoards) => {
            return {
                ...allBoards,
                [boardId]: [newToDo, ...allBoards[boardId]],
            };
        });
        setValue("toDo", "");
    };
    return (
        <Card size={"lg"}>
            <CardHeader>
                <Title>{boardId}</Title>
                <Form onSubmit={handleSubmit(onValid)}>
                    <Input
                        variant='filled'
                        {...register("toDo", { required: true })}
                        placeholder={`Add task on ${boardId}`} />
                </Form>
            </CardHeader>

            <CardBody>
                <Droppable droppableId={boardId}>
                    {(magic, info) => (
                        <Area
                            isDraggingOver={info.isDraggingOver}
                            isDraggingFromThis={Boolean(info.draggingFromThisWith)}
                            ref={magic.innerRef}
                            {...magic.droppableProps}>
                            {toDos.map((toDo, index) => (
                                <DragabbleCard
                                    key={toDo.id}
                                    index={index}
                                    toDoId={toDo.id}
                                    toDoText={toDo.text}
                                />
                            ))}
                            {magic.placeholder}
                        </Area>
                    )}
                </Droppable>
            </CardBody>

        </Card>
    );
}

export default Board;