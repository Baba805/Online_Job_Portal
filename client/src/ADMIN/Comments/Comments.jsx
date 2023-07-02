import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { getComment } from '../../Api/request';
import CommentStyle from './Comments.module.css'

function Comments() {
  const navigate = useNavigate();
  const [comment, setComment] = useState([])


  useEffect(() => {
    if (!localStorage.getItem('admin')) {
      navigate('/admin/login');
    }
  }, [])
  useEffect(() => {
    getComment().then((res) => {
      console.log("salam");
      setComment(res)
    })
  }, [])

    // SLIDER
    const proprietes = {
      duration: 10500,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true
    }
    const images = [
      `${comment.imageUrl}`
    ];
  return (
    <section className={CommentStyle.comments} >

    <div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
      <h3 className={CommentStyle.third_h3} >Happy Candidates</h3>
      <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" style={{ opacity: '0.3' }} alt="" />
    </div>




    <div className="containerSlide">

      <Slide {...proprietes}>
        {comment && comment.map((comments) => {
          return (
            <>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: '300px',
                  marginRight: '300px'
                }} >
                <img src="http://sbtechnosoft.com/guidepro/images/quote.png" alt="" />
                <div className="each-slide-1">
                  <div className='slide-1-text'>

                    <p className={CommentStyle.slider_p} > {comments.title} </p>

                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column'
                    }} className='slide-1-img'>
                    <img className={CommentStyle.slider_img} src={comments.imageUrl} alt="img0" />
                    <h1 className={CommentStyle.slider_h1} > {comments.name} </h1>
                    <p className={CommentStyle.slider_p} >  {comments.posession} </p>
                  </div>
                </div >
                <img src="http://sbtechnosoft.com/guidepro/images/quote.png" alt="" />
              </div>
            </>
          )
        })}
      </Slide >

    </div >
  </section>
  )
}

export default Comments