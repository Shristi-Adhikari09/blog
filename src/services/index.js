
 
  export const retrieveBlog = async (blogSlug) => {
    try{
        const res = await fetch(`http://localhost:3000/blog/${blogSlug}`)
        const data = await res.json()
         if (res.ok) {
           return data;
        }else{
            throw new Error(data.message)
        }
    } catch (err) {
        console.log("Error retrieving blogs............", err)
        throw  new Error(err);
    }
 }
 
  export const loginUser = async (body) => {
    try {
        const res = await fetch("http://localhost:3000/login", {
        body : JSON.stringify(body),
        method: "POST",
        headers:{"Content-Type": "application/json"}
    })
        const data = await res.json();

        if (res.ok) {
            return data;
        } else {
            throw new Error(data.message);
        }

    } catch (err) {
        throw new Error(err);  // safer error
    }
}

export const postBlog = async (body) => {
  try {
      const res = await fetch("http://localhost:3000/blog", {
      body : JSON.stringify(body),
      method: "POST",
      headers:{"Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('token')}` }
  })
      const data = await res.json();

      if (res.ok) {
          return data;
      } else {
          throw new Error(data.message);
      }

  } catch (err) {
      throw new Error(err);  // safer error
  }
}
export const patchBlog = async (blogSlug,body) => {
  try {
      const res = await fetch(`http://localhost:3000/blog/${blogSlug}`, {
      body : JSON.stringify(body),
      method: "PUT",
      headers:{"Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('token')}` }
  })
      const data = await res.json();

      if (res.ok) {
          return data;
      } else {
          throw new Error(data.message);
      }

  } catch (err) {
      throw new Error(err);  // safer error
  }
}



 