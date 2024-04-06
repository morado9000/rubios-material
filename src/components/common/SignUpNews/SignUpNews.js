import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const SignUpNews = () => {

    const signUpStyles = {
        wrapper: {
            paddingTop: "50px",
            backgroundColor: "#f6f3ec"
        },
        innerBox: {
            display: "flex",
            flexDirection: "column",
        },
        innerBoxTwo: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        } 
    }


    return (
        <Box sx={signUpStyles.wrapper}>
            <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                <Grid item xs={3}>
                    <Box sx={signUpStyles.innerBox}>
                        <Typography variant='bold' component='div' sx={{fontSize:"48px"}}>
                            Stay Current
                        </Typography>
                        <Typography variant='p' component='div'>
                            You're craving even more, we get it. Sign up today for the latest Rubio's news, menu items, special offers and more.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={signUpStyles.innerBoxTwo}>
                            <input type="text" placeholder="Enter Your Email" style={{padding: "23px 150px 23px 23px", marginRight: "10px"}} />
                            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABFCAIAAADYR2+TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZWIzZDM3Yy0wMDBiLTQ5ZDctOTVhYy03MzkzZWI1MGRlMWEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjFGMkUzRkE3MzkyMTFFREI2QjdGNUU0QUNBRTcyRUQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjFGMkUzRjk3MzkyMTFFREI2QjdGNUU0QUNBRTcyRUQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkZDlkYjY0Yy1mYTZjLTQ5ODEtOTQ5Mi02NWFmZGViNGJmNmEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YWViM2QzN2MtMDAwYi00OWQ3LTk1YWMtNzM5M2ViNTBkZTFh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' />
                        </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SignUpNews