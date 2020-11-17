function todoController(Todo) {
    function getMethod(req, res) {
        const query = {};
        Todo.find(query, (errorFindingTodo, todo) => 
            errorFindingTodo ? res.send(errorFindingTodo) : res.send(todo)
        );
    }
    return {
        getMethod,
    }
}

module.exports = todoController;