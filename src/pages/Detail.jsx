import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTodo } from "../redux/modules/todos";

const StDetailDiv = styled.div``;

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const targetTodo = todos.filter((todo) => todo.id === params.id)[0];
  console.log(params.id);
  console.log(targetTodo);

  const backBtnHndlr = () => {
    navigate(`/`);
  };

  const deleteBtnHndlr = () => {
    dispatch(deleteTodo(targetTodo.id));
    navigate(`/`);
  };

  return (
    <>
      <button onClick={backBtnHndlr}>이전 화면으로</button>
      <StDetailDiv>
        <h1>{targetTodo.title}</h1>
        <p>{targetTodo.contents}</p>
        <p>완료 여부 : {targetTodo.isDone ? "완료" : "미완료"}</p>
        <button onClick={deleteBtnHndlr}>삭제</button>
      </StDetailDiv>
    </>
  );
};

export default Detail;
