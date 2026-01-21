import YouTube from "react-youtube";

type Id = {
    IdVideo:string
}



export function RenderVideos({IdVideo}:Id){
    
    const opts = {
        height: '100%', // <-- Isso faz o vídeo preencher a altura
        width: '100%',  // <-- Isso faz o vídeo preencher a largura
        playerVars: {
          autoplay: 0,}
    
      };
      
    
    return (
        
        <YouTube videoId = {IdVideo} className="w-full aspect-video" opts={opts}/>
    )
}