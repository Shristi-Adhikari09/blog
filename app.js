const express = require("express")
const cors =require('cors')
const app =express()
const blogsDb =require("./block.json")

app.use(cors())

app.get("/ping", (req,res) => res.status(200).json({ "message": "hello" }))

// Add blog
app.post('/blog', (req,res) => {
    const body = req.body
    return res.status(201).json({ message: "Blog added succesfully." })
})

// Get all blogs
app.get("/blog", (req, res) => {
   return res.status(200).json({ result: blogsDb.blogs})
})

// Retrieve single blog
app.get("/blog/:blogSlug", (req, res) => {
   const { blogSlug } = req.params;
   const matchedBlog = blogsDb.blogs.find((blogx) => blogx.slug === blogSlug)

   if (!matchedBlog) {
      return res.status(400).json({ message: "Blogs doesnot exist" })
   }
      
    return res.status(200).json({ result: matchedBlog })
})

// Delete blog
app.delete("/blogs/:blogId", (req, res) => {
   const { blogId } = req.params;
   return res.status(200).json({ message: "Blog deleted successfully." })
})

// Update blog
app.put("/blogs/:blogId", (req, res) => {
   const { blogId } = req.params;
   return res.status(200).json({ message: "Blog updated successfully." })
})

app.listen(3000, () => {
    console.log("Listening to Port:3000")
})
