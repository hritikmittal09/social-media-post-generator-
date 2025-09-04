
"use client"
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import UploadImage from "@/components/UploadImage";
import BrandColorPicker from "@/components/BrandColorPicker";
import ToneSelector from "@/components/ToneSelector";
import PostTextInput from "@/components/PostTextInput";
import GenerateButton from "@/components/GenerateButton";
import PostPreview from "@/components/PostPreview";
import Loading from "@/components/Loading";
import axios from "axios";
import Error from "@/components/Error";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [logo, setLogo] = useState<string | null>(null);
  const [brandColor, setBrandColor] = useState("#ff6600");
  const [tone, setTone] = useState("Friendly");
  const [text, setText] = useState("");
  const [generated, setGenerated] = useState(false);
  const [isLoading, setLoader] = useState(false);
  const [GeneratedText, setGeneratedText] = useState("");
  const [isError, setErrorMessage] = useState<any | undefined>(undefined);

  

useEffect(()=>{
  console.log(tone,text, brandColor)

},[image,logo,tone,text, brandColor])
  const handleGenerate = async () => {
    // TODO: Integrate Gemini API
    //setGenerated(true);
    setLoader(true)
    setGenerated(false)
    setErrorMessage(undefined)
    if (image== null) {
      setLoader(false)
      setGenerated(false)
      setErrorMessage("vendor image is required !!")
      return
      
    }

  try {
      const body = {
        text : text,
        tone : tone, 
    
      }
      const res = await axios.post('/api/gemini', body)
      if (res.status== 200) {
        setGeneratedText(res.data.candidates?.[0]?.content?.parts?.[0]?.text || "No content");
        setLoader(false)
        setErrorMessage(undefined)
        setGenerated(true)
        
         
        
      }
  } catch (error :any) {
    setErrorMessage(error.message )
    setLoader(false)
    setGenerated(false)
    
  }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <Header />

      <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg w-full max-w-lg">
        <UploadImage label="Vendor Image:" onUpload={setImage} />
        <UploadImage label="Logo (optional):" onUpload={setLogo} />
        { false &&
        <BrandColorPicker color={brandColor} setColor={setBrandColor} />}
        <ToneSelector tone={tone} setTone={setTone} />
        <PostTextInput text={text} setText={setText} />
        <GenerateButton brandColor={brandColor} onClick={handleGenerate} />
      </div>

      {generated && (
        <PostPreview image={image} logo={logo} text={GeneratedText} brandColor={brandColor} />
      )}
      {isLoading && (
        <Loading/>
      )}
      {(isError != undefined )&& (
        <Error message={isError} />
        )}
    </div>
  );
}
