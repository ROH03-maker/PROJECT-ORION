import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Send, ShieldAlert, Mail, MessageSquare, 
  Linkedin, Github, Instagram, CheckCircle2, ShieldCheck, Share2 
} from "lucide-react";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={props.className}
    {...props}
  >
    <path d="M12.003 21.398c-1.636 0-3.23-.427-4.636-1.238l-4.964.13.134-4.823c-.887-1.472-1.353-3.15-1.352-4.871C1.19 4.966 5.86.304 11.61.304c2.784.001 5.4.108 7.37 2.08 1.97 1.97 3.056 4.593 3.054 7.382-.007 5.626-4.678 10.288-10.428 10.288zm-.004-19.144c-4.9 0-8.887 3.972-8.892 8.854a8.805 8.805 0 001.218 4.468l-.8 2.875 2.95-.078c1.332.723 2.83 1.106 4.36 1.107 4.904 0 8.893-3.973 8.899-8.855a8.814 8.814 0 00-2.607-6.27c-1.745-1.75-4.067-2.091-6.128-2.101zm5.132 12.553c-.23.65-1.156 1.189-1.583 1.25-.426.062-.953.085-2.923-.733-2.528-1.048-4.062-3.642-4.188-3.81-.126-.168-1.054-1.398-1.054-2.665.001-1.267.644-1.892.903-2.155.26-.263.51-.315.68-.315h.49c.154 0 .356-.057.558.431.202.488.7 1.701.76 1.821.061.121.096.262.013.43-.082.169-.136.27-.27.43-.134.161-.28.361-.403.49-.144.145-.293.303-.122.585.17.28.74 1.187 1.54 1.896.67.604 1.242.793 1.516.924.275.13.435.11.6-.073.166-.182.7-.813.89-1.09.192-.278.384-.23.644-.135.26.096 1.637.764 1.916.903.279.139.467.208.534.312.067.104.067.662-.162 1.314z" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={props.className}
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionSuccess, setTransmissionSuccess] = useState(false);
  const [stepMsg, setStepMsg] = useState("");

  const steps = [
    "SCANNING SECURE WEBSOCKET HOOK...",
    "CONSTRUCTING SHA-256 SYMMETRIC PACKET KEY...",
    "VERIFYING ANTI-INTRUSION SIGNATURES...",
    "COMMITTING CYBER PACKET TO ORION NODE..."
  ];

  const handleTransmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsTransmitting(true);
    setTransmissionSuccess(false);

    // Simulate cryptographic sending steps
    for (const step of steps) {
      setStepMsg(step);
      await new Promise(resolve => setTimeout(resolve, 600));
    }

    setIsTransmitting(false);
    setTransmissionSuccess(true);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Clear success message after 4s
    setTimeout(() => {
      setTransmissionSuccess(false);
    }, 4500);
  };

  const socialLinks = [
    {
      label: "rohitsarkarwork03@gmail.com",
      link: "mailto:rohitsarkarwork03@gmail.com",
      wrapperHover: "hover:border-[#ffd700] hover:bg-[#ffd700]/5 hover:shadow-[0_0_15px_rgba(255,215,0,0.2)]",
      iconContainer: "bg-[#ffd700]/5 border-[#ffd700]/10 text-[#ffd700] group-hover:bg-[#ffd700] group-hover:text-black group-hover:border-[#ffd700]",
      textHover: "group-hover:text-[#ffd700]",
      customIcon: (className: string) => <Mail className={className} />
    },
    {
      label: "whatsapp",
      link: "https://wa.me/918927598500",
      wrapperHover: "hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]",
      iconContainer: "bg-emerald-500/5 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
      textHover: "group-hover:text-emerald-400",
      customIcon: (className: string) => <WhatsAppIcon className={className} />
    },
    {
      label: "github",
      link: "https://github.com/roh03-maker",
      wrapperHover: "hover:border-white/50 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]",
      iconContainer: "bg-white/5 border-white/10 text-zinc-400 group-hover:bg-white group-hover:text-black group-hover:border-white",
      textHover: "group-hover:text-white",
      customIcon: (className: string) => <Github className={className} />
    },
    {
      label: "linkdin",
      link: "https://www.linkedin.com/in/rohit-sarkar-3a91423b8",
      wrapperHover: "hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/5 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]",
      iconContainer: "bg-[#00f0ff]/5 border-[#00f0ff]/20 text-[#00f0ff] group-hover:bg-cyan-500/10 group-hover:border-[#00f0ff] group-hover:text-[#00f0ff]",
      textHover: "group-hover:text-[#00f0ff]",
      customIcon: (className: string) => <Linkedin className={className} />
    },
    {
      label: "isntagram",
      link: "https://www.instagram.com/rrrohittt_3",
      wrapperHover: "hover:border-pink-500/50 hover:bg-pink-500/5 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)]",
      iconContainer: "bg-pink-500/5 border-pink-500/20 text-pink-400 group-hover:bg-gradient-to-tr group-hover:from-red-500 group-hover:to-pink-500 group-hover:text-white group-hover:border-pink-400",
      textHover: "group-hover:text-pink-400 lg:group-hover:text-pink-400",
      customIcon: (className: string) => <Instagram className={className} />
    },
    {
      label: "x handle",
      link: "https://x.com/rrrohittt_3",
      wrapperHover: "hover:border-white/50 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]",
      iconContainer: "bg-white/5 border-white/10 text-zinc-400 group-hover:bg-white group-hover:text-black group-hover:border-white",
      textHover: "group-hover:text-white",
      customIcon: (className: string) => <XIcon className={className} />
    }
  ];

  return (
    <div className="border border-[#00f0ff]/20 bg-[#020308]/60 p-6 rounded-lg relative overflow-hidden orion-corners select-none shadow-[0_0_20px_rgba(0,240,255,0.03)]">
      <div className="absolute top-2 right-2 text-[9px] font-mono text-zinc-500 uppercase tracking-widest">ENCRYPTED TELEMETRY CHANNELS</div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Contact Channels and Social links (6 columns) */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-[10px] text-[#00f0ff] font-mono tracking-widest block font-bold">// SECURE FREQUENCIES LINKAGE</span>
            <h3 className="font-display font-medium text-lg lg:text-xl text-white uppercase tracking-wider">
              Establish System Sync
            </h3>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-md">
              Are you an authorized contractor looking to coordinate custom cyber infrastructure designs? Force an automated connection through our secured visualizer relays below.
            </p>
          </div>

          <div className="space-y-3.5 pt-2">
            {socialLinks.map((sc, i) => {
              return (
                <a 
                  key={i}
                  href={sc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-3 bg-[#020308]/40 border border-[#00f0ff]/10 ${sc.wrapperHover} duration-200 rounded group cursor-pointer transition-all`}
                >
                  <div className={`p-2 border rounded group-hover:scale-105 duration-200 h-9 w-9 flex items-center justify-center transition-all ${sc.iconContainer}`}>
                    {sc.customIcon("w-4 h-4")}
                  </div>

                  <div className="flex items-center overflow-hidden">
                    <span className={`text-xs font-mono font-bold text-zinc-200 transition duration-200 break-all ${sc.textHover} ${sc.label.includes('@') ? 'lowercase tracking-normal' : 'uppercase tracking-widest'}`}>
                      {sc.label}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right: Uplink transmission form (6 columns) */}
        <div className="lg:col-span-6">
          <form onSubmit={handleTransmit} className="p-5 border border-[#00f0ff]/15 bg-[#020308]/80 rounded space-y-4 flex flex-col justify-between h-full shadow-[inset_0_0_15px_rgba(0,240,255,0.02)]">
            <div className="space-y-3">
              <span className="text-[9px] font-mono text-zinc-500 tracking-widest block font-bold">// ONSITE TRANSMITTER SOCKET</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[9px] font-mono text-[#00f0ff]/80 uppercase tracking-widest block">Operator Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="E.g. Captain Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={isTransmitting}
                    className="w-full bg-[#020308]/90 border border-[#00f0ff]/15 rounded px-3 py-2 text-xs font-mono text-[#00f0ff] outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff]/30 placeholder-zinc-650 transition"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[9px] font-mono text-[#00f0ff]/80 uppercase tracking-widest block">Authorized Email *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="E.g. vance@orion-labs.net"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={isTransmitting}
                    className="w-full bg-[#020308]/90 border border-[#00f0ff]/15 rounded px-3 py-2 text-xs font-mono text-[#00f0ff] outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff]/30 placeholder-zinc-650 transition"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-mono text-[#00f0ff]/80 uppercase tracking-widest block">Encryption Subject</label>
                <input 
                  type="text" 
                  placeholder="E.g. AEGIS API synchronization failure error"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  disabled={isTransmitting}
                  className="w-full bg-[#020308]/90 border border-[#00f0ff]/15 rounded px-3 py-2 text-xs font-mono text-[#00f0ff] outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff]/30 placeholder-zinc-650 transition"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-mono text-[#00f0ff]/80 uppercase tracking-widest block">Message Payload *</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Detail the parameters of your coordination request..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  disabled={isTransmitting}
                  className="w-full bg-[#020308]/90 border border-[#00f0ff]/15 rounded px-3 py-2.5 text-xs font-mono text-[#00f0ff] outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff]/30 placeholder-zinc-650 transition resize-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <AnimatePresence mode="wait">
                {isTransmitting ? (
                  <motion.div 
                    key="transmitting"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded flex items-center justify-center text-[10px] font-mono text-indigo-400 gap-2 uppercase tracking-wider font-bold"
                  >
                    <ShieldAlert className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
                    <span>{stepMsg}</span>
                  </motion.div>
                ) : transmissionSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded flex items-center justify-center text-[10px] font-mono text-emerald-400 gap-2 uppercase tracking-widest font-black glitch-text"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-400 animate-bounce" />
                    <span>TRANSMISSION SECURED BY ORION V4.9</span>
                  </motion.div>
                ) : (
                  <motion.button 
                    key="idle"
                    type="submit"
                    className="w-full py-2.5 bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 border border-[#00f0ff]/30 hover:border-[#00f0ff] rounded text-xs font-mono tracking-widest font-black uppercase text-[#00f0ff] flex items-center justify-center gap-2 cursor-pointer transition duration-300 shadow-[0_0_12px_rgba(0,240,255,0.08)]"
                  >
                    <Send className="w-3.5 h-3.5" /> DEPLOY MESSAGE VECTORS
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
