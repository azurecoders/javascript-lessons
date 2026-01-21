const todos = [
  {
    id: 1,
    text: "Learn ReactJS",
  },
  {
    id: 2,
    text: "Learn Nodejs",
  },
  {
    id: 3,
    text: "Learn Docker",
  },
];

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
  console.log(req.params); // {id: value}

  const { id } = req.params;
  const filteredTodo = todos.filter((todo) => todo.id == id);

  res.status(200).json({
    success: true,
    message: "Todo Fetched Successfully",
    data: filteredTodo,
  });
};

export const updateTodo = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  const filteredTodo = todos.filter((todo) => todo.id == id);

  filteredTodo[0].text = updatedData.text;

  res.status(200).json({
    success: true,
    message: "Todo updated succesfully",
    data: filteredTodo,
  });
};

export const deleteTodo = (req, res) => {
  const { id } = req.params;

  const filteredTodo = todos.filter((todo) => todo.id == id);

  if (filteredTodo.length == 0) {
    res.status(200).json({
      success: false,
      message: "The todo is not found",
    });
  }

  // 1 != 3 true -> id 1
  // 2 != 3 true -> id 2
  // 3 != 3 false -> ignore this
  // 4 != 3 true -> id 4

  const otherTodos = todos.filter((todo) => todo.id != id);

  res.status(200).json({
    success: true,
    message: "Todo Deleted Succesfully",
    data: otherTodos,
  });
};
