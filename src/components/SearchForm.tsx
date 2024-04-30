import { FormComponentProps } from '@/types/types'
import React from 'react'

const SearchForm: React.FC<FormComponentProps> = ({ submit, movieRef, placeholderText }) => {
    return (
        <form className="text-center flex flex-col md:flex-row items-center 
            justify-center gap-1"
            onSubmit={submit}>
            <input className="bg-white text-black border-2 rounded-lg indent-3 h-10 w-64"
                type="text"
                placeholder={placeholderText}
                ref={movieRef}
            // name={name}
            // value={value}
            // onChange={change}
            >
            </input>
            <button className="flex justify-center items-center
            bg-neutral-400 hover:bg-zinc-500 active:bg-neutral-600
              px-4 py-2 rounded font-black mt-6 md:mt-0 max-[767px]:w-full"
            >Search
            </button>
        </form>
    )
}

export default SearchForm
