import { useState } from "react"
import { uploudImage } from "../../lib/api/apiModels/SegmentasiAPI"

export default function Upload () {
    const [preview, setPreview] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<string | null>(null)

    const handleInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if(!file) return

        setPreview(URL.createObjectURL(file));
        setLoading(true);
    

        try{
            const result = await uploudImage(file)
            console.log("Response ", result)
            setResult(result)
        }catch(error){
            console.error("error" ,error)
        }finally{
            setLoading(false)

        }
    }

    return (
        <section >
            <div > 
                <h1>Image Upload </h1>
                <input 
                type="file"
                accept="image/*" 
                onChange={handleInput} 
                id="image"
                disabled={loading}
                className="border-2"
                />

                {preview && (
                    <div>
                        <img 
                        src={preview} 
                        alt="Preview" 
                        />
                    </div>
                )}
                
                {loading && <p className="text-gray-400">Uploading Image....</p>}

                {result &&(
                    <div>
                        <p>Hasil Segmentasi</p>
                        <img src={result} alt="image" />
                    </div>
                )}
                
            </div>
        </section>
    )
}