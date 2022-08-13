import React from 'react'
import Typical from 'react-typical';

function Typing() {
  return (
    <div className="mt-5 text-3xl mob:text-2xl laptop:text-6xl mob:p-2  mob:w-full laptop:w-full  mob: text-center">
        I am {' '}
        <Typical 
            loop = {Infinity}
            wrapper = "b"
            steps = {[
                'a full stack developer',
                3000,
                'an open source contributor',
                3000

            ]}
        />
    </div>
  )
}

export default Typing