const todos = [];

export const fetchAllTodos = (req, res) => {
  if (todos.length == 0) {
    res.status(200).json({
      success: false,
      message: "There are no todos",
    });
  }

  res.status(200).json({
    success: true,
    message: "Todos fetched successfully",
    data: todos,
  });
};

export const createTodo = (req, res) => {
  const todoData = req.body;

  todos.push(todoData);

  res.status(201).json({
    success: true,
    message: "New Todo has been Created",
    data: todoData,
  });
};

export const fetchSingleTodo = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const filteredTodo = todos.filter((todo) => todo.id !== id);

  res.status(200).json({
    success: true,
    message: "Todo Fetched Successfully",
    data: filteredTodo,
  });
};
