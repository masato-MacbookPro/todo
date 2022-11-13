import axios from "../Axios"
import { useState } from "react"
import requests from "../Requests"
import { useNavigate } from "react-router-dom"

const CreatePost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const createFormData = () => {
    const formData = new FormData()
    formData.append('[title]', title)
    formData.append('[content]', content)
    return formData
  }

  const sendFormData = () => {
    const data = createFormData()
    const navigatePath = '/posts'
    axios.post(requests.postPosts, data)
      .then(resp => {
        if (resp.status == 200) {
          notify("作成に成功しました")
          navigate(navigatePath)
          window.location.reload();
        } else {
          notify("作成に失敗しました")
        }
      })
      .catch(e => {
        console.log(e);
      })
  }

  const notify = (message) => {
    console.log(message);
  }

  return (
    <div>
      <p>タイトル</p>
      <input
        type="text"
        name="title"
        onChange={(event) => { setTitle(event.target.value) }}
      />
      <p>内容</p>
      <input
        type="text"
        name="content"
        onChange={(event) => { setContent(event.target.value) }}
      />
      <button onClick={sendFormData}>Create</button>
    </div>
  )
}

export default CreatePost;
