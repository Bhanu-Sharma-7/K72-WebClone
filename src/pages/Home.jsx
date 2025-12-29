import HomeBottomTaxt from '../components/home/HomeBottomTaxt'
import HomeHeadText from '../components/home/HomeHeadText'
import Video from '../components/home/Video'

const Home = () => {
  return (
    <>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col text-white justify-between'>
        <HomeHeadText />
        <HomeBottomTaxt />
      </div>
    </>
  )
}

export default Home
