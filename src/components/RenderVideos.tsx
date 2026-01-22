import YouTube from "react-youtube";

type Id = {
    IdVideo:string
}



export function RenderVideos({IdVideo}:Id){
    
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
            controls: 1,
            iv_load_policy: 3, 
            modestbranding: 1,
        },
    };
      
    
    return (
        
        <YouTube videoId = {IdVideo} className="w-full h-full" opts={opts} iframeClassName="w-full h-full"/>
    )
}