
const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='relative w-full max-w-[800px] h-[100px] overflow-hidden'>
        <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-white via-white to-transparent animatecontainer'></div>
        <h1 className='relative text-6xl font-bold text-white text-center animateText'>TECHRYZER</h1>
      </div>
    </div>
  )
}

export default Loading
