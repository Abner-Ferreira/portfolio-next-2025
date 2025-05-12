export default function Work() {
  return (
    <>
      <main className='min-h-screen py-[15vh]'>
        <div className='flex items-center justify-center min-h-screen bg-black px-4'>
          <div className='perspective '>
            <img
              src='/GreenDrive.png'
              alt='3D styled screen'
              className='rounded-2xl shadow-2xl w-full h-auto max-w-[500px] sm:max-w-[600px] md:max-w-[700px] transform transition-transform duration-700'
              style={{
                transform: 'rotateX(10deg) rotateY(15deg)',
              }}
            />
          </div>
        </div>
      </main>
    </>
  )
}
