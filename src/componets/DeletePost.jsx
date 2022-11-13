import axios from "../Axios"
import requests from "../Requests"

const DeletePost = (id) => {
  axios.delete(`${requests.basePostsPath}/${id}`)
    .then(resp => {
      if (resp.status == 200) {
        console.log("削除に成功しました");
        window.location.reload();
      } else {
        console.log("削除に失敗しました");
      }
    })
    .catch(e => {
      console.log(e);
    })
}

export default DeletePost;

