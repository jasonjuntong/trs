const App = () => {
  return (
    <main>
      <section className='flex flex-col border-b border-gray-200'>
        <div className='px-5 pt-6 sm:px-32 md:px-32 lg:px-10 lg:pt-10 xl:px-62'>
          <div className='pb-5 flex flex-row items-center justify-between'>
            <h1 className='text-3xl font-[950] tracking-[-0.10rem]'>TRS</h1>
            <button className='text-sm text-white font-bold bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg'>Register</button>
          </div>
        </div>
      </section>
      <section className='px-5 mt-10 lg:mt-0 sm:px-32 md:px-32 lg:px-10 lg:pt-10 xl:px-62 flex flex-col lg:flex-row items-center lg:justify-between gap-10'>
        <div className='max-w-[35rem]'>
          <h1 className='px-5 sm:px-10 lg:px-0 mb-2 text-3xl md:text-4xl xl:text-6xl text-center lg:text-start text-blue-900 font-semibold'>
            <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-orange-500'>Preserve </span>
            ideas that will inspire tomorrow
          </h1>
          <p className='text-sm sm:text-2xl xl:text-2xl text-center lg:text-start font-light'>Protect and keep your academic projects, so your ideas always stay alive.</p>
        </div>
        <div
          className='w-full px-5 py-5 max-w-[30rem] flex flex-col items-center justify-between rounded-lg ring-2 ring-offset-[0.5] ring-gray-200/20 border border-gray-200 gap-5'>
          <h2 className='text-xl font-bold'>Login</h2>
          <div
            className='w-full flex h-10 px-3 border border-gray-300 rounded-lg focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-500'>
            <input
              className='focus:outline-none'
              placeholder='Email'
            >
            </input>
          </div>
          <div
            className='w-full flex h-10 px-3 border border-gray-300 rounded-lg focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-500'>
            <input
              className='focus:outline-none'
              placeholder='Password'
            >
            </input>
          </div>
          <button className='w-full bg-blue-500 hover:bg-blue-600 h-10 rounded-lg text-white mb-2 font-bold focus:outline-none focus:bg-blue-600'>Continue</button>
        </div>
      </section>
    </main>

  )
}

export default App