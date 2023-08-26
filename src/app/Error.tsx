'use client'

interface ErrorProps {
    error: Error,
    reset: () => void
}

export default function Error({error,reset}: ErrorProps){
    return (
        <div>
            This isnt loading up: {error.message}
            <button onClick={() => reset()}>Reset</button>
        </div>
    )
}