import React, { useEffect, useState } from 'react'
import {  Card, Grid, Space } from 'antd';
import { getCv } from '../../../Api/request';
import Meta from 'antd/es/card/Meta';


function Employers_CV() {
  const [cv, setCv] = useState([]);
  useEffect(() => {
    getCv().then((res) => {
      console.log(res);
      setCv(res)
    })
  }, [])
  return (
    <>
      {cv && cv.map((data) => {
        return (
          <Space key={data._id} direction="vertical" size={16} >
   
  <Card
    hoverable
    style={{
      width: 240 , marginLeft : '50px', marginBottom : '50px ' 
    }}
    cover={<img alt="example" src= {data.file}  height={250} width={240} />}
  >
    <Meta title= {data.name}   />

    <p style={{fontSize : '16px', marginBottom : '3px'}} >Phone number : </p>
    <Meta  description= {data.phone} style={{marginBottom : '8px'}}  />
    <p style={{fontSize : '16px', marginBottom : '3px'}} > About me : </p>
    <Meta  description= {data.Introduction}   />
  </Card>

          </Space>
        )
      })}
 
    </>
  )
}

export default Employers_CV