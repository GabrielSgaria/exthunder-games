'use client'


import { useState, FormEvent } from "react"
import { BsSearch } from "react-icons/bs"
import {useRouter} from 'next/navigation'

export function Input() {
    const [input, setInput] = useState('');
    const router = useRouter();

    function handleSearch(event: FormEvent){
        event.preventDefault;

        if(input === '') return

        router.push(`/game/search/${input}`)
    }

    return (
        <form 
        onSubmit={handleSearch}
        className="w-full bg-slate-100 my-5 flex gap-2 items-center justify-between rounded-lg p-2">
            <input
                type="text"
                placeholder="Porcurando algum jogo?..."
                value={input}
                onChange={ (event) => setInput(event.target.value)}
                className="bg-slate-100 outline-none w-11/12"
            />
            <button type="submit">
                <BsSearch size={24} className="text-orange-500"/>

            </button>

        </form>
    )
}