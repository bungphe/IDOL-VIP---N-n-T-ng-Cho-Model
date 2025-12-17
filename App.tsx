import React from 'react';
import { 
  Crown, 
  DollarSign, 
  Gift, 
  Gamepad2, 
  Lock, 
  Image as ImageIcon, 
  Users, 
  MessageCircle, 
  Trophy, 
  TrendingUp, 
  ShieldCheck, 
  Smartphone, 
  Headphones, 
  CreditCard, 
  CheckCircle,
  Clock,
  Zap,
  Star
} from 'lucide-react';

// --- Reusable Components ---

const Card = ({ title, icon: Icon, children, className = "", headerColor = "text-yellow-400" }: { title: string, icon: any, children?: React.ReactNode, className?: string, headerColor?: string }) => (
  <div className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl h-full flex flex-col ${className}`}>
    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>
    <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3 flex-shrink-0">
      <div className={`p-2 rounded-lg bg-white/10 ${headerColor}`}>
        <Icon size={24} strokeWidth={2.5} />
      </div>
      <h3 className={`text-xl font-bold uppercase leading-tight ${headerColor}`}>{title}</h3>
    </div>
    <div className="space-y-3 text-gray-200 flex-grow">
      {children}
    </div>
  </div>
);

const FeatureItem = ({ icon: Icon, text, highlight = false }: { icon: any, text: React.ReactNode, highlight?: boolean }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 min-w-[20px]">
      <Icon size={18} className={highlight ? "text-yellow-400" : "text-blue-300"} />
    </div>
    <p className={`text-sm md:text-base ${highlight ? "text-white font-medium" : "text-gray-300"}`}>{text}</p>
  </div>
);

const HighlightBox = ({ children }: { children?: React.ReactNode }) => (
  <div className="bg-gradient-to-r from-amber-500/20 to-orange-600/20 border border-amber-500/30 rounded-lg p-3 my-2 text-center">
    {children}
  </div>
);

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white selection:bg-amber-500 selection:text-black pb-12">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Top Center Glow (behind Title) */}
        <div className="absolute top-[-10%] left-[50%] transform -translate-x-1/2 w-[800px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
        
        {/* Side Glows */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[98%] mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16">
        
        {/* Header Section */}
        <header className="text-center mb-16 space-y-6">
          <div className="inline-block animate-bounce">
            <Crown size={48} className="text-yellow-400 mx-auto drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 drop-shadow-lg">
            IDOL VIP <span className="text-white text-3xl md:text-5xl block md:inline mt-2 md:mt-0">– Nền tảng cho Model</span>
          </h1>
          
          <div className="max-w-4xl mx-auto mt-6">
            <div className="bg-gradient-to-r from-indigo-900/80 to-purple-900/80 border border-indigo-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-[0_0_30px_rgba(79,70,229,0.2)]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Bạn giữ <span className="text-yellow-400 text-4xl">96,8%</span> lợi nhuận – Chi phí <span className="text-green-400 text-3xl">3,2%</span>
              </h2>
              <p className="text-indigo-200 text-lg md:text-xl font-medium uppercase tracking-wide">
                (Cao nhất thị trường – Kiếm gấp đôi nơi khác)
              </p>
            </div>
          </div>
        </header>

        {/* Masonry-like Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Thu Nhập */}
          <Card 
            title="1. Thu nhập siêu khủng & Cơ chế độc quyền" 
            icon={DollarSign}
            className="border-yellow-500/30 bg-gradient-to-b from-yellow-900/10 to-transparent lg:col-span-1 lg:row-span-2 lg:order-1"
          >
            <div className="text-sm space-y-2 mb-4">
              <p className="text-gray-300 flex justify-between">
                <span>Phí nền tảng:</span> <span className="text-green-400 font-bold">Chỉ 3,2% (thấp nhất ngành)</span>
              </p>
              <p className="text-gray-300 flex justify-between">
                <span>Bạn nhận:</span> <span className="text-yellow-400 font-bold">96,8% từ mọi nguồn</span>
              </p>
            </div>

            <HighlightBox>
              <div className="flex items-center justify-center gap-2 text-yellow-500 mb-1">
                <Crown size={20} />
                <span className="font-bold uppercase text-sm">Cơ chế lương cứng độc quyền</span>
              </div>
              <p className="text-2xl font-extrabold text-white">15 - 30 TRIỆU/THÁNG</p>
            </HighlightBox>

            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="bg-indigo-600/20 p-2 rounded-full text-indigo-400"><Clock size={18} /></div>
                <div>
                  <p className="font-bold text-white text-sm">Part-time (10-20 giờ/tuần):</p>
                  <p className="text-yellow-400 font-bold text-lg">20 - 35 triệu <span className="text-white text-sm font-normal">/tháng + Lương cứng</span></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-indigo-600/20 p-2 rounded-full text-indigo-400"><Clock size={18} /></div>
                <div>
                  <p className="font-bold text-white text-sm">Full-time (30-40 giờ/tuần):</p>
                  <p className="text-yellow-400 font-bold text-lg">70 - 100 triệu <span className="text-white text-sm font-normal">/tháng + Lương cứng</span></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-600/20 p-2 rounded-full text-red-400"><TrendingUp size={18} /></div>
                <div>
                  <p className="font-bold text-white text-sm">Top model:</p>
                  <p className="text-red-400 font-bold text-lg">trên 300 triệu <span className="text-white text-sm font-normal">/tháng (thực tế có người đạt)</span></p>
                </div>
              </div>
            </div>
          </Card>

          {/* Card 2: Cách kiếm tiền */}
          <Card 
            title="2. Cách kiếm tiền đa dạng" 
            icon={Gift} 
            headerColor="text-orange-400"
            className="lg:col-span-1 lg:row-span-2 lg:order-2"
          >
            <div className="grid gap-3">
              <FeatureItem icon={DollarSign} text="Tip công khai & private" highlight />
              <FeatureItem icon={Zap} text="Đồ chơi rung (Interactive toys)" highlight />
              <FeatureItem icon={Gamepad2} text="Trò chơi, ticket show" highlight />
              <FeatureItem icon={Lock} text="Show riêng tư" highlight />
              <FeatureItem icon={ImageIcon} text="Bán ảnh, video, clip ghi sẵn" highlight />
              <FeatureItem icon={Users} text="Fan Club (fan trả phí hàng tháng)" highlight />
              <FeatureItem icon={MessageCircle} text="Tin nhắn trả phí" highlight />
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/10 text-center mt-auto">
              <p className="font-bold text-yellow-400 flex items-center justify-center gap-2">
                <Zap size={16} /> Kiếm tiền ngay cả khi OFFLINE!
              </p>
            </div>
          </Card>

          {/* Card 3: Thi đấu */}
          <Card 
            title="3. Thi đấu & Bonus hấp dẫn" 
            icon={Trophy} 
            headerColor="text-green-400"
            className="lg:order-3"
          >
            <div className="space-y-4">
              <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/20">
                <h4 className="font-bold text-green-400 mb-1">Đua top hàng giờ & hàng tháng</h4>
                <p className="text-sm text-gray-300">Top cao: Nhận tiền thưởng hàng chục triệu</p>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <TrendingUp className="text-green-400" size={24} />
                <p className="text-sm font-medium">Tăng lượt hiển thị <span className="text-gray-400">→</span> <span className="text-yellow-400">Kiếm thêm dễ dàng</span></p>
              </div>
            </div>
          </Card>

          {/* Card 4: Rút tiền */}
          <Card 
            title="4. Rút tiền Nhanh - An toàn" 
            icon={CreditCard} 
            headerColor="text-cyan-400"
            className="lg:order-5"
          >
            <div className="space-y-3">
              <FeatureItem icon={CheckCircle} text="Thanh toán nhanh chóng" />
              <div className="flex items-start gap-3">
                 <div className="mt-1 min-w-[20px]">
                    <CreditCard size={18} className="text-cyan-400" />
                  </div>
                  <div className="text-sm text-gray-300">
                    <p>Nhiều hình thức:</p>
                    <div className="flex gap-2 mt-1">
                      <span className="px-2 py-1 bg-pink-600 rounded text-xs font-bold text-white">Momo</span>
                      <span className="px-2 py-1 bg-blue-600 rounded text-xs font-bold text-white">Banking</span>
                    </div>
                  </div>
              </div>
              <FeatureItem icon={CheckCircle} text="Min rút thấp" />
              <FeatureItem icon={ShieldCheck} text="Bảo vệ 100% chargeback - Bạn luôn giữ tiền" highlight />
            </div>
          </Card>

           {/* Card 5: Bảo vệ */}
           <Card 
            title="5. Bảo vệ & Tiện ích tuyệt đối" 
            icon={ShieldCheck} 
            headerColor="text-purple-400"
            className="lg:order-4"
          >
            <div className="space-y-3">
              <FeatureItem icon={ShieldCheck} text={<span><span className="text-purple-400 font-bold">DMCA:</span> Xóa nội dung bị leak nhanh chóng</span>} />
              <FeatureItem icon={Smartphone} text="Stream bằng điện thoại – Không cần máy xịn" highlight />
              <FeatureItem icon={Headphones} text="Hỗ trợ 24/7" />
            </div>
          </Card>

          {/* Card 6: Summary / Why Choose */}
          <Card 
            title="Tại sao chọn IDOL VIP?" 
            icon={Star} 
            className="border-blue-500/50 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] lg:col-span-1 lg:order-6"
            headerColor="text-white"
          >
            <ul className="space-y-3">
              <li className="flex gap-2">
                <CheckCircle className="text-yellow-400 min-w-[20px]" size={20} />
                <span className="text-white">Có LƯƠNG CỨNG ĐẢM BẢO (15-30 Triệu)</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-yellow-400 min-w-[20px]" size={20} />
                <span className="text-white">Giữ gần như TOÀN BỘ thu nhập (96,8%)</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-yellow-400 min-w-[20px]" size={20} />
                <span className="text-white">Cùng traffic & công cụ → <span className="font-bold text-yellow-400">KIẾM GẤP ĐÔI</span> nơi khác</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-yellow-400 min-w-[20px]" size={20} />
                <span className="text-white">Tự do thời gian, tự do biểu đạt</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-yellow-400 min-w-[20px]" size={20} />
                <span className="text-white">Nhiều model đã kiếm hàng trăm triệu / tháng</span>
              </li>
            </ul>
            
            <div className="mt-6 pt-4 border-t border-white/20 text-center mt-auto">
              <p className="text-indigo-200 text-sm mb-2">Bạn chỉ cần đẹp, chịu khó tương tác</p>
              <p className="text-yellow-400 font-bold text-lg animate-pulse">→ Thu nhập sẽ tăng rất nhanh!</p>
            </div>
          </Card>

        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center pb-10">
          <button className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-black transition-all duration-200 bg-yellow-400 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:bg-yellow-300 hover:scale-105 shadow-[0_0_30px_rgba(250,204,21,0.5)]">
             <span>ĐĂNG KÝ NGAY HÔM NAY</span>
             <Crown className="ml-2 w-6 h-6 group-hover:rotate-12 transition-transform" />
             <div className="absolute -inset-3 rounded-full border border-yellow-400 opacity-50 animate-ping pointer-events-none"></div>
          </button>
          <p className="mt-4 text-gray-400 text-sm">* Nội dung tạo bằng AI mô phỏng theo yêu cầu</p>
        </div>

      </div>
    </div>
  );
};

export default App;