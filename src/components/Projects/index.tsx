import React from 'react'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

import { AiFillGithub } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'

import Button from '../Button'

import { ProjectContent, DescriptionProject, IconProject, ButtonContent, ImageProjectsContent } from './styles'

interface ProjectProps {
  name: string
  description: string
  FirstImg: string
  SecondImg?: string
  githubLink: string
  siteLink: string
}

const Projects = ({ name, description, FirstImg, SecondImg, githubLink, siteLink }: ProjectProps): JSX.Element => {
  return (
    <>
      <ProjectContent>
        <DescriptionProject>
          <h3>
            Projeto <span>{name}</span>
          </h3>
          <p>{description}.</p>

          <h4>Tecnologia Utilizada: </h4>
          <IconProject>
            <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
            <img src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png" />
            <img src="https://img.icons8.com/color/48/000000/typescript.png" />
            <img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" />
          </IconProject>
          <ButtonContent>
            <a href={githubLink} target="_blank" rel="noreferrer noopener">
              <Button id="Icon-content-buttons">
                <AiFillGithub />
                Github
              </Button>
            </a>
            <a href={siteLink} target="_blank" rel="noreferrer noopener">
              <Button id="Icon-content-buttons">
                <BiWorld />
                Site
              </Button>
            </a>
          </ButtonContent>
        </DescriptionProject>
        <ImageProjectsContent>
          <Swiper slidesPerView={1} navigation pagination={{ clickable: true }}>
            <SwiperSlide>
              <img src={`${FirstImg}`} alt="FirstImg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={`${SecondImg}`} alt="SecondImg" />
            </SwiperSlide>
          </Swiper>
        </ImageProjectsContent>
      </ProjectContent>
    </>
  )
}

export default Projects
