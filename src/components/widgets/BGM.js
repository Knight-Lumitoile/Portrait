import { useRef, useEffect } from "react";
import { sleep } from "../../utilities/time";

const BGM = ({ start, url, volume = 0.3 }) => {
    const audioRef = useRef(null);

    const play = async () => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            audioRef.current.loop = true;
            try {
                await audioRef.current.play();
            } catch (error) {
                await sleep(0.5);
                play();
            }
        }
    };

    useEffect(() => {
        if (start) play();
    }, [start]);

    return <audio ref={audioRef} src={url} />;
};

export default BGM;
