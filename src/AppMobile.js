import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FoldersListMobile from './components/mobileVersion/foldersListMobile'
import { Swiper, SwiperSlide } from 'swiper/react'
import NotesListMobile from './components/mobileVersion/notesListMobile'
import NotesContentMobile from './components/mobileVersion/notesContentMobile'
import 'swiper/swiper-bundle.css'

const useStyles = makeStyles(() => ({
  root: {
    margin: 0,
    padding: 0,
    background: '#eeeeee',
    '@media (max-width: 768px)': { // eslint-disable-line no-useless-computed-key
      minWidth: '320px',
      minHeight: '520px'
    }
  }
}))

const AppMobile = () => {
  const classes = useStyles()

  return (
    <Swiper
      className={classes.root}
      spaceBetween={10}
      slidesPerView={1}
    >
      <SwiperSlide>
        <FoldersListMobile/>
      </SwiperSlide>
      <SwiperSlide>
        <NotesListMobile/>
      </SwiperSlide>
      <SwiperSlide>
        <NotesContentMobile/>
      </SwiperSlide>
    </Swiper>
  )
}

export default AppMobile
