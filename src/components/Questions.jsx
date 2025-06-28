import React, {useState} from 'react'

const Questions = (props) => {
    const [showAnswer, setShowAnswer] = useState(false)

  return (
    <>
     <section className='bg-black w-full'>
                <div className='w-[80%] mx-auto'>

                    <div>
                        <button onClick={() => setShowAnswer(prev => !prev)} className="font-bold text-[20px] lg:text-[28px] text-white uppercase flex justify-between items-center w-full py-4">{props.question}
                            {showAnswer ?
                                (<span className="w-24 h-12 md:size-[60px] lg:size-[72px] rounded-full flex justify-center items-center transition-transform duration-300 bg-[#a100ff]"><svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 9.29832e-06V19.4641H23.8453V3.66299L1.50829 26L0 24.4199L22.2652 2.15471H6.46409L6.46409 9.29832e-06H26Z" fill="white"></path></svg></span>
                                ) :
                                (<span className="w-24 h-12 md:size-[60px] lg:size-[72px] rounded-full flex justify-center items-center transition-transform duration-300 bg-black">
                                    <svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 26H6.53591L6.53591 23.8453H22.337L0 1.50829L1.58011 0L23.8453 22.2652V6.46409L26 6.46409V26Z" fill="white"></path></svg>
                                </span>)}


                        </button>
                        {showAnswer &&
                            <div>
                                <p className="font-normal text-[15px] lg:text-[20px] leading-[30px] text-white pr-20">{props.answer}</p>
                            </div>
                        }
                    </div>
</div>
</section>
    
    </>
  )
}

export default Questions