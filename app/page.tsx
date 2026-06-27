import SpaceCarousel from "@/components/SpaceCarousel";

const services = [
  {
    icon: "洗",
    title: "基础香波洗护",
    body: "温和清洁、吹干梳理、耳道清洁、脚底毛和指甲基础护理。",
    price: "¥88 起",
    color: "bg-sage"
  },
  {
    icon: "剪",
    title: "精致造型修剪",
    body: "按品种与生活习惯定制造型，重点处理脸部、四肢和尾部比例。",
    price: "¥168 起",
    color: "bg-coral"
  },
  {
    icon: "梳",
    title: "除浮毛护理",
    body: "针对换毛季、长毛和双层毛犬猫，减少打结和家中掉毛压力。",
    price: "¥128 起",
    color: "bg-blue"
  },
  {
    icon: "护",
    title: "皮毛 SPA",
    body: "保湿、柔顺、蓬松护理，适合皮毛干燥、毛发暗淡和赛级养护。",
    price: "¥198 起",
    color: "bg-gold"
  }
];

const plans = [
  {
    tag: "日常清洁",
    title: "轻享洗护",
    price: "¥88",
    items: ["基础洗澡与吹干", "耳道、脚底、指甲护理", "适合短毛与日常维护"]
  },
  {
    tag: "热门选择",
    title: "精致洗剪",
    price: "¥168",
    featured: true,
    items: ["基础洗护全流程", "全身造型与局部精修", "拍照反馈与护理建议"]
  },
  {
    tag: "皮毛养护",
    title: "SPA 护理",
    price: "¥198",
    items: ["深层清洁与护毛", "除浮毛、开结、柔顺", "适合长毛与换毛季"]
  }
];

const reviews = [
  {
    body: "我家狗胆子小，以前洗澡会发抖。店员很有耐心，洗完还发了过程照片，状态很放松。",
    name: "豆豆主人"
  },
  {
    body: "长毛猫打结处理得很细，没有硬拽。回家后毛顺了很多，护理建议也很实用。",
    name: "奶盖主人"
  },
  {
    body: "价格透明，预约准时，修剪出来的造型很自然。现在基本每个月固定来一次。",
    name: "毛球主人"
  }
];

const checkItems = [
  "开放式洗护区，可查看服务过程",
  "使用宠物专用低刺激香波与护毛产品",
  "洗护后发送状态照片和护理建议",
  "支持同城 3 公里内预约接送"
];

function SectionHead({
  title,
  body
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-6 max-[900px]:grid">
      <h2 className="m-0 text-[clamp(28px,4vw,44px)] font-extrabold leading-tight">
        {title}
      </h2>
      <p className="m-0 max-w-[440px] leading-8 text-muted">{body}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-ink/10 bg-cream/90 backdrop-blur-xl">
        <nav
          className="mx-auto flex min-h-[72px] w-[min(1160px,calc(100%-32px))] items-center justify-between gap-6 max-[620px]:min-h-16"
          aria-label="主导航"
        >
          <a
            className="flex items-center gap-2.5 whitespace-nowrap text-xl font-extrabold text-sage-dark max-[620px]:text-[17px]"
            href="#top"
            aria-label="暖爪宠物洗护首页"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-sage text-white shadow-[0_8px_20px_rgba(67,107,82,0.26)]">
              爪
            </span>
            <span>暖爪宠物洗护</span>
          </a>
          <div className="flex items-center gap-6 whitespace-nowrap text-sm text-muted max-[900px]:hidden">
            <a href="#services">服务</a>
            <a href="#plans">价格</a>
            <a href="#gallery">环境</a>
            <a href="#contact">联系</a>
            <a
              className="rounded-lg bg-ink px-3.5 py-2.5 font-bold text-white"
              href="tel:13800001234"
            >
              138-0000-1234
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section
          className="grid min-h-[calc(100vh-72px)] items-end bg-[linear-gradient(90deg,rgba(255,249,239,0.97)_0%,rgba(255,249,239,0.88)_39%,rgba(255,249,239,0.22)_70%),url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1800&q=82')] bg-cover bg-[center_right] bg-no-repeat max-[900px]:min-h-0 max-[900px]:bg-[linear-gradient(180deg,rgba(255,249,239,0.96)_0%,rgba(255,249,239,0.78)_52%,rgba(255,249,239,0.26)_100%),url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=82')] max-[900px]:bg-center"
          aria-label="暖爪宠物洗护首屏"
        >
          <div className="mx-auto grid w-[min(1160px,calc(100%-32px))] grid-cols-[minmax(0,560px)_minmax(280px,1fr)] items-end gap-10 py-[72px] pb-[54px] max-[900px]:grid-cols-1 max-[620px]:py-12 max-[620px]:pb-8">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sage/30 bg-white/70 px-3 py-2 text-sm font-bold text-sage-dark">
                今日可约 · 猫狗分区 · 一宠一浴巾
              </div>
              <h1 className="m-0 text-[clamp(42px,7vw,82px)] font-black leading-none text-ink">
                洗得干净，也让小家伙安心。
              </h1>
              <p className="mt-5 max-w-[520px] text-lg leading-9 text-[#526158]">
                从基础洗护、造型修剪到皮毛护理，暖爪用可视化流程、温和产品和细致安抚，让每一次洗澡都更舒服。
              </p>
              <div className="mt-8 flex flex-wrap gap-3 max-[620px]:grid">
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-transparent bg-coral px-5 font-extrabold text-white shadow-[0_14px_28px_rgba(239,139,115,0.28)] max-[620px]:w-full"
                  href="#contact"
                >
                  立即预约
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-ink/15 bg-white/80 px-5 font-extrabold text-ink max-[620px]:w-full"
                  href="#services"
                >
                  查看服务
                </a>
              </div>
            </div>

            <aside
              className="w-[min(100%,380px)] justify-self-end rounded-lg border border-white/70 bg-white/90 p-5 shadow-soft max-[900px]:justify-self-start"
              aria-label="快速预约"
            >
              <h2 className="mb-4 mt-0 text-lg font-extrabold">快速预约</h2>
              <div className="grid gap-3">
                {[
                  ["宠物类型", "猫 / 小型犬 / 中大型犬"],
                  ["常用时段", "10:00 - 20:30"],
                  ["预计耗时", "60 - 150 分钟"]
                ].map(([label, value]) => (
                  <div
                    className="flex min-h-[46px] items-center justify-between gap-3 rounded-lg border border-line bg-[#fbfdf9] px-3.5 text-sm text-muted"
                    key={label}
                  >
                    <span>{label}</span>
                    <strong className="text-ink">{value}</strong>
                  </div>
                ))}
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-transparent bg-coral px-5 font-extrabold text-white shadow-[0_14px_28px_rgba(239,139,115,0.28)]"
                  href="tel:13800001234"
                >
                  电话预约
                </a>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2.5 border-t border-line pt-4 text-center">
                {[
                  ["4.9", "门店评分"],
                  ["2800+", "服务宠物"],
                  ["7年", "洗护经验"]
                ].map(([value, label]) => (
                  <div key={label}>
                    <strong className="block text-xl text-sage-dark">
                      {value}
                    </strong>
                    <span className="mt-1 block text-xs text-muted">{label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white py-20 max-[620px]:py-14" id="services">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
            <SectionHead
              title="适合不同毛孩子的洗护项目"
              body="每只宠物入店先做皮毛检查，再按体型、毛量、皮肤状态和性格安排流程。"
            />
            <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
              {services.map((service) => (
                <article
                  className="flex min-h-[260px] flex-col justify-between rounded-lg border border-line bg-[#fcfbf6] p-5"
                  key={service.title}
                >
                  <div>
                    <div
                      className={`grid h-11 w-11 place-items-center rounded-lg text-[23px] text-white ${service.color}`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="mb-2.5 mt-5 text-xl font-extrabold">
                      {service.title}
                    </h3>
                    <p className="m-0 text-sm leading-7 text-muted">
                      {service.body}
                    </p>
                  </div>
                  <div className="mt-6 font-black text-sage-dark">
                    {service.price}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f4ec] py-20 max-[620px]:py-14">
          <div className="mx-auto grid w-[min(1160px,calc(100%-32px))] grid-cols-[1.05fr_0.95fr] items-center gap-8 max-[900px]:grid-cols-1">
            <div
              className="grid grid-cols-[1fr_0.72fr] items-end gap-4 max-[620px]:grid-cols-1"
              aria-label="店内洗护照片"
            >
              <div className="overflow-hidden rounded-lg bg-line shadow-soft">
                <img
                  className="h-[520px] w-full object-cover max-[620px]:h-[300px]"
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=82"
                  alt="宠物洗护店内的狗狗"
                />
              </div>
              <div className="overflow-hidden rounded-lg bg-line shadow-soft">
                <img
                  className="h-[340px] w-full object-cover max-[620px]:h-[300px]"
                  src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=700&q=82"
                  alt="洗护后的可爱宠物"
                />
              </div>
            </div>
            <div className="py-2.5">
              <h2 className="mb-4 mt-0 text-[clamp(30px,4vw,48px)] font-extrabold leading-tight">
                透明流程，安静分区，减少宠物紧张。
              </h2>
              <p className="mb-5 text-base leading-9 text-muted">
                我们把洗护流程拆成入店检查、安抚适应、洗护吹干、造型整理和主人确认五步。猫狗分区、工具消毒、独立毛巾编号，让宠物舒服，也让主人放心。
              </p>
              <ul className="m-0 grid list-none gap-3 p-0">
                {checkItems.map((item) => (
                  <li
                    className="flex items-start gap-2.5 leading-7 text-[#39483f]"
                    key={item}
                  >
                    <b className="grid h-6 w-6 flex-none place-items-center rounded-full bg-sage/15 text-sage-dark">
                      ✓
                    </b>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 max-[620px]:py-14" id="plans">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
            <SectionHead
              title="清晰价格，进店前心里有数"
              body="最终价格按体型、毛量、打结程度和具体项目确认，预约时会提前说明。"
            />
            <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
              {plans.map((plan) => (
                <article
                  className={`rounded-lg border bg-[#fffdf8] p-6 ${
                    plan.featured
                      ? "-translate-y-2.5 border-coral/60 shadow-soft max-[620px]:translate-y-0"
                      : "border-line"
                  }`}
                  key={plan.title}
                >
                  <span className="mb-4 inline-flex rounded-full bg-coral/10 px-2.5 py-1.5 text-[13px] font-extrabold text-[#bc5e4a]">
                    {plan.tag}
                  </span>
                  <h3 className="m-0 text-2xl font-extrabold">{plan.title}</h3>
                  <div className="my-4 text-[38px] font-black text-sage-dark">
                    {plan.price}{" "}
                    <small className="text-[15px] font-semibold text-muted">
                      起
                    </small>
                  </div>
                  <ul className="m-0 grid list-none gap-2.5 p-0 leading-7 text-muted">
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eef4ee] py-20 max-[620px]:py-14" id="gallery">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
            <SectionHead
              title="干净明亮的洗护空间"
              body="等候、洗护、吹干和休息分区明确，降低交叉打扰，也方便主人接送。"
            />
            <SpaceCarousel />
          </div>
        </section>

        <section className="bg-white py-20 max-[620px]:py-14">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
            <SectionHead
              title="主人们的真实反馈"
              body="我们更重视长期稳定的护理关系，而不是一次性的漂亮照片。"
            />
            <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
              {reviews.map((review) => (
                <article
                  className="rounded-lg border border-line bg-[#fcfbf6] p-6"
                  key={review.name}
                >
                  <div className="text-lg text-gold">★★★★★</div>
                  <p className="my-4 leading-8 text-[#4b5a52]">{review.body}</p>
                  <strong className="text-sage-dark">{review.name}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#2f3a34] pt-20 text-white max-[620px]:pt-14" id="contact">
          <div className="mx-auto grid w-[min(1160px,calc(100%-32px))] grid-cols-2 items-start gap-8 pb-20 max-[900px]:grid-cols-1">
            <div>
              <h2 className="mb-4 mt-0 text-[clamp(30px,4vw,46px)] font-extrabold">
                预约一次轻松的洗护
              </h2>
              <p className="mb-6 max-w-[520px] leading-8 text-white/75">
                建议提前 1 天预约。到店前可告知宠物年龄、体重、是否怕水、皮肤状态和近期驱虫情况。
              </p>
              <ul className="m-0 grid list-none gap-3.5 p-0">
                <li className="flex items-center gap-3 text-white/90">
                  <span>☎</span>
                  <strong>138-0000-1234</strong>
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span>◷</span>
                  <strong>周一至周日 10:00 - 20:30</strong>
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span>⌖</span>
                  <strong>上海市宜川路街道陕西北路1620号</strong>
                </li>
              </ul>
            </div>

            <div
              className="relative flex flex-col gap-4 overflow-hidden rounded-lg bg-[#f8f3e8] p-4 shadow-map"
              aria-label="门店地址"
            >
              <div className="relative z-[1] min-h-[420px] w-full rounded-lg border border-[#3f5b49]/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,249,239,0.24)),url('/assets/pet-map-ai.png'),linear-gradient(135deg,#f8f3e8_0%,#eef6ef_52%,#fff4eb_100%)] bg-contain bg-center bg-no-repeat backdrop-blur-[0.5px] max-[620px]:min-h-[320px]">
                <span className="absolute left-[11%] top-[34%] rotate-[31deg] rounded-full bg-white/85 px-2.5 py-1.5 text-[13px] font-extrabold text-[#2a3f32]/70 shadow-[0_8px_20px_rgba(63,91,73,0.1)]">
                  陕西北路
                </span>
                <span className="absolute right-[12%] top-[44%] -rotate-[16deg] rounded-full bg-white/85 px-2.5 py-1.5 text-[13px] font-extrabold text-[#2a3f32]/70 shadow-[0_8px_20px_rgba(63,91,73,0.1)]">
                  宜川路街道
                </span>
                <span className="absolute bottom-[18%] left-[9%] rounded-full bg-white/85 px-2.5 py-1.5 text-[13px] font-extrabold text-[#2a3f32]/70 shadow-[0_8px_20px_rgba(63,91,73,0.1)]">
                  地铁 / 公交步行可达
                </span>
                <div
                  className="absolute left-[55%] top-[34%] w-[min(220px,58%)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white/95 p-4 text-ink shadow-[0_18px_42px_rgba(83,94,70,0.2)] after:absolute after:bottom-[-12px] after:left-8 after:h-6 after:w-6 after:rotate-45 after:bg-inherit after:content-['']"
                  aria-label="暖爪宠物洗护门店位置"
                >
                  <span className="mb-2.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-coral text-lg font-black text-white">
                    爪
                  </span>
                  <strong className="block">暖爪宠物洗护</strong>
                  <span className="mt-1.5 block font-extrabold leading-6 text-[#18231e]/80">
                    陕西北路1620号
                  </span>
                </div>
              </div>
              <div
                className="z-[2] rounded-lg bg-white/90 p-4 text-ink"
                aria-label="门店信息"
              >
                <strong className="mb-2 block text-lg">暖爪宠物洗护</strong>
                <span className="leading-7 text-muted">
                  上海市宜川路街道陕西北路1620号。到店后请先牵绳或使用航空箱，我们会先做基础状态检查。
                </span>
              </div>
            </div>
          </div>

          <footer className="border-t border-white/15 py-5 text-sm text-white/60">
            <div className="mx-auto flex w-[min(1160px,calc(100%-32px))] flex-wrap justify-between gap-4">
              <span>© 2026 暖爪宠物洗护</span>
              <span>专业洗护 · 造型美容 · 皮毛护理</span>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}
