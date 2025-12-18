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
  Star,
  Facebook,
  Send,
  Coins,
  Video,
  Award,
  Mail,
  Box,
  ChevronRight,
  Trash2,
  PhoneCall
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
  <div className="flex items-center gap-4">
    <div className="min-w-[32px] flex justify-center text-yellow-500">
      <Icon size={24} strokeWidth={2} />
    </div>
    <p className={`text-base md:text-lg ${highlight ? "text-white font-medium" : "text-gray-200"}`}>{text}</p>
  </div>
);

const SocialButtons = ({ compact = false }: { compact?: boolean }) => (
  <div className={`flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-5xl mx-auto ${compact ? 'mt-8' : 'mt-12'}`}>
    {/* FB Group */}
    <a 
      href="https://www.facebook.com/groups/242405869514841" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group flex items-center justify-between w-full md:w-auto ${compact ? 'px-6 py-3 text-sm' : 'px-8 py-4'} bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_5px_15px_rgba(37,99,235,0.4)]`}
    >
      <span className="flex items-center gap-3">
        <Facebook size={compact ? 20 : 24} /> Group FB
      </span>
      <span className={`ml-4 ${compact ? 'text-[10px]' : 'text-xs'} opacity-70 group-hover:opacity-100 transition-opacity`}>Tham gia ngay →</span>
    </a>

    {/* Fanpage */}
    <a 
      href="https://www.facebook.com/Idolvipcom/" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group flex items-center justify-between w-full md:w-auto ${compact ? 'px-6 py-3 text-sm' : 'px-8 py-4'} bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_5px_15px_rgba(219,39,119,0.4)]`}
    >
      <span className="flex items-center gap-3">
        <Users size={compact ? 20 : 24} /> Fanpage
      </span>
      <span className={`ml-4 ${compact ? 'text-[10px]' : 'text-xs'} opacity-70 group-hover:opacity-100 transition-opacity`}>Theo dõi →</span>
    </a>

    {/* Telegram */}
    <a 
      href="https://t.me/gruopidolvip" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group flex items-center justify-between w-full md:w-auto ${compact ? 'px-6 py-3 text-sm' : 'px-8 py-4'} bg-[#229ED9] hover:bg-[#2CA5E0] text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_5px_15px_rgba(34,158,217,0.4)]`}
    >
      <span className="flex items-center gap-3">
        <Send size={compact ? 20 : 24} /> Group Telegram
      </span>
      <span className={`ml-4 ${compact ? 'text-[10px]' : 'text-xs'} opacity-70 group-hover:opacity-100 transition-opacity`}>Vào Nhóm →</span>
    </a>
  </div>
);

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white selection:bg-amber-500 selection:text-black pb-12">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[50%] transform -translate-x-1/2 w-[800px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
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

          <SocialButtons compact />
        </header>

        {/* Masonry-like Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Thu Nhập (Golden Frame) */}
          <div className="lg:col-span-1 lg:row-span-2 lg:order-1 p-[2px] rounded-2xl bg-gradient-to-br from-[#bf953f] via-[#fcf6ba] to-[#aa771c] shadow-[0_0_20px_rgba(191,149,63,0.3)]">
            <div className="bg-[#1A0B2E] rounded-[calc(1rem-2px)] p-6 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-2 left-2 text-yellow-500 opacity-60">
                <Coins size={40} strokeWidth={1.5} />
              </div>
              <div className="absolute top-[-10px] right-2 text-yellow-400">
                <Crown size={50} strokeWidth={1} />
              </div>

              <div className="flex items-center gap-3 mb-6 pt-6 z-10 border-b border-yellow-500/30 pb-4">
                 <h3 className="text-xl font-bold uppercase leading-tight text-yellow-400">
                   1. THU NHẬP SIÊU KHỦNG & CƠ CHẾ ĐỘC QUYỀN
                 </h3>
              </div>

              <div className="space-y-6 flex-grow z-10">
                <div className="text-sm space-y-2">
                  <p className="text-gray-300 flex justify-between">
                    <span>Phí nền tảng:</span> <span className="text-green-400 font-bold">Chỉ 3,2% (thấp nhất ngành)</span>
                  </p>
                  <p className="text-gray-300 flex justify-between">
                    <span>Bạn nhận:</span> <span className="text-yellow-400 font-bold">96,8% từ mọi nguồn kiếm được</span>
                  </p>
                </div>

                <div className="border-[1.5px] border-yellow-500/50 rounded-xl p-4 text-center bg-gradient-to-b from-yellow-500/10 to-transparent shadow-[inset_0_0_15px_rgba(234,179,8,0.1)]">
                  <div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
                    <ShieldCheck size={24} />
                    <span className="font-bold uppercase text-sm tracking-wider">Cơ chế lương cứng độc quyền:</span>
                  </div>
                  <p className="text-2xl font-black text-white glow-text">15 - 30 TRIỆU/THÁNG</p>
                </div>

                <div className="space-y-5 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-500">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">Part-time (10-20 giờ/tuần):</p>
                      <p className="text-yellow-400 font-bold text-lg">20 - 35 triệu <span className="text-gray-400 text-xs font-normal">/tháng + Lương cứng</span></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-500">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">Full-time (30-40 giờ/tuần):</p>
                      <p className="text-yellow-400 font-bold text-lg">70 - 100 triệu <span className="text-gray-400 text-xs font-normal">/tháng + Lương cứng</span></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full border border-red-500/30 bg-red-500/5 text-red-400">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">Top model:</p>
                      <p className="text-red-400 font-bold text-lg">trên 300 triệu <span className="text-gray-400 text-xs font-normal">/tháng (thực tế có người đạt)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Cách kiếm tiền đa dạng */}
          <div className="lg:col-span-1 lg:row-span-2 lg:order-2 p-[2px] rounded-2xl bg-gradient-to-br from-[#bf953f] via-[#fcf6ba] to-[#aa771c] shadow-[0_0_20px_rgba(191,149,63,0.3)]">
            <div className="bg-[#1A0B2E] rounded-[calc(1rem-2px)] p-6 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-2 left-2 text-yellow-500 opacity-80 animate-pulse">
                <Box size={44} strokeWidth={1.5} />
              </div>
              <div className="flex items-center gap-3 mb-6 pt-8 z-10 border-b border-yellow-500/30 pb-4">
                 <h3 className="text-xl font-bold uppercase leading-tight text-yellow-400">
                   2. CÁCH KIẾM TIỀN ĐA DẠNG
                 </h3>
              </div>
              <div className="space-y-5 flex-grow z-10">
                <FeatureItem icon={Coins} text="Tip công khai & private" />
                <FeatureItem icon={Gamepad2} text="Đồ chơi rung" />
                <FeatureItem icon={Gamepad2} text="Trò chơi, ticket show" />
                <FeatureItem icon={Lock} text="Show riêng tư" />
                <FeatureItem icon={Video} text="Bán ảnh, video, clip ghi sẵn" />
                <FeatureItem icon={Award} text="Fan Club (fan trả phí hàng tháng)" />
                <FeatureItem icon={Mail} text="Tin nhắn trả phí" />
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-xl font-bold text-yellow-400 glow-text flex items-center justify-center gap-2">
                  <TrendingUp size={22} /> → Kiếm tiền ngay cả khi OFFLINE!
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Thi đấu & Bonus hấp dẫn */}
          <div className="lg:order-3 p-[2px] rounded-2xl bg-gradient-to-br from-[#22c55e] via-[#4ade80] to-[#15803d] shadow-[0_0_25px_rgba(34,197,94,0.4)]">
            <div className="bg-[#111827] rounded-[calc(1rem-2px)] p-6 h-full flex flex-col relative overflow-hidden">
              <div className="flex items-center justify-between mb-8 z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg text-green-400 shadow-[0_0_10px_rgba(74,222,128,0.3)]">
                    <Trophy size={32} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-black uppercase leading-tight text-[#4ade80] tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    3. THI ĐẤU & BONUS<br/>HẤP DẪN
                  </h3>
                </div>
                <div className="text-[#4ade80] animate-bounce-slow">
                  <TrendingUp size={48} strokeWidth={3} />
                </div>
              </div>
              <div className="space-y-5 flex-grow z-10 px-2">
                <div className="flex items-baseline gap-2">
                   <p className="text-lg text-white font-medium">
                     <span className="text-[#d9f99d] font-bold">Đua top</span> hàng giờ & hàng tháng
                   </p>
                </div>
                <div className="flex items-baseline gap-2 pb-6 border-b border-green-500/20">
                   <p className="text-lg text-white font-medium">
                     <span className="text-[#d9f99d] font-bold">Top cao:</span> Nhận tiền thưởng hàng chục triệu
                   </p>
                </div>
                <div className="relative mt-4 p-[1.5px] rounded-xl bg-gradient-to-r from-green-500/50 via-green-400 to-green-600/50 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <div className="bg-[#0f172a] rounded-[calc(0.75rem-1.5px)] p-4 flex items-center gap-4">
                    <div className="bg-green-500/10 p-2 rounded-lg">
                      <TrendingUp className="text-[#4ade80]" size={32} strokeWidth={2.5} />
                    </div>
                    <div className="flex-grow">
                      <p className="text-lg font-bold text-white flex items-center gap-2">
                        Tăng lượt hiển thị <ChevronRight size={20} className="text-green-400" /> 
                      </p>
                      <p className="text-xl font-black text-[#4ade80] leading-tight">Kiếm thêm dễ dàng</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 blur-[40px] pointer-events-none"></div>
            </div>
          </div>

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
              <FeatureItem icon={ShieldCheck} text="Bảo vệ 100% chargeback" highlight />
            </div>
          </Card>

           {/* Card 5: Bảo vệ & Tiện ích tuyệt đối (Purple Neon Theme matched with image) */}
           <div className="lg:order-4 p-[2px] rounded-2xl bg-gradient-to-br from-[#c026d3] via-[#e879f9] to-[#701a75] shadow-[0_0_25px_rgba(192,38,211,0.4)]">
            <div className="bg-[#111827] rounded-[calc(1rem-2px)] p-6 h-full flex flex-col relative overflow-hidden">
              {/* Header with Lock and Phone */}
              <div className="flex items-center justify-between mb-8 z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-xl text-purple-400 shadow-[0_0_15px_rgba(192,38,211,0.3)]">
                    <Lock size={36} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-black uppercase leading-tight text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    5. BẢO VỆ & TIỆN<br/>ÍCH TUYỆT ĐỐI
                  </h3>
                </div>
                <div className="text-purple-400 animate-pulse">
                  <Smartphone size={44} strokeWidth={1.5} />
                </div>
              </div>

              {/* Glowing Line Separator */}
              <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8"></div>

              {/* Main Content List */}
              <div className="space-y-6 flex-grow z-10">
                {/* DMCA Item */}
                <div className="flex items-center gap-5">
                   <div className="p-3 bg-purple-500/10 rounded-full text-purple-400">
                     <Trash2 size={28} />
                   </div>
                   <p className="text-lg text-white font-medium">
                     <span className="text-yellow-400 font-bold">DMCA:</span> Xóa nội dung bị<br/>leak nhanh chóng
                   </p>
                </div>

                {/* Stream Phone Item */}
                <div className="flex items-center gap-5">
                   <div className="p-3 bg-purple-500/10 rounded-full text-purple-400">
                     <PhoneCall size={28} />
                   </div>
                   <p className="text-lg text-white font-medium">
                     Stream bằng điện thoại<br/>– Không cần máy xịn
                   </p>
                </div>

                {/* Support Item */}
                <div className="flex items-center gap-5">
                   <div className="p-3 bg-purple-500/10 rounded-full text-purple-400">
                     <Headphones size={28} />
                   </div>
                   <p className="text-lg text-white font-medium">
                     Hỗ trợ 24/7
                   </p>
                </div>
              </div>

              {/* Decorative side glows */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/10 blur-[50px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-600/10 blur-[50px] pointer-events-none"></div>
            </div>
          </div>

          {/* Card 6: Summary */}
          <Card 
            title="Tại sao chọn IDOL VIP?" 
            icon={Star} 
            className="border-blue-500/50 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] lg:col-span-1 lg:order-6"
            headerColor="text-white"
          >
            <ul className="space-y-3">
              <li className="flex gap-2">
                <CheckCircle className="text-yellow-400 min-w-[20px]" size={20} />
                <span className="text-white">Có LƯƠNG CỨNG ĐẢM BẢO</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-yellow-400 min-w-[20px]" size={20} />
                <span className="text-white">Giữ 96,8% thu nhập</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-yellow-400 min-w-[20px]" size={20} />
                <span className="text-white">Kiếm gấp đôi nơi khác</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-yellow-400 min-w-[20px]" size={20} />
                <span className="text-white">Tự do thời gian</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-white/20 text-center mt-auto">
              <p className="text-yellow-400 font-bold text-lg animate-pulse">→ Thu nhập tăng rất nhanh!</p>
            </div>
          </Card>

        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center pb-20">
          <h2 className="text-3xl font-extrabold uppercase text-yellow-400 mb-8 glow-text tracking-widest">
            ĐĂNG KÝ NGAY HÔM NAY
          </h2>
          <SocialButtons />
        </div>

      </div>
    </div>
  );
};

export default App;