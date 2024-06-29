import { useState } from 'react'




function App() {
  const [color, setColor] = useState("#000")

  const [bgName , setBgName] = useState("")

  


  const Color1 =()=>{
    setColor('#fca311')
    setBgName('Dark Tangerine')
    
  
  }
  const Color2 =()=>{
    setColor('#161a25')
    setBgName('Eerie Black')
    
  
  }
  const Color3 =()=>{
    setColor('#d9dcd6')
    setBgName('Light Silver')
  }
  const Color4 =()=>{
    setColor('#2a9d8f')
    setBgName('Jungle Green')
  }

  return (
    <div className='w-full h-screen' style={{background:color}}>
      <div style={{textAlign:'center' }} className='flex-wrap , flex'>
          <h2 style={{background:"#0866ff" , marginTop:50 , marginLeft:50 , padding:10 , borderRadius:10 , fontSize:20 , fontWeight:'bold'}} >BackGround Color Name :- <h1 style={{color:color , fontSize:25 , fontWeight:'bold' }}>"{bgName}"</h1></h2>
        </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <h4 class="text-xl font-bold">Change BackGround:- </h4>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow ' style={{background:'#fca311' , }} 
          onClick={Color1}
          >
            Color 1

          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow ' style={{background:'#161a25'}} 
          onClick={Color2}
          >
            Color 2

          </button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow ' style={{background:'#d9dcd6'}} 
          onClick={Color3}
          >
            Color 3
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow ' style={{background:'#2a9d8f'}} 
          onClick={Color4}
          >

            Color 4
            

          </button>
          
        </div>

      </div>

    </div>
  )
}

export default App
