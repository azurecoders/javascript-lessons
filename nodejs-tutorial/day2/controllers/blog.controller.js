import Blog from "../models/Blog.model.js";

export const createBlog = async (req, res) => {
  const data = req.body;

  const blog = await Blog.create({
    title: data.title,
    description: data.description,
    user: data.user,
  });

  res.status(201).json({
    success: true,
    message: "New Blog Created",
    data: blog,
  });
};

export const fetchAllBlogs = async (req, res) => {
  const blogs = await Blog.find();

  res.status(200).json({
    success: true,
    message: "All blogs fetched successfully",
    data: blogs,
  });
};

export const fetchSingleBlog = async (req, res) => {
  const { id } = req.params;

  const blog = await Blog.findById(id).populate("user");

  res.status(200).json({
    success: true,
    message: "Blog Fetched Successfully",
    data: blog,
  });
};

export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const blog = await Blog.findByIdAndUpdate(
    id,
    {
      $set: {
        title: data.title,
        description: data.description,
      },
    },
    { new: true },
  );

  res.status(200).json({
    success: true,
    message: "Blog Updated Successfully",
    data: blog,
  });
};

export const deleteBlog = async (req, res) => {
  const { id } = req.params;

  const blog = await Blog.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    message: "Blog Deleted Successfully",
    data: blog,
  });
};
