import './styles/index.scss'
import React, { FunctionComponent, ReactElement } from 'react'
import Particles from 'react-tsparticles'
import logo from './logo.svg'
import { Link } from 'react-router-dom'

export type Props = {
  readonly children: ReactElement | ReactElement[]
}

const particleOptions = {
  background: {
    color: '#fff',
  },
  detectRetina: true,
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'window',
    events: {
      onHover: {
        mode: 'trail',
        enable: true,
      },
    },
    modes: {
      trail: {
        delay: 0.005,
        quantity: 1,
        particles: {
          color: {
            value: '#0669F9',
            animation: {
              enable: true,
              speed: 100,
              sync: true,
            },
          },
          collisions: {
            enable: false,
          },
          links: {
            enable: false,
          },
          move: {
            outMode: 'destroy',
            speed: 5,
          },
          size: {
            value: 5,
            animation: {
              enable: true,
              speed: 5,
              minimumValue: 1,
              sync: true,
              startValue: 'min',
              destroy: 'max',
            },
          },
        },
      },
    },
    resize: true,
  },
  particles: {
    color: {
      animation: {
        enable: true,
        sync: false,
        speed: 20,
      },
      value: '#0669F999',
    },
    links: {
      color: 'random',
      enable: true,
    },
    collisions: {
      enable: true,
    },
    move: {
      enable: true,
    },
    number: {
      density: {
        enable: true,
      },
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.3,
        speed: 0.5,
      },
      value: 0.8,
      random: {
        enable: true,
        minimumValue: 0.3,
      },
    },
    size: {
      animation: {
        enable: true,
        minimumValue: 1,
        speed: 3,
      },
      value: 3,
      random: {
        enable: true,
        minimumValue: 1,
      },
    },
  },
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Particles
        id="container"
        className="particles"
        canvasClassName="container"
        options={particleOptions}
      />
      <div className="content-container">
        <header className="header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </header>
        <main className="card">{children}</main>
      </div>
    </>
  )
}

export default Layout
