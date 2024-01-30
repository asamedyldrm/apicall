import React, { useState, useEffect } from "react";
import Image from "next/image";

function ImageItem({ image }) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    console.log("closeModal'a tıklandı.")
    setShowModal(false);
    
  };

  const loadingKontrol = () => {
    setLoading(true)
  }

  useEffect(() => {
    console.log("Modal Durumu Değişti:", showModal)
    // Modal açıkken herhangi bir yere tıklanıldığında çağrılacak fonksiyon
    const handleOutsideClick = (e) => {
      // Eğer modal açıksa ve tıklanan yer modalın içinde değilse
      if (showModal && (!e.target.closest(".modal") || e.target.id === "myButton")) {
        // Modalı kapat
        closeModal();
      }
    };
  
    // Sayfa üzerindeki herhangi bir yere tıklanıldığında handleOutsideClick fonksiyonunu çağır
    document.addEventListener("click", handleOutsideClick);

    // useEffect temizlik fonksiyonu
    return () => {
      // Component kaldırıldığında event listener'ı temizle
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showModal]); // showModal değiştiğinde useEffect çalışsın
  

  return (
    <div
      className="m-3 rounded-xl shadow-lg cursor-pointer shadow-black-100 hover:shadow-indigo-500/100"
      onClick={openModal}
    >
      <Image
        className="h-72 w-full object-cover rounded-t-xl max-sm:h-36"
        src={image.urls.small}
        alt={image.alt_description}
        width={image.width}
        height={image.height}
        
      />
      <p className="text-xs p-5 text-right italic">{image.alt_description}</p>

      {showModal && (
        <div className="background fixed bg-black w-full h-full top-0 left-0 bg-opacity-85">
          <div className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl shadow-gray-600">
            <div className=" z-50 bg-white p-2 rounded shadow-lg overflow-hidden">
              <button
                id="myButton"
                className="text-white bg-red-500 pl-3 pr-3 pt-1 pb-1 rounded m-2 right-2 absolute z-50 hover:bg-red-600"
                // onClick={closeModal}
              >
                X
              </button>
              <Image
                className="w-full max-h-[600px] object-cover"
                src={loading ? image.urls.full : image.urls.small}
                alt={image.alt_description}
                width={500}
                height={500}
                onLoad={loadingKontrol}
              />
              <p className="text-xs text-right italic mt-4 absolute text-white bottom-4 right-5">
                {image.alt_description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageItem;
