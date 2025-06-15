import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { postBlog } from "../../services";
import { useNavigate } from "react-router";

const blogFields = [
  { name: "Title", id: "title", type: "input", inputType: "text" },
  { name: "Summary", id: "summary", type: "textarea" },
  { name: "Author", id: "author", type: "input", inputType: "text" },
  { name: "Created At", id: "created_at", type: "input", inputType: "date" },
  {
    name: "Featured",
    id: "featured",
    type: "radio",
    options: ["true", "false"],
  },
  { name: "Body", id: "body", type: "textarea" },
  { name: "Tags", id: "tags", type: "input", inputType: "text" },
];

export default function CreateBlog() {
  const { logout } = useContext(AuthContext);
  const [blogData, setBlogData] = useState({});
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem("token");
    logout();
  };

  const handleBlogFormSubmit = async (e) => {
    e.preventDefault();
   await postBlog(blogData);
   navigate('/user-blog');
  };

  return (
    <div>
      <button
        className="cursor-pointer px-2 py-1 bg-gray-200 rounded-lg"
        type="button"
        onClick={logoutHandler}
      >
        Logout
      </button>
      <h2 className="text-2xl font-semibold">Add new blog</h2>

      <form
        onSubmit={handleBlogFormSubmit}
        className="flex flex-col md:w-1/2 w-full mx-auto"
      >
        {blogFields.map((field) => (
          <div className="flex flex-col gap-1 mb-4" key={field.id}>
            <label htmlFor={field.id}>{field.name}</label>

            {field.type === "input" && (
              <input
                type={field.inputType}
                id={field.id}
                name={field.id}
                value={blogData[field.id] }
                onChange={(e) =>
                  setBlogData((prev) => ({
                    ...prev,
                    [field.id]: e.target.value,
                  }))
                }
                className="border border-gray-400 h-8 rounded-lg p-2"
              />
            )}

            {field.type === "textarea" && (
              <textarea
                id={field.id}
                name={field.id}
                value={blogData[field.id] }
                onChange={(e) =>
                  setBlogData((prev) => ({
                    ...prev,
                    [field.id]: e.target.value,
                  }))
                }
                className="border border-gray-400 rounded-lg p-2"
              />
            )}

            {field.type === "radio" && (
              <div className="flex gap-4">
                {field.options.map((option) => (
                  <label  className="capitalize" key={option} >
                    <input
                      type="radio"
                      name={field.id}
                      value={option}
                      checked={blogData[field.id] === option}
                      onChange={(e) =>
                        setBlogData((prev) => ({
                          ...prev,
                          [field.id]: e.target.value,
                        }))
                      }
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}

        <button
          type="submit"
          className=" w-30  mx-auto mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
}
