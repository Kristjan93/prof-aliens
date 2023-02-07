import { transform } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
const i = 0
interface IBoxPoprs {
  style?: React.CSSProperties
}
const Box = ({ style }: IBoxPoprs) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt=""
      src="_LR-logo_01.png"
      style={{
        transformOrigin: '50% 50%',
        height: 100,
        width: 100,
        position: 'absolute',
        ...style,
      }}
    ></img>
  )
}

const Home: NextPage = () => {
  const [boxes, setBoxes] = useState<JSX.Element[]>([])

  useEffect(() => {
    const t = setInterval(() => {
      setBoxes((state) => state.slice(1, state.length))
    }, 33)

    return () => {
      clearInterval(t)
    }
  }, [])

  const canvasRef = useRef<HTMLDivElement>(null)
  useIsomorphicLayoutEffect(() => {
    if (!canvasRef.current) {
      return
    }
    const canvas = canvasRef.current

    let mouseCanvas = {
      x: 0,
      y: 0,
      distance: 0,
      previousX: 0,
      previousY: 0,
      cumDistance: 0,
    }
    const mousemove = (event: MouseEvent) => {
      mouseCanvas = {
        ...mouseCanvas,
        x: event.clientX - canvas.offsetLeft,
        y: event.clientY - canvas.offsetTop,
      }

      mouseCanvas = {
        ...mouseCanvas,
        distance: Math.sqrt(
          (mouseCanvas.x - mouseCanvas.previousX) ** 2 +
            (mouseCanvas.y - mouseCanvas.previousY) ** 2,
        ),
      }
      mouseCanvas = {
        ...mouseCanvas,
        cumDistance: mouseCanvas.cumDistance + mouseCanvas.distance,
      }
    }
    canvas.addEventListener('mousemove', mousemove)

    let animationFrame: number | undefined
    const gameLoop = () => {
      const rotate = transform(mouseCanvas.cumDistance, [0, 2000], [0, 360], {
        clamp: false,
      })
      const grow = transform(
        mouseCanvas.cumDistance,
        [0.4, 2000, 4000, 5000, 8000, 12000],
        [0.4, 1.6, 0.3, 0.7, 1.4, 2],
        {
          clamp: false,
        },
      )
      console.log(rotate)
      animationFrame = requestAnimationFrame(() => {
        if (mouseCanvas.distance >= 10) {
          mouseCanvas = {
            ...mouseCanvas,
            previousX: mouseCanvas.x,
            previousY: mouseCanvas.y,
          }

          // eslint-disable-next-line react/jsx-key
          setBoxes((state) => [
            ...state,
            // eslint-disable-next-line react/jsx-key
            <Box
              style={{
                transform: `translate3d(${mouseCanvas.x - 50}px, ${
                  mouseCanvas.y - 50
                }px, 0) rotate(${rotate}deg) scale(${grow})`,
              }}
            />,
          ])
        }
        gameLoop()
      })
    }
    gameLoop()

    return () => {
      document.removeEventListener('mousemove', mousemove)
      animationFrame && cancelAnimationFrame(animationFrame)
    }
  }, [])
  useEffect
  return (
    <div>
      <Head>
        <title>Next Starter</title>
        <meta name="description" content="Next starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative h-screen w-full bg-black" ref={canvasRef}>
        {boxes}
      </div>
    </div>
  )
}

export default Home
