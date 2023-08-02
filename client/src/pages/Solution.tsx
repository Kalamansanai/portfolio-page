export default function Solution() {
  return (
    <video
      autoPlay
      muted
      loop
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        left: 0,
        top: 0,
        zIndex: -1,
      }}
    >
      <source
        src="../images/iPhone 14 _ Action mode _ Apple.mp4"
        type="video/mp4"
      />
      {/* Add more <source> elements for other formats (WebM, Ogg) */}
    </video>
  );
}
