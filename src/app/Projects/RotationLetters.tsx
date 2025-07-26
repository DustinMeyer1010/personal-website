import { useEffect, useState } from "react"


type Word = {
    letter: string
}

const RotationLetters: React.FC<Word> = ({ letter }) => {

    const [hasMounted, setHasMounted] = useState(false);
    
        useEffect(() => {
            setHasMounted(true);
        }, []);
    
        if (!hasMounted) return null

        const randomnumber = Math.floor(Math.random() * letter.length)



    return (
        <div>
            {letter.split('').map((char, i) => {
            const rotate = Math.floor(Math.random() * 15);


            if (randomnumber == i ) {
                return (
                    <span
                    key={i} 
                    style={{
                        display: 'inline-block',
                        transform: `rotate(${rotate}deg)`,
                        background: "white",
                        color: "black",
                        textAlign: "center",
                        lineHeight: "35px"
                    }}>
                        {char}
                    </span>
                )
            }
                return (
                    <span
                    key={i}
                     style={{
                        display: 'inline-block',
                        transform: `rotate(${rotate}deg)`
                    }}>
                        {char}
                    </span>
                )
            })}
    </div>
)


}

export default RotationLetters