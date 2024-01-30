import { useRef, useEffect } from "react";

const BGM = ({ start, url, volume = 0.3 }) => {
    const audioRef = useRef(null);

    const play = async () => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            audioRef.current.loop = true;
            try {
                await audioRef.current.play();
            } catch (error) {
                console.log("replay");
                setTimeout(() => {
                    play();
                }, 500);
            }
        }
    };

    useEffect(() => {
        if (start) play();
    }, [start]);

    return <audio ref={audioRef} src={url} />;
};

export default BGM;
