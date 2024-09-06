import { useState } from "react"



const Figma = () => {

    const [images , setImages] = useState([
          {id: 1, src: '/public/picture.jpeg'},
          {id: 2, src: '/public/picture.jpeg'},
          {id: 3, src: '/public/picture.jpeg'}
    ]);

    const addImage = () =>{
        const newId = images.length +1;
        const newImage = {id: newId , src: '/public/picture.jpeg'};
        setImages([...images, newImage]);
    };


  return (
 <div className="bg-gray-800 w-1/2 p-5  rounded-lg  ml-auto mt-4 mb-2">
    <div className="w-1/2 bg-gray-100 "></div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-white text-lg bg-black p-2 m-4 rounded-lg px-2">Gallery</div>
        <button
          className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
          onClick={addImage}
        >
          + ADD IMAGE
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="aspect-square bg-gray-900 rounded-lg overflow-hidden">
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
          ←
        </button>
        <button className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
          →
        </button>
      </div>
    </div>
  )
}

export default Figma;
