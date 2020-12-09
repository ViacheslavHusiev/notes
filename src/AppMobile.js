import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import HeaderFolderListMobile
  from './components/mobileVersionHeaders/HeaderFolderListMobile'
import FoldersSection from './folders/FoldersSection'
import InputSectionFolder from './folders/InputSectionFolder'
import HeaderNotesListMobile
  from './components/mobileVersionHeaders/HeaderNotesListMobile'
import NotesSection from './notes/NotesSection'
import HeaderNotesContentMobile
  from './components/mobileVersionHeaders/HeaderNotesContentMobile'
import Content from './NoteContent/Content'

const useStyles = makeStyles(() => ({
  root: {
    minWidth: '320px',
    minHeight: '520px'
  },
  sectionOnMobile: {
    backgroundColor: '#f5f5f5',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    flex: '1 0 auto'
  },
  folderSection: {
    overflow: 'auto',
    flex: '1 0 auto'
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
        <div className={classes.sectionOnMobile}>
          <div className={classes.folderSection}>
            <HeaderFolderListMobile/>
            <FoldersSection/>
          </div>
          <InputSectionFolder/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={classes.sectionOnMobile}>
          <HeaderNotesListMobile/>
          <NotesSection/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={classes.sectionOnMobile}>
          <HeaderNotesContentMobile/>
          <Content/>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default AppMobile
