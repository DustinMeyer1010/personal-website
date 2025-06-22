import { workerData } from "worker_threads";

type Props = {
    word: string
}

const SpecialLettering: React.FC<Props> = ( { word } ) => {




    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px"
        }}>
            {word.split('').map((char, i) => {
        const rotate = Math.floor(Math.random() * 10 - 10); // -10 to +10 degrees
        const offset = Math.floor(Math.random() * 10 - 5); // -10 to +10 px vertically
        const fontSize = Math.floor(Math.random() * 10) + 25

        const fontweight = ["bold", "100", "200"]
        const fontidx = Math.floor(Math.random() * 3)

        return (
          <span
            key={i}
            style={{
                fontSize: `${fontSize}px`,
                backgroundColor: 'white',
                color: "black",
                display: 'inline-block',
                verticalAlign: "top",
                lineHeight: "1",
                padding: "0px",
                margin: "0px",
                fontWeight: `${fontweight[fontidx]}`,
                transform: `rotate(${rotate}deg) translateY(${offset}px)`,
            }}
          >
            {char}
            
          </span>
        );
      })}
        </div>
    )
}

export default SpecialLettering