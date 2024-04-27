import { FormComponentProps } from '@/types/types'
import React from 'react'

const SearchForm: React.FC<FormComponentProps> = ({ submit, name }) => {
    return (
        <form className="text-center flex flex-col md:flex-row items-center 
            justify-center gap-4"
            onSubmit={submit}>
            <input className="bg-white text-black border-2 rounded-lg indent-3 h-10 w-64"
                type="text"
                placeholder="Enter movie name"
                name={name}
            // value={value?.movie || ''}
            // onChange={change}
            >
            </input>
            <button className="flex justify-center items-center
            bg-neutral-400 hover:bg-zinc-500 active:bg-neutral-600
              px-4 py-2 rounded font-black"
            >Search
            </button>
        </form>
    )
}

export default SearchForm
