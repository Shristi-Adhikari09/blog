const express = require("express");


const app =express()

app.get("/ping", (req,res) => res.status(200).json({ "message": "  hi hello" }))


//Add blog
app.get("/blog", (req,res) => {
    const body = req.body;
     res.status(200).json({"message": "Blog added succesfully."})})

// Get all blogs
app.get("/blogs", (req, res) => {
   return res.status(200).json({ result: [] });
});

// Retrieve single blog
app.get("/blogs/:blogId", (req, res) => {
   const { blogId } = req.params;
   return res.status(200).json({ result: {} });
});

// Delete blog
app.delete("/blogs/:blogId", (req, res) => {
   const { blogId } = req.params;
   return res.status(200).json({ message: "Blog deleted successfully." });
});

// Update blog
app.put("/blogs/:blogId", (req, res) => {
   const { blogId } = req.params;
   return res.status(200).json({ message: "Blog updated successfully." });
});
app.listen(3000, () => {
    console.log("Listening to Port:3000")
})
