import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

const formSchema = z.object({
  lastName: z.string().min(1, "Họ là bắt buộc"),
  firstName: z.string().min(1, "Tên là bắt buộc"),
  country: z.string().min(1, "Quốc gia/Vùng là bắt buộc"),
  email: z.string().email("Email không hợp lệ"),
  mobilePhone: z.string().min(1, "Số điện thoại di động là bắt buộc"),
  businessPhone: z.string().optional(),
  company: z.string().min(1, "Tên công ty là bắt buộc"),
  jobTitle: z.string().min(1, "Chức danh là bắt buộc"),
  profession: z.string().min(1, "Nghề nghiệp là bắt buộc"),
  jobLevel: z.string().min(1, "Cấp bậc là bắt buộc"),
  industry: z.string().min(1, "Ngành nghề là bắt buộc"),
});



export const RegistrationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const scriptUrl = "https://script.google.com/macros/s/AKfycbxM5WSqOCGGxZsm1FtPSYCwSQAHah_K_HskMpQOq3Gvp6v8kzjmQxyvXy7RPuyS8Fu6fw/exec";

      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data).toString(),
      });

      if (!response.ok) {
        throw new Error(`Đã có lỗi xảy ra: ${response.status}`);
      }

      navigate('/thank-you');
    } catch (error) {
      console.error("Error:", error);
      alert("Đã có lỗi xảy ra khi gửi form. Vui lòng thử lại sau.");
    }
  };

  const [countries, setCountries] = useState<{ code: string; name: string }[]>([]);
  
    useEffect(() => {
      fetch("/countries.txt")
        .then((res) => res.text())
        .then((text) => {
          const lines = text.split("\n").filter(Boolean);
          const parsed = lines.map((line) => {
            const [code, name] = line.trim().split("|");
            return { code, name };
          });
          setCountries(parsed);
        })
        .catch((err) => {
          console.error("Lỗi khi load file countries.txt:", err);
        });
    }, []);

  // đọc file Profession

  const [profession, setProfession] = useState<{ code: string; name: string }[]>([]);
  
    useEffect(() => {
      fetch("/profession_data.txt")
        .then((res) => res.text())
        .then((text) => {
          const lines = text.split("\n").filter(Boolean);
          const parsed = lines.map((line) => {
            const [code, name] = line.trim().split("|");
            return { code, name };
          });
          setProfession(parsed);
        })
        .catch((err) => {
          console.error("Lỗi khi load file profession_data.txt:", err);
        });
    }, []);

      // đọc file lĩnh vực công tác
    const [industries, setIndustries] = useState<{ code: string; name: string }[]>([]);
      useEffect(() => {
        fetch("/industry_data.txt")
          .then((res) => res.text())
          .then((text) => {
            const lines = text.split("\n").filter(Boolean);
            const parsed = lines.map((line) => {
              const [code, name] = line.trim().split("|");
              return { code, name };
            });
            setIndustries(parsed);
          })
          .catch((err) => {
            console.error("Lỗi khi load file company_data.txt:", err);
          });
      }, []);

  return (

    <div className="p-8 lg:p-10 w-full mx-auto bg-[#EFEFEF] rounded-2xl border border-[#78CDFE]  ">
      <h1 className="text-gray-800 text-3xl md:text-4xl font-medium mb-6 tracking-wide ">
        Đăng ký ngay!
      </h1>
      <p className="text-gray-800 mb-4 text-sm italic">Bắt buộc (*)</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Họ và tên */}
          <div>
            <Input
              id="lastName"
              {...register("lastName")}
              placeholder="Họ *"
              className="h-12 border-gray-300 rounded"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message as string}</p>
            )}
          </div>

          <div>
            <Input
              id="firstName"
              {...register("firstName")}
              placeholder="Tên *"
              className="h-12 border-gray-300 rounded"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message as string}</p>
            )}
          </div>

          {/* Country và Email */}
          
          <div>
            <select
              id="country"
              {...register("country", { required: "Vui lòng chọn quốc gia hoặc vùng" })}
              className="w-full h-12 px-3 pr-10 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white  appearance-none"
            >
              <option value="">Quốc gia/Vùng *</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">{errors.country.message as string}</p>
            )}
          </div>
          
          <div>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Email (Domain công ty) *"
              className="h-12 border-gray-300 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
            )}
          </div>

          {/* Số điện thoại */}
          {/* <div className="relative">
            <Input
              id="mobilePhone"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Số điện thoại (+84) *"
              className="border-gray-300 rounded "
              {...register("mobilePhone")}
              onKeyDown={(e) => {
                if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
                  e.preventDefault();
                }
              }}
              onPaste={(e) => {
                const pasted = e.clipboardData.getData("Text");
                if (!/^\d+$/.test(pasted)) {
                  e.preventDefault();
                }
              }}
            />
            {errors.mobilePhone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.mobilePhone.message as string}
              </p>
            )}
          </div>

          <div className="relative">
            <Input
              id="businessPhone"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Số điện thoại doanh nghiệp *"
              className="border-gray-300 rounded placeholder-gray-400"
              {...register("businessPhone")}
              onKeyDown={(e) => {
                if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
                  e.preventDefault();
                }
              }}
              onPaste={(e) => {
                const pasted = e.clipboardData.getData("Text");
                if (!/^\d+$/.test(pasted)) {
                  e.preventDefault();
                }
              }}
            />
          </div> */}


        <div className="relative">
          {/* <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">(+84)</span> */}
          <Input
            id="mobilePhone"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Số điện thoại *"
            className="border-gray-300 rounded "
            {...register("mobilePhone")}
            onKeyDown={(e) => {
              if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
                e.preventDefault();
              }
            }}
            onPaste={(e) => {
              const pasted = e.clipboardData.getData("Text");
              if (!/^\d+$/.test(pasted)) {
                e.preventDefault();
              }
            }}
          />
          {errors.mobilePhone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.mobilePhone.message as string}
            </p>
          )}
        </div>

        {/* <div className="relative">
          <Input
            id="mobilePhone"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Số điện thoại doanh nghiệp *"
            className="border-gray-300 rounded "
            {...register("mobilePhone")}
            onKeyDown={(e) => {
              if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
                e.preventDefault();
              }
            }}
            onPaste={(e) => {
              const pasted = e.clipboardData.getData("Text");
              if (!/^\d+$/.test(pasted)) {
                e.preventDefault();
              }
            }}
          />
          {errors.mobilePhone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.mobilePhone.message as string}
            </p>
          )}
        </div> */}


          {/* Company và Job Title */}
          <div>
            <Input
              id="company"
              {...register("company")}
              placeholder="Công ty *"
              className="h-12 border-gray-300 rounded"
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">{errors.company.message as string}</p>
            )}
          </div>

          {/* <div>
              <select
                  id="jobTitle"
                  {...register("jobTitle", { required: "Vui lòng chọn chức vụ" })}
                  className={`
                    w-full h-12 px-3 pr-10 
                    border border-gray-300 rounded 
                    text-gray-700 bg-white 
                    appearance-none 
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  `}
                >
                  <option value="">Chức vụ *</option>
                  <option value="Board Level">Board Level</option>
                  <option value="Owner/Partner">Owner/Partner</option>
                  <option value="C-Level Executive">C-Level Executive</option>
                  <option value="VP/SVP/Director">VP/SVP/Director</option>
                  <option value="Manager">Manager</option>
                  <option value="Professional/Staff/Associate">Professional/Staff/Associate</option>
                  <option value="Other">Other</option>
                </select>

            {errors.jobTitle && (
              <p className="text-red-500 text-sm mt-1">{errors.jobTitle.message as string}</p>
            )}
          </div> */}

          {/* Profession và Job Level */}

          {/* <div>
            <Input
              id="profession"
              {...register("profession")}
              placeholder="Nghề nghiệp *"
              className="h-12 border-gray-300 rounded"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message as string}</p>
            )}
          </div> */}

          {/* <div>
            <select
              id="profession"
              {...register("profession", { required: "Vui lòng chọn quốc gia hoặc vùng" })}
              className="w-full h-12 px-3 pr-10 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
            >
              <option value="">Nghề nghiệp *</option>
              {profession.map((profession) => (
                <option key={profession.code} value={profession.code}>
                  {profession.name}
                </option>
              ))}
            </select>
            {errors.profession && (
            <p className="text-red-500 text-sm mt-1">
              {errors.profession.message as string}
            </p>
          )}
          </div> */}


          <div>
            <Input
              id="jobLevel"
              {...register("jobLevel")}
              placeholder="Vị trí *"
              className="h-12 border-gray-300 rounded"
            />
            {errors.jobLevel && (
              <p className="text-red-500 text-sm mt-1">{errors.jobLevel.message as string}</p>
            )}
          </div>

          {/* Industry */}
{/* 
          <div>
            <Input
              id="industry"
              {...register("industry")}
              placeholder="Lĩnh vực công tác *"
              className="h-12 border-gray-300 rounded"
            />
            {errors.jobLevel && (
              <p className="text-red-500 text-sm mt-1">{errors.jobLevel.message as string}</p>
            )}
          </div> */}

          <div>
            <select
              id="industry"
              {...register("industry", { required: "Vui lòng chọn lĩnh vực công tác" })}
              className="w-full h-12 px-3 pr-10 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
            >
              <option value="">Lĩnh vực công tác *</option>
              {industries.map((industry) => (
                <option key={industry.code} value={industry.code}>
                  {industry.name}
                </option>
              ))}
            </select>
            {errors.industry && (
              <p className="text-red-500 text-sm mt-1">{errors.industry.message as string}</p>
            )}
          </div>

        </div>

       
         

        {/* Checkbox và Submit */}
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              required
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />

          <p className="text-lg text-gray-600 leading-relaxed">
            Bằng cách hoàn thành biều mẫu này, bạn đã xác nhận rắng bạn 18 tuổi trở lên.
            {/* <a
              href="https://www.intel.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Privacy Notice
            </a>. */}
          </p>

          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-32 h-12 bg-[#0169B9] hover:bg-[#003A7F] text-white font-medium  rounded-none"
          >
            {isSubmitting ? "Đang gửi..." : "Xác nhận"}
          </Button>

        </div>
        </div> 
      </form>
    </div>
  );
};