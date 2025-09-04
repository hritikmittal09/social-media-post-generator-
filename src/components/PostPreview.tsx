interface PostPreviewProps {
  image: string | null;
  logo: string | null;
  text: string;
  brandColor: string;
}

export default function PostPreview({ image, logo, text, brandColor }: PostPreviewProps) {
  return (
    <div className="mt-6 bg-neutral-900 p-6 rounded-2xl shadow-lg w-full max-w-lg text-center">
      <h2 className="text-xl font-semibold mb-4">Generated Post</h2>
      {image && <img src={image} alt="Generated" className="w-full rounded-lg mb-2" />}
      {logo && <img src={logo} alt="Logo" className="w-12 mx-auto mb-2" />}
      <p style={{ color: 'text-white' }}>{text || "Generated content goes here..."}</p>
    </div>
  );
}
