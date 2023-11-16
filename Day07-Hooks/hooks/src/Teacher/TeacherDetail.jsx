import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

function TeacherDetail(){
  const {teacherId} = useParams()
  const [teacherDetail, setTeacherDetail] = useState({})
  useEffect(() => {
    fetch(`https://6555882484b36e3a431de2ea.mockapi.io/teachers/${teacherId}`)
        .then((res)=> res.json())
        .then((data)=>{
          setTeacherDetail(data)
        })
  }, [teacherId]);
  return(
      <>
        <div className='mt-5 p-5'>
          <Card sx={{backgroundColor: 'background.paper'}}>
            <CardActionArea>
              <CardMedia component='img' height='400' image={teacherDetail.avatar} />
              <CardContent>
                <Typography gutterBottom variant='h5' >{teacherDetail.name}</Typography>
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