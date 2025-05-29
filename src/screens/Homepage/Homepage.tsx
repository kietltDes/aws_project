import React, { useRef } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { RegistrationForm } from "../../components/RegistrationForm";

// Event details data
const eventDetails = {
  title: "The Future of Smart Manufacturing: Edge AI, Robotics, and Automation",
  subtitle: "Unlock the Future of Smart Manufacturing with Edge AI & Robotics",
  date: "April 22, 2025",
  from: "from 1:30 p.m. – 8:30 p.m.",
  location: "Intercontinental Hanoi Landmark 72",
  benefits: [
    "Discover the latest innovations in Smart Manufacturing, including real-from quality control, predictive maintenance, and intelligent automation",
    "Experience live demos of cutting-edge solutions from Intel, ASUS IoT, AES, BrandIPC, Phenikaa-X, and other key partners.",
    "Engage with industry experts in keynotes, panel discussions, and interactive sessions.",
    "Network with peers and solution providers over an exclusive dinner and networking session—with a chance to win exciting prizes!",
  ],
};
const contentOverview=[
  {
    topic:"Khám phá những đổi mới tiên tiến nhất trong sản xuất thông minh, bao gồm kiểm soát chất lượng theo thời gian thực, bảo trì dự đoán và tự động hóa thông minh."
  },
  {
    topic:"Trải nghiệm trực tiếp các giải pháp đột phá từ Intel, ASUS IoT, AES, Brand PC, Phenikaa-X và các đối tác hàng đầu khác."
  },
  {
    topic:"Giao lưu với các chuyên gia qua các bài phát biểu, thảo luận nhóm và phiên làm việc tương tác."
  },
  {
    topic:"Kết nối với chuyên gia và nhà cung cấp giải pháp trong bữa tối giao lưu đặc biệt – đồng thời có cơ hội nhận những phần quà vô cùng hấp dẫn!"
  },
  
];

const agenda = [
  {
    from: "09:00",
    to: "09:30",
    speaker: "Registration & Welcome"
  },
  {
    from: "09:30",
    to: "09:40",
    speaker: "Opening Keynote",
  },
  {
    from: "09:40",
    to: "09:50",
    speaker: "Software Business Journey on AWS",
  },
  {
    from: "09:50",
    to: "10:10",
    speaker: "SaaS Innovation: Trends and Opportunities",
  },
  {
    from: "10:10",
    to: "10:40",
    speaker: "Panel Discussion: ISV Insights - Navigating the Cloud & Al Revolution",
  },
  {
    from: "10:40",
    to: "10:45",
    speaker: "Break",
  },
  {
    from: "10:45",
    to: "11:15",
    speaker: "GenAl for ISV Growth: Amazon Bedrock & Amazon Q Developer",
  },

  {
    from: "11:15",
    to: "11:45",
    speaker: "GAPV Solutions: Accelerate Migration & Modernization with Amazon Q ",
  },
  {
    from: "11:45",
    to: "12:15",
    speaker: "Overcoming Challenges for SMBs & Digital Natives: The Velocity - Security - Compliance Triangle",
  },
  {
    from: "12:15",
    to: "13:15",
    speaker: "Networking Lunch",
  },
  {
    from: "13:15",
    to: "13:30",
    speaker: "Power Up Your Team with AWS Skill Builder",
  },
  {
    from: "13:30 ",
    to: "14:15 ",
    speaker: "Hands-on Lab: Deep Dive into DevSecOps",
  },
  {
    from: "14:15",
    to: "14:25",
    speaker: "MiniGame",
  },
  {
    from: "14:25 ",
    to: "14:30",
    speaker: "Closing Remarks"
  },
];

const speakers = [
  {
    name: "Ms. Wendy Kho",
    title: "Head of Strategic Initiatives, ASEAN, AWS",
    image: "/diengia1.png"
  },
  {
    name: "Mr. Naveen Asrani",
    title: "Head - Strategic Product & Revenue Growth, Digital Native Businesses and ISVs, ASEAN, AWS", 
    image: "/diengia2.png"
  },
  {
    name: "Mr. Tung Cao",
    title: "Solutions Architect, AWS",
    image: "/diengia3.png" 
  },
  {
    name: "Mr. Pedric Kng",
    title: "Senior Solutions Architect, GitLab",
    image: "/diengia4.png" 
  },
  {
    name: "Mr. Sameer Bhatt",
    title: "Senior ATP Sales Manager ASEAN, AWS",
    image: "/diengia5.png"
  },
  {
    name: "Mr. Truong Pham (Troy)",
    title: "Cloud Consultant GAPV",
    image: "/diengia6.png"
  },
  {
    name: "Ms. Nhi Le (Jasmine)",
    title: "Account Executive GAPV",
    image: "/diengia7.png"
  },
  {
    name: "Ms. Thuy Le ",
    title: "Team Leader of Conglomerate | ISV | Digital, AWS",
    image: "/diengia8.png"
  },
  {
    name: "Mr. Son Dao ",
    title: "Principal Software Engineer of Katalon",
    image: "/diengia9.png"
  },
    {
    name: "Mr. Tuan Nguyen",
    title: "CEO, ActiUp",
    image: "/diengia10.png"
  },
  {
    name: "Mr. Bernard Ng",
    title: "Senior Customer Success Engineer, GitLab",
    image: "/diengia11.png"
  },  
  {
    name: "Trang Do",
    title: "Co-founder & Chief of Business Development, NamiTech",
    image: "/diengia12.png"
  },

];


export const Homepage = (): JSX.Element => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1920px] relative">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="w-full h-full ">
            <img
              src="/Langding_EN_Header.jpg"
              alt="AWS_ISV_Comunity_Day"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </section>


        {/* Navigation and Content Section */}
        <section className="w-full rounded-none p-0 m-0">
          {/* Navigation Tabs */}
          <Tabs defaultValue="overview" className="w-full rounded-none p-0 m-0">
            <TabsList className="
              w-full 
              h-auto md:h-[120px] 
              bg-[#78CDFE] 
              grid 
              grid-cols-3
              p-0 m-0 
              gap-0">
              <TabsTrigger value="overview" className="
              uppercase
              h-[60px] md:h-full 
              px-2 md:px-6 
              py-2 
              rounded-none
              bg-[#78CDFE] 
              data-[state=active]:bg-[#392165] 
              text-gray-800 
              data-[state=active]:text-white 
              text-[13px] md:text-[24px] 
              font-medium 
              transition-all  
              duration-300
              hover:bg-[#CBAFFF]"
              >
              Tổng quan
              </TabsTrigger>
              <TabsTrigger value="agenda" className="
              uppercase
              h-[60px] md:h-full 
              px-2 md:px-6 
              py-2 
              rounded-none 
              bg-[#78CDFE] 
              data-[state=active]:bg-[#392165] 
              text-gray-800 
              data-[state=active]:text-white 
              text-[13px] md:text-[24px]
              font-medium 
              transition-all 
              duration-300
              hover:bg-[#CBAFFF]"
              >
              Nội dung chương trình
              </TabsTrigger>
              <TabsTrigger value="speaker" className="
              uppercase
              h-[60px] md:h-full 
              px-2 md:px-6 
              py-2 
              rounded-none 
              bg-[#78CDFE] 
              data-[state=active]:bg-[#392165] 
              text-gray-800 
              data-[state=active]:text-white 
              text-[13px] md:text-[24px] 
              font-medium 
              transition-all 
              duration-300
              hover:bg-[#CBAFFF]"
              >
              Diễn giả
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card className="w-full border-none shadow-none">
                <CardContent className="
                  flex flex-col items-start gap-6 
                  px-4 sm:px-8 md:px-16 lg:px-[120px] 
                  py-8 md:py-12 lg:py-16
                ">

                  <div className="w-full bg-[#D0E8FF]-disable ">
                    <div className="mx-auto">
                      <p className="text-lg lg:text-xl text-justify leading-normal sm:leading-relaxed md:leading-loose mb-6 tracking-wide">
                      Chào mừng Quý vị đến với trang đăng ký sự kiện "AWS ISV Community Day". Đây là sự kiện độc quyền, 
                      được tổ chức nhằm kết nối các nhà cung cấp phần mềm độc lập (ISV), các công ty phần mềm trong 
                      nước và các chuyên gia công nghệ từ AWS trong một ngày gặp gỡ, chia sẻ và học hỏi.

                      </p>
{/* 
                      <p className="font-medium text-lg lg:text-2xl mb-4">Tại sự kiện này, Quý vị sẽ có cơ hội:</p>

                      <div className="w-full overflow-hidden">
                        <table className="w-full border-collapse rounded-md overflow-hidden text-lg lg:text-xl text-justify tracking-wide">
                          <tbody>
                            {contentOverview.map((item, index) => {
                              const isEven = index % 2 === 0;
                              return (
                                <tr key={index} className={`${isEven ? 'bg-[#0368B7] text-white' : 'bg-[#78CDFE] text-black'}`}>
                                  <td className="py-6 px-4 sm:px-8">
                                    <div className="flex items-start gap-2">
                                    
                                      <span className="break-words">{item.topic}</span>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div> */}
                    </div>

                    <div className="py-6 px-4 sm:px-8">

                      <p className="mb-4 text-2xl font-medium">Chi tiết sự kiện :</p>

                      <div className="my-4 space-y-4 text-lg lg:text-xl">
                        <p className="font-medium tracking-wide">• 9:00 sáng - 2:30 chiều, Thứ Ba, ngày 10 tháng 6 năm 2025 (Giờ Việt Nam)</p>
                        <p className="font-medium tracking-wide">• Văn phòng AWS Việt Nam, Tầng 26 - Phòng sự kiện, Số 2 đường Hải Triều,
Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh </p>
                        
                      </div>
                    </div>
                    
                      <p className="text-lg lg:text-xl text-justify leading-normal sm:leading-relaxed md:leading-loose mb-6 tracking-wide">
                      Hãy tham gia sự kiện độc quyền  AWS ISV Community Day, nơi bạn sẽ được khám phá cách khai thác công nghệ tiên tiến 
                      của AWS và Generative AI nhằm tối ưu hóa hoạt động kinh doanh, đẩy mạnh phát triển phần mềm và thúc đẩy tăng trưởng doanh thu.
                      </p>
                      <p className="text-lg lg:text-xl text-justify leading-normal sm:leading-relaxed md:leading-loose mb-6 tracking-wide">
                      Tại đây, các nhà cung cấp giải pháp công nghệ sẽ có cơ hội tìm hiểu cách áp dụng các công nghệ đột phá để đổi mới quy trình, 
                      nâng cao hiệu quả vận hành. Đồng thời, sự kiện cũng là dịp để kết nối với các chuyên gia trong ngành, đối tác AWS và khách 
                      hàng – những người sẽ chia sẻ chiến lược SaaS thành công, cơ hội hợp tác tiềm năng và những hành trình chuyển đổi số thực tiễn, 
                      đã mang lại kết quả rõ rệt cùng AWS.
                      </p>

                      <div className="w-full my-8">
                          <img
                            src="/giftimage.png" // Thay bằng đường dẫn hình ảnh của bạn
                            alt="AWS ISV Community Day Overview"
                            className="w-auto h-auto mx-auto object-contain"
                            loading="lazy"
                          />
                      </div>       
                  </div>

                </CardContent>
              </Card>
            </TabsContent>

            {/* Agenda Tab Content */}
            <TabsContent value="agenda">
              <Card className="w-full rounded-none border-none shadow-none">
                <CardContent className="flex flex-col items-start gap-8 px-4 sm:px-8 md:px-16 lg:px-[120px] py-8 md:py-12 lg:py-16">
                  <h1 className="text-[#392165] text-2xl md:text-[26px] lg:text-[40px] font-medium leading-tight md:leading-[42px]">
                  Nội dung chương trình
                  </h1>
                  <div className="w-full overflow-x-auto">
                    <table className="w-full min-w-[800px] border-collapse">
                      <thead>
                        <tr className="bg-[#392165] text-white text-center">
                          <th className="py-4 px-6  w-[10%] text-base md:text-lg font-medium border border-gray-300">Từ</th>
                          <th className="py-4 px-6  w-[10%] text-base md:text-lg font-medium border border-gray-300">Đến</th>
                          <th className="py-4 px-6 text-left w-[40%] text-base md:text-lg font-medium border border-gray-300 text-center">Nội dung</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-300">
                        {agenda.map((item, index) => (
                          <tr 
                            key={index} 
                            className={`
                              
                              ${index % 2 === 0 ? 'bg-white' : 'bg-[#EFEFEF]'}
                              hover:bg-[#D7C2FF] transition-colors duration-200
                            `}
                          >
                            <td className="py-4 px-6 text-gray-800 font-normal text-sm md:text-base text-center ">
                              {item.from}
                            </td>
                            <td className="py-4 px-6 text-gray-800 font-normal text-sm md:text-base text-center">
                              {item.to}
                            </td>
                            <td className="py-4 px-6 text-gray-800 font-medium text-sm md:text-base">
                              {item.speaker}
                            </td>
                            
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Speaker Tab Content */}
            <TabsContent value="speaker">
              <Card className="w-full rounded-none border-none shadow-none">
                <CardContent className="flex flex-col items-start gap-8 px-4 sm:px-8 md:px-16 lg:px-[120px] py-8 md:py-12 lg:py-16">
                  <h1 className="text-[#392165] text-2xl md:text-[26px] lg:text-[40px] font-medium leading-tight md:leading-[42px] justify-center">
                  Diễn giả 
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    {speakers.map((speaker, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="overflow-hidden mb-4">
                          <img
                            src={speaker.image}
                            alt={speaker.name}
                            loading="lazy"
                            className="object-contain hover:scale-105 transition-all duration-300"
                            width={413}  // Kích thước gốc
                            height={334}
                          />
                        </div>
                        <h2 className="text-[#0353b2] text-xl font-semibold text-center uppercase">
                          {speaker.name}
                        </h2>
                        <p className="text-[#0353b2] text-center mt-2">
                          {speaker.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Registration Form Section */}
        <section ref={formRef} className="px-4 sm:px-8 md:px-16 lg:px-[120px] py-8 md:py-10 lg:py-16">
          <div className="max-w-[1440px] mx-auto">
            <RegistrationForm />
          </div>
        </section>
      {/* Partners Section */}
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
    </div>
  );
};