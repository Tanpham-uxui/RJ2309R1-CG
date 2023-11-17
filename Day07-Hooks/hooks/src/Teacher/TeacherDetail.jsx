import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Button, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";

function TeacherDetail() {
  const {teacherId} = useParams()
  const [teacherDetail, setTeacherDetail] = useState({})
  useEffect(() => {
    fetch(`https://6555882484b36e3a431de2ea.mockapi.io/teachers/${teacherId}`)
        .then((res) => res.json())
        .then((data) => {
          setTeacherDetail(data)
        })
  }, [teacherId]);
  return (
      <>
        <Tooltip title={'Back to Teacher List'} placement="bottom">
          <Button component={Link} to={'/teachers'} size='medium'
                  sx={{zIndex: 3, marginTop: '20px', paddingY: 2, boxShadow: 10, borderRadius: 5}}>
            <ArrowBack/>
          </Button>
        </Tooltip>
        <div className='p-5'>
          <Card sx={{backgroundColor: 'background.paper'}}>
            <CardActionArea>
              <CardMedia component='img' height='400' image={teacherDetail.avatar}/>
              <CardContent>
                <Typography gutterBottom variant='h5'>{teacherDetail.name}</Typography>
                <Typography gutterBottom variant='h6' className={'d-flex align-items-center'}>
                  Email:&nbsp; <p className={'fs-6 mb-0'}>{teacherDetail.name}</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

      </>

  )
}

export default TeacherDetail