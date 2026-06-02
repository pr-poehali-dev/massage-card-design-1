const ART_URL =
  "https://cdn.poehali.dev/projects/28e66065-e891-4857-a6a2-435db46f3730/files/7709d07d-d8d4-4029-88d2-bfb97c9abdb3.jpg";

const GOLD = "#c9a84c";
const GOLD_LIGHT = "#e8c97a";

const Divider = () => (
  <div className="flex items-center gap-3 w-full my-5">
    <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${GOLD}44)` }} />
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 0L8.2 5.8L14 7L8.2 8.2L7 14L5.8 8.2L0 7L5.8 5.8L7 0Z" fill={GOLD} opacity="0.7" />
    </svg>
    <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${GOLD}44)` }} />
  </div>
);

const ContactRow = ({
  icon,
  label,
  sublabel,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  href?: string;
}) => {
  const inner = (
    <div className="group flex items-center gap-4 py-3">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{ border: `1px solid ${GOLD}55`, background: "rgba(201,168,76,0.08)" }}
      >
        <span style={{ color: GOLD }} className="opacity-80 group-hover:opacity-100 transition-opacity">{icon}</span>
      </div>
      <div>
        <p className="font-body text-[13px] font-light tracking-wide" style={{ color: "#e8dfc8" }}>{label}</p>
        {sublabel && <p className="font-body text-[10px] tracking-widest uppercase mt-0.5" style={{ color: `${GOLD}99` }}>{sublabel}</p>}
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : (
    <div>{inner}</div>
  );
};

const Index = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{ background: "linear-gradient(160deg, #0b1a12 0%, #0f2018 50%, #091510 100%)" }}
    >
      {/* Фоновые блики */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10"
        style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)`, filter: "blur(60px)" }}
      />
      <div
        className="fixed bottom-0 right-0 w-72 h-72 rounded-full pointer-events-none opacity-5"
        style={{ background: "radial-gradient(circle, #2d6a4f 0%, transparent 70%)", filter: "blur(40px)" }}
      />

      {/* Карточка */}
      <div
        className="relative w-full max-w-sm rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(170deg, #112318 0%, #0d1e15 60%, #091510 100%)",
          border: `1px solid ${GOLD}33`,
          boxShadow: `0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px ${GOLD}11, inset 0 1px 0 ${GOLD}22`,
        }}
      >
        {/* Верхняя золотая полоска */}
        <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, ${GOLD_LIGHT}, ${GOLD}, transparent)` }} />

        {/* Шапка */}
        <div className="relative flex flex-col items-center pt-9 pb-2 px-8 overflow-hidden">
          {/* Угловые орнаменты */}
          <svg className="absolute top-3 left-3 opacity-30" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M2 30 L2 2 L30 2" stroke={GOLD} strokeWidth="1" fill="none" />
            <path d="M2 2 L8 2 M2 2 L2 8" stroke={GOLD} strokeWidth="1.5" />
          </svg>
          <svg className="absolute top-3 right-3 opacity-30" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M30 30 L30 2 L2 2" stroke={GOLD} strokeWidth="1" fill="none" />
            <path d="M30 2 L24 2 M30 2 L30 8" stroke={GOLD} strokeWidth="1.5" />
          </svg>

          {/* Иллюстрация */}
          <div className="animate-float mb-4 relative">
            <div
              className="w-28 h-28 rounded-full overflow-hidden"
              style={{
                border: `1px solid ${GOLD}55`,
                boxShadow: `0 0 30px ${GOLD}22, 0 8px 32px rgba(0,0,0,0.5)`,
              }}
            >
              <img src={ART_URL} alt="В тихом омуте" className="w-full h-full object-cover" />
            </div>
            <div
              className="absolute -inset-3 rounded-full -z-10 opacity-20"
              style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)`, filter: "blur(12px)" }}
            />
          </div>

          {/* Название */}
          <div className="text-center opacity-0 animate-fade-in-up">
            <p className="font-body text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: `${GOLD}88` }}>
              Массажный салон
            </p>
            <h1
              className="font-display font-light leading-tight"
              style={{ fontSize: "2rem", color: "#f0e8d0", letterSpacing: "0.04em" }}
            >
              В тихом омуте
            </h1>
            <p
              className="font-display italic text-[0.95rem] font-light mt-1"
              style={{ color: `${GOLD}cc`, letterSpacing: "0.12em" }}
            >
              spa &amp; massage
            </p>
          </div>

          <Divider />

          {/* Слоган */}
          <p
            className="font-body text-[10px] font-light tracking-[0.3em] uppercase text-center mb-2 opacity-0 animate-fade-in-up-delay"
            style={{ color: `${GOLD}77` }}
          >
            Там, где время замирает
          </p>
        </div>

        {/* Контакты */}
        <div className="px-7 pb-2">
          <div style={{ borderTop: `1px solid ${GOLD}22` }}>
            <ContactRow
              href="tel:+79001234567"
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.08 11.4a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 .78h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              }
              label="+7 (900) 123-45-67"
              sublabel="Запись по телефону"
            />
          </div>
          <div style={{ borderTop: `1px solid ${GOLD}22` }}>
            <ContactRow
              href="https://instagram.com/v_tihom_omute"
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              }
              label="@v_tihom_omute"
              sublabel="Instagram"
            />
          </div>
          <div style={{ borderTop: `1px solid ${GOLD}22` }}>
            <ContactRow
              href="https://v-tihom-omute.ru"
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              }
              label="v-tihom-omute.ru"
              sublabel="Наш сайт"
            />
          </div>
        </div>

        {/* График работы */}
        <div
          className="mx-6 my-5 rounded-xl px-5 py-4 opacity-0 animate-fade-in-up-delay2"
          style={{ background: "rgba(201,168,76,0.05)", border: `1px solid ${GOLD}22` }}
        >
          <p
            className="font-body text-[9px] tracking-[0.3em] uppercase text-center mb-4"
            style={{ color: `${GOLD}77` }}
          >
            График работы
          </p>
          <div className="flex justify-between items-center">
            <div className="text-center flex-1">
              <p className="font-body text-[10px] tracking-widest uppercase mb-1" style={{ color: `${GOLD}66` }}>Пн — Пт</p>
              <p className="font-display text-[1.1rem] font-light" style={{ color: "#e8dfc8" }}>10:00 – 21:00</p>
            </div>
            <div className="w-px h-10 mx-2" style={{ background: `${GOLD}33` }} />
            <div className="text-center flex-1">
              <p className="font-body text-[10px] tracking-widest uppercase mb-1" style={{ color: `${GOLD}66` }}>Сб — Вс</p>
              <p className="font-display text-[1.1rem] font-light" style={{ color: "#e8dfc8" }}>11:00 – 20:00</p>
            </div>
          </div>
        </div>

        {/* Нижний орнамент */}
        <div className="relative flex items-center mx-6 mb-5">
          <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${GOLD}44, transparent)` }} />
          <span className="mx-3 font-display italic text-[11px]" style={{ color: `${GOLD}55` }}>✦</span>
        </div>

        {/* Нижняя золотая полоска */}
        <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, ${GOLD_LIGHT}, ${GOLD}, transparent)` }} />
      </div>
    </div>
  );
};

export default Index;
