const LOGO_URL =
  "https://cdn.poehali.dev/projects/28e66065-e891-4857-a6a2-435db46f3730/files/776273c5-bfa3-4f8f-aa6a-5b7ed38b9858.jpg";

const ContactLink = ({
  href,
  icon,
  label,
  sublabel,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-4 py-[14px] border-b border-rose-100 last:border-0 transition-all duration-300 hover:pl-2"
  >
    <span className="w-9 h-9 rounded-full bg-rose-50 flex items-center justify-center text-rose-400 group-hover:bg-rose-100 transition-colors duration-300 shrink-0">
      {icon}
    </span>
    <div className="flex flex-col">
      <span className="font-body text-[13px] font-medium text-[#6b4455] tracking-wide">
        {label}
      </span>
      {sublabel && (
        <span className="font-body text-[11px] text-rose-300 mt-0.5">
          {sublabel}
        </span>
      )}
    </div>
    <span className="ml-auto text-rose-200 group-hover:text-rose-400 transition-colors duration-300 text-sm">
      →
    </span>
  </a>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.08 11.4a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 .78h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const InstaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const ChatIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const TgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const WebIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const Index = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{
        background:
          "radial-gradient(ellipse at 20% 20%, #fff0f5 0%, #fce7ef 40%, #fdf4f7 100%)",
      }}
    >
      {/* Декоративные блобы */}
      <div
        className="fixed top-[-80px] right-[-80px] w-80 h-80 rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ffb6cc 0%, transparent 70%)" }}
      />
      <div
        className="fixed bottom-[-60px] left-[-60px] w-64 h-64 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f78fb3 0%, transparent 70%)" }}
      />

      {/* Карточка */}
      <div
        className="relative w-full max-w-sm rounded-3xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,182,204,0.35)",
          boxShadow:
            "0 32px 64px rgba(220,80,120,0.13), 0 8px 24px rgba(220,80,120,0.08)",
        }}
      >
        {/* Верхняя полоска */}
        <div
          className="h-1 w-full"
          style={{
            background:
              "linear-gradient(90deg, #f9a8c0 0%, #f06292 40%, #ec407a 70%, #f9a8c0 100%)",
          }}
        />

        {/* Шапка */}
        <div className="flex flex-col items-center pt-10 pb-6 px-8">
          {/* Логотип */}
          <div className="animate-float mb-5 relative">
            <div
              className="w-24 h-24 rounded-full overflow-hidden"
              style={{ boxShadow: "0 8px 32px rgba(236,64,122,0.28)" }}
            >
              <img
                src={LOGO_URL}
                alt="Butterfly Spa"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -inset-2 rounded-full opacity-20 -z-10"
              style={{
                background: "radial-gradient(circle, #f06292 0%, transparent 70%)",
                filter: "blur(10px)",
              }}
            />
          </div>

          {/* Название */}
          <div className="text-center opacity-0 animate-fade-in-up">
            <h1 className="font-display text-[2.7rem] font-light leading-none tracking-wide text-[#8b2252]">
              Butterfly
            </h1>
            <p className="font-display italic text-[1.05rem] font-light text-rose-400 tracking-[0.22em] mt-1">
              Spa &amp; Massage
            </p>
          </div>

          {/* Разделитель */}
          <div className="flex items-center gap-3 mt-5 w-full opacity-0 animate-fade-in-up-delay">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-rose-200" />
            <span className="text-rose-300 text-xs">✦</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-rose-200" />
          </div>

          {/* Слоган */}
          <p className="font-body text-[10px] font-light tracking-[0.28em] uppercase text-rose-300 mt-3 opacity-0 animate-fade-in-up-delay2">
            Искусство расслабления
          </p>
        </div>

        {/* Контакты */}
        <div className="px-7 pb-4">
          <ContactLink
            href="tel:+79001234567"
            icon={<PhoneIcon />}
            label="+7 (900) 123-45-67"
            sublabel="Звонки и SMS"
          />
          <ContactLink
            href="https://maps.google.com"
            icon={<MapIcon />}
            label="ул. Цветочная, 14"
            sublabel="Москва — 5 мин от метро"
          />
          <ContactLink
            href="https://instagram.com/butterfly_spa"
            icon={<InstaIcon />}
            label="@butterfly_spa"
            sublabel="Instagram"
          />
          <ContactLink
            href="https://wa.me/79001234567"
            icon={<ChatIcon />}
            label="WhatsApp"
            sublabel="Записаться онлайн"
          />
          <ContactLink
            href="https://t.me/butterfly_spa"
            icon={<TgIcon />}
            label="Telegram"
            sublabel="@butterfly_spa_bot"
          />
          <ContactLink
            href="https://butterfly-spa.ru"
            icon={<WebIcon />}
            label="butterfly-spa.ru"
            sublabel="Наш сайт"
          />
        </div>

        {/* График работы */}
        <div
          className="mx-7 mb-7 rounded-2xl px-5 py-4"
          style={{ background: "linear-gradient(135deg, #fff0f5, #fce4ec)" }}
        >
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-rose-300 mb-3">
            График работы
          </p>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <p className="font-body text-[11px] text-rose-300 mb-1">Пн — Пт</p>
              <p className="font-display text-[1.15rem] font-light text-[#8b2252]">
                10:00 – 21:00
              </p>
            </div>
            <div className="w-px h-8 bg-rose-200" />
            <div className="text-center">
              <p className="font-body text-[11px] text-rose-300 mb-1">Сб — Вс</p>
              <p className="font-display text-[1.15rem] font-light text-[#8b2252]">
                11:00 – 20:00
              </p>
            </div>
          </div>
        </div>

        {/* Нижняя полоска */}
        <div
          className="h-1 w-full"
          style={{
            background:
              "linear-gradient(90deg, #f9a8c0 0%, #f06292 40%, #ec407a 70%, #f9a8c0 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default Index;
