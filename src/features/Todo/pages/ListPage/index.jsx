import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import queryString from 'query-string';
ListPage.propTypes = {

};





function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        }
        ,
        {
            id: 3,
            title: 'Code',
            status: 'new'
        }
    ]
    const history = useHistory();
    const match = useRouteMatch();
    const location = useLocation();
    const [todoList, setTodoList] = useState(initTodoList);

    const [filteredStatus, setFilteredStatus] = useState(()=>{
        const param = queryString.parse(location.search);
        // console.log(param);
        return param.status || 'all';
    });

    useEffect(()=>{
        const param = queryString.parse(location.search);
        setFilteredStatus(param.status || 'all');
    },[location.search])

    const handleTodoClick = (todo, idx) =>{
        //clone current array the new one
        const newTodoList = [...todoList];
        console.log(todo, idx);
        
        //toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status : newTodoList[idx].status === 'new' ? 'completed' : 'new'
        } 
        
        //update todo list 
        setTodoList(newTodoList)
        
    }   

        const handleShowAllClick = () =>{
            // setFilteredStatus('all');
            const queryParam = {status: 'all'};
            history.push({
                pathname: match.path,
                search:queryString.stringify(queryParam),
            })

        }
        const handleShowCompletedClick = () => {
            // setFilteredStatus('completed');
            const queryParam = {status: 'completed'};
            history.push({
                pathname: match.path,
                search:queryString.stringify(queryParam),
            })
        }
        const handleShowNewClick = () =>{
            // setFilteredStatus('new');
            const queryParam = {status: 'new'};
            history.push({
                pathname: match.path,
                search:queryString.stringify(queryParam),
            })
        }
        const renderTodoList = useMemo(()=>{
            return todoList.filter(todo=> filteredStatus === 'all' || filteredStatus === todo.status)
        },[todoList, filteredStatus])
        console.log(renderTodoList);
    return (
        <div>
            <h3> Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick}/>
            <div>
                <button onClick={handleShowAllClick}> Show All</button>
                <button onClick={handleShowCompletedClick}> Show Completed</button>
                <button onClick={handleShowNewClick}> Show New</button>
            </div>
        </div>

    );
}

export default ListPage;