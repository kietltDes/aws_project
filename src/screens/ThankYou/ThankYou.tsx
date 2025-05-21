import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/ui/button";
import { CheckCircle } from "lucide-react";

export const ThankYou = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0,0);
  },[]
  );

  return (
    <div className="bg-white flex flex-col w-full min-h-screen ">
      {/* Hero Banner */}
      <div className="w-full relative ">
        <section className="relative h-auto w-full">
          {/* Background Image */}
          <div className="w-full h-auto object-contain">
            <img
              src="/Langding_EN_Header.jpg"
              alt="Thank You Banner"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Overlay (nếu cần) */}
            {/* <div className="absolute inset-0 bg-black/40" /> */}
          </div>
        </section>
      </div>

      {/* Section mới bên dưới */}
      <section className="w-full bg-white py-8 md:py-10 lg:py-12 px-4 sm:px-8 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-800 p-4 mb-6 md:mb-8">
            Trân trọng cảm ơn Quý vị đã đăng ký!
          </h2>
          
          <div className="space-y-4 mb-8 max-w-2xl mx-auto">
            <p className=" text-2xl  leading-relaxed text-gray-900 ">
            Quý vị đừng quên mang theo laptop cá nhân để thực hành lab trực tiếp tại sự kiện !

            </p>
          </div>
            <p className="mb-6 text-lg text-[#0368B7]">
              Để biết thêm thông tin, vui lòng liên hệ qua email: 
              <a href="mailto:kathy@g-asiapac.com.vn" className="underline hover:text-blue-700 ml-1">
                kathy@g-asiapac.com.vn
              </a>
            </p>
            <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-[#0368B7] hover:bg-blue-300 text-white font-regular ransition-all duration-300 transform hover:scale-105"
          >
            Quay về trang chủ
          </button>
          {/* <div className="bg-blue-50 rounded-lg p-8 inline-block max-w-2xl">
            <p className="mb-6 text-lg font-medium text-[#0368B7]">
              Để biết thêm thông tin, vui lòng liên hệ qua email: 
              <a href="mailto:event@trangia.vn" className="underline hover:text-blue-700 ml-1">
                event@trangia.vn
              </a>
            </p>
            <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-[#0368B7] hover:bg-blue-300 text-white font-regular ransition-all duration-300 transform hover:scale-105"
          >
            Quay về trang chủ
          </button>
          </div> */}


        </div>
      </section>
      {/* <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-12 md:pt-16 text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-2xl font-medium text-gray-800 mb-4">
              Chân thành cảm ơn Quý Đối tác và Khách hàng
            </h2>
          </div>
          
          <div className="flex flex-wrap  justify-center items-center gap-8 md:gap-12 lg:gap-16">
            <img 
              src="/asus-iot-logo.jpg" 
              alt="Intel Logo" 
              width={160}
              height={64}
              className="h-12 md:h-16 w-auto items-center  transition-all duration-300 hover:scale-105"
              loading="lazy"
              />
            <img 
              src="/microsoft-logo.png" 
              alt="Microsoft Logo" 
              width={160}
              height={64}
              className="h-12 md:h-16 w-auto items-center  transition-all duration-300 hover:scale-105"
              loading="lazy"
            />
            <img 
              src="/BrandPC.webp" 
              alt="Google Logo" 
              width={160}
              height={64}
              className=" width={160} h-auto items-center  transition-all duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </section> */}
       <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-12 md:pt-16 text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-2xl font-medium text-gray-800 mb-4">
              Chân thành cảm ơn Quý Đối tác và Khách hàng
            </h2>
          </div>
          
          <div className="flex flex-wrap  justify-center items-center gap-8 md:gap-12 lg:gap-16">
            <img 
              src="/AWS_logo_RGB_1c_Gray850.png" 
              alt="AWS Logo" 
              width={160}
              height={64}
              className="h-12 md:h-16 w-auto items-center  transition-all duration-300 hover:scale-105"
              loading="lazy"
              />
            <img 
              src="/GAPVN_logo đen ngang (1).png" 
              alt="Microsoft Logo" 
              width={160}
              height={64}
              className="h-12 md:h-16 w-auto items-center  transition-all duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};