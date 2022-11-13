import axios from "../Axios"
import { useState } from "react"
import requests from "../Requests"
import { useNavigate } from "react-router-dom"
import { Button, TextField, Grid, Box } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';

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
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        item xs={8}
        style={{
          marginTop: "10px",
          backgroundColor: "#e4e4e4",
          paddingTop: "10px",
          paddingBottom: "10px",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <Grid item xs={8}>
          <TextField
            fullWidth
            id="standard-basic"
            label="タイトル"
            variant="standard"
            name="title"
            onChange={(event) => { setTitle(event.target.value) }}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            id="standard-basic"
            label="内容"
            variant="standard"
            name="content"
            onChange={(event) => { setContent(event.target.value) }}
          />
        </Grid>
        <Grid container item xs={8} justifyContent="flex-end">
          <Box style={{ marginTop: "10px" }}>
            <Button
              onClick={sendFormData}
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default CreatePost;
