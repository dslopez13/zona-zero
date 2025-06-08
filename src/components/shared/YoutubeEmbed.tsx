interface YoutubeEmbedProps {
  embedId: string;
  title?: string;
}

export function YoutubeEmbed({ embedId, title = "YouTube Video Player" }: YoutubeEmbedProps) {
  return (
    <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
