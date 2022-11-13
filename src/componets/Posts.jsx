import axios from '../Axios';
import { useState, useEffect } from 'react';
import requests from '../Requests';
import { Card, CardContent, Typography, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: "auto"
  },
  card: {
    width: "500px",
    marginTop: "50px"
  },
  postWrappr: {
    marginTop: "30px",
    marginBottom: "50px"
  }
}))

const Posts = () => {
  const classes = useStyles()
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get(requests.getPosts)
      .then(resp => {
        setPosts(resp.data)
      })
      .catch(e => {
        console.log(e);
      })
  }, []);

  return (
    <div className={classes.postWrappr}>
      <Grid container>
        {posts.map((value, key) => {
          return (
            <Grid key={key} className={classes.grid} >
              <Card elevation={5} className={classes.card}>
                <CardContent>
                  <Typography variant="h3" component="h3">
                    {value.title}
                  </Typography>
                  <Typography variant="h5">
                    {value.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}

export default Posts;
