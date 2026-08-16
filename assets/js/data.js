/* =========================================================
   Content data — Dr. Javad Vahidi
   Every entry carries en / fa / ar variants.
   Compiled from the author's indexed academic profiles
   (Scopus 9245209700, Google Scholar fyeiLYMAAAAJ, DBLP 42/8867,
    IEEE Xplore 38468035600, Civilica 184491, ResearchGate, Iranketab).
   ========================================================= */

const SITE_DATA = {

  /* ---------------- Guiding principles ----------------
     Editorial text on the discipline itself, written for this site.
     It is deliberately NOT presented as a personal quotation — replace
     it with Dr. Vahidi's own words if he wishes to speak in his voice. */
  philosophy: [
    {
      icon: 'sigma',
      en: { t: 'Rigour before tooling',
            d: 'Languages, frameworks and libraries turn over with every cohort; the reasoning that makes them intelligible does not. A student who understands why an algorithm terminates will learn any new tool in a week — the reverse is never true.' },
      fa: { t: 'دقت پیش از ابزار',
            d: 'زبان‌ها، چارچوب‌ها و کتابخانه‌ها با هر نسل از دانشجویان عوض می‌شوند؛ اما استدلالی که آن‌ها را فهم‌پذیر می‌کند تغییر نمی‌کند. دانشجویی که بداند چرا یک الگوریتم پایان می‌پذیرد، هر ابزار تازه‌ای را در یک هفته می‌آموزد — و عکس آن هرگز درست نیست.' },
      ar: { t: 'الصرامة قبل الأدوات',
            d: 'اللغات والأُطر والمكتبات تتبدّل مع كل دفعة من الطلبة، أمّا الاستدلال الذي يجعلها مفهومة فلا يتبدّل. والطالب الذي يدرك لماذا تنتهي الخوارزمية يتعلّم أي أداة جديدة في أسبوع — والعكس لا يصحّ أبداً.' }
    },
    {
      icon: 'function',
      en: { t: 'Abstraction as a bridge',
            d: 'Abstraction is what carries a theorem into an algorithm, and an algorithm into a system that runs. Learning to move deliberately between these levels — and to know which one a problem actually lives on — is the central skill of the discipline.' },
      fa: { t: 'انتزاع همچون پل',
            d: 'انتزاع همان چیزی است که یک قضیه را به الگوریتم، و الگوریتم را به سامانه‌ای کارآمد بدل می‌کند. آموختنِ حرکت آگاهانه میان این سطوح — و تشخیص اینکه مسئله در کدام سطح جای دارد — مهارت مرکزی این رشته است.' },
      ar: { t: 'التجريد جسراً',
            d: 'التجريد هو ما يحمل المبرهنة إلى خوارزمية، والخوارزمية إلى نظامٍ يعمل. وإتقانُ الانتقال الواعي بين هذه المستويات — ومعرفةُ أيِّها تسكنه المسألة حقاً — هو المهارة المركزية في هذا التخصّص.' }
    },
    {
      icon: 'target',
      en: { t: 'Proof and experiment together',
            d: 'A result that is only proved may never run; a result that is only measured may not generalise. Serious computational work needs both, and an honest account of which of the two is speaking at any given moment.' },
      fa: { t: 'اثبات و آزمایش در کنار هم',
            d: 'نتیجه‌ای که تنها اثبات شده باشد شاید هرگز اجرا نشود، و نتیجه‌ای که تنها اندازه‌گیری شده باشد شاید تعمیم نیابد. کار محاسباتی جدی به هر دو نیاز دارد، و به بیانی صادقانه از اینکه در هر لحظه کدام‌یک سخن می‌گوید.' },
      ar: { t: 'البرهان والتجربة معاً',
            d: 'نتيجةٌ بُرهنت وحدها قد لا تعمل أبداً، ونتيجةٌ قِيست وحدها قد لا تصلح للتعميم. والعمل الحاسوبي الجادّ يحتاج إليهما معاً، وإلى بيانٍ أمينٍ عن أيِّهما يتكلّم في كل لحظة.' }
    }
  ],

  /* ---------------- Research areas ---------------- */
  research: [
    {
      icon: 'brain',
      en: { t: 'Deep Learning & Machine Intelligence',
            d: 'Neural architectures for vision and language tasks, generative models, and the mathematical principles that govern learning, representation and generalisation.' },
      fa: { t: 'یادگیری عمیق و هوش ماشین',
            d: 'معماری‌های عصبی برای وظایف بینایی و زبان، مدل‌های مولد، و اصول ریاضی حاکم بر یادگیری، بازنمایی و تعمیم‌پذیری.' },
      ar: { t: 'التعلّم العميق والذكاء الآلي',
            d: 'البنى العصبية لمهام الرؤية واللغة، والنماذج التوليدية، والمبادئ الرياضية التي تحكم التعلّم والتمثيل والتعميم.' }
    },
    {
      icon: 'target',
      en: { t: 'Optimization',
            d: 'Continuous and combinatorial optimization, metaheuristic and evolutionary search, and multi-objective formulations applied to engineering and network problems.' },
      fa: { t: 'بهینه‌سازی',
            d: 'بهینه‌سازی پیوسته و ترکیبیاتی، جست‌وجوی فراابتکاری و تکاملی، و صورت‌بندی‌های چندهدفه در مسائل مهندسی و شبکه.' },
      ar: { t: 'الأمثلية (التحسين)',
            d: 'الأمثلية المتصلة والتوافقية، والبحث الاستدلالي الفوقي والتطوّري، والصياغات متعددة الأهداف في مسائل الهندسة والشبكات.' }
    },
    {
      icon: 'sigma',
      en: { t: 'Numerical Analysis',
            d: 'Semi-analytical and numerical schemes for differential and integral equations — Adomian decomposition, homotopy perturbation, variational iteration and Picard methods.' },
      fa: { t: 'آنالیز عددی',
            d: 'روش‌های نیمه‌تحلیلی و عددی برای معادلات دیفرانسیل و انتگرال — تجزیه آدومیان، اغتشاش هموتوپی، تکرار وردشی و روش پیکارد.' },
      ar: { t: 'التحليل العددي',
            d: 'المناهج شبه التحليلية والعددية للمعادلات التفاضلية والتكاملية — تحليل أدوميان، واضطراب الهوموتوبي، والتكرار التغايري، وطريقة بيكار.' }
    },
    {
      icon: 'function',
      en: { t: 'Applied &amp; Computational Mathematics',
            d: 'Differential equations, functional analysis, non-Archimedean random normed spaces, discrete mathematics, algebra and linear algebra for computing.' },
      fa: { t: 'ریاضیات کاربردی و محاسباتی',
            d: 'معادلات دیفرانسیل، آنالیز تابعی، فضاهای نرم‌دار تصادفی نا-ارشمیدسی، ریاضیات گسسته، جبر و جبر خطی برای علوم محاسباتی.' },
      ar: { t: 'الرياضيات التطبيقية والحاسوبية',
            d: 'المعادلات التفاضلية، والتحليل الدالي، والفضاءات المعيارية العشوائية اللاأرخميدية، والرياضيات المتقطعة، والجبر والجبر الخطي للحوسبة.' }
    },
    {
      icon: 'lock',
      en: { t: 'Cryptography &amp; Information Security',
            d: 'Image and multimedia encryption, chaotic maps, watermarking, elliptic-curve schemes, and the cryptanalysis of learning-based security systems.' },
      fa: { t: 'رمزنگاری و امنیت اطلاعات',
            d: 'رمزنگاری تصویر و چندرسانه‌ای، نگاشت‌های آشوبناک، نهان‌نگاری، طرح‌های خم بیضوی، و تحلیل رمز سامانه‌های امنیتی مبتنی بر یادگیری.' },
      ar: { t: 'التعمية وأمن المعلومات',
            d: 'تعمية الصور والوسائط المتعددة، والخرائط الفوضوية، والعلامة المائية، وأنظمة المنحنيات الإهليلجية، وتحليل شيفرات الأنظمة الأمنية القائمة على التعلّم.' }
    },
    {
      icon: 'image',
      en: { t: 'Image Processing &amp; Computer Vision',
            d: 'Despeckling and restoration of SAR and remote-sensing imagery, adaptive filtering, feature extraction, face recognition and pattern analysis.' },
      fa: { t: 'پردازش تصویر و بینایی ماشین',
            d: 'حذف نویز اسپکل و بازسازی تصاویر رادار دهانه ترکیبی و سنجش از دور، فیلترگذاری تطبیقی، استخراج ویژگی، بازشناسی چهره و تحلیل الگو.' },
      ar: { t: 'معالجة الصور والرؤية الحاسوبية',
            d: 'إزالة التشويش البقعي وترميم صور الرادار ذي الفتحة الاصطناعية والاستشعار عن بُعد، والترشيح التكيّفي، واستخراج السمات، وتمييز الوجوه وتحليل الأنماط.' }
    },
    {
      icon: 'fuzzy',
      en: { t: 'Fuzzy Systems &amp; Soft Computing',
            d: 'Fuzzy inference and defuzzification, triangular fuzzy numbers in decision support, and fuzzy modelling of natural-language and enterprise systems.' },
      fa: { t: 'سیستم‌های فازی و محاسبات نرم',
            d: 'استنتاج فازی و غیرفازی‌سازی، اعداد فازی مثلثی در تصمیم‌یاری، و مدل‌سازی فازی زبان طبیعی و سامانه‌های سازمانی.' },
      ar: { t: 'الأنظمة الضبابية والحوسبة المرنة',
            d: 'الاستدلال الضبابي وإزالة الضبابية، والأعداد الضبابية المثلثية في دعم القرار، والنمذجة الضبابية للغة الطبيعية وأنظمة المؤسسات.' }
    },
    {
      icon: 'atom',
      en: { t: 'Quantum-Inspired Computing',
            d: 'Quantum-inspired reinforcement learning and multi-agent methods for exploration–exploitation trade-offs in next-generation wireless networks.' },
      fa: { t: 'محاسبات کوانتوم‌بنیان',
            d: 'یادگیری تقویتی الهام‌گرفته از کوانتوم و روش‌های چندعاملی برای موازنه اکتشاف–بهره‌برداری در شبکه‌های بی‌سیم نسل آینده.' },
      ar: { t: 'الحوسبة المستلهَمة من الكم',
            d: 'التعلّم المعزَّز المستلهَم من الكم والأساليب متعددة الوكلاء لموازنة الاستكشاف والاستغلال في شبكات الجيل القادم اللاسلكية.' }
    }
  ],

  /* ---------------- Selected publications ---------------- */
  publications: [
    {
      type: 'journal', year: '2025',
      title: 'Quantum-inspired multi-agent reinforcement learning for exploration&ndash;exploitation optimization in UAV-assisted 6G network deployment',
      authors: 'M. Taghavi, J. Vahidi',
      venue: { en: 'Quantum Machine Intelligence (Springer)', fa: 'Quantum Machine Intelligence (اشپرینگر)', ar: 'Quantum Machine Intelligence (شپرينغر)' },
      url: 'https://doi.org/10.1007/s42484-025-00335-8',
      tags: ['Quantum ML', 'Reinforcement Learning', '6G']
    },
    {
      type: 'chapter', year: '2025',
      title: 'Picard Method',
      authors: 'J. Vahidi et al.',
      venue: { en: 'Springer Nature — book chapter', fa: 'اشپرینگر نیچر — فصل کتاب', ar: 'شپرينغر نيتشر — فصل من كتاب' },
      url: 'https://doi.org/10.1007/978-3-031-96704-7_4',
      tags: ['Numerical Analysis', 'Picard Iteration']
    },
    {
      type: 'preprint', year: '2025',
      title: 'The Potential of Large Language Models in Supply Chain Management: Advancing Decision-Making, Efficiency, and Innovation',
      authors: 'M. Aghaei, J. Vahidi et al.',
      venue: { en: 'arXiv:2501.15411 — preprint', fa: 'arXiv:2501.15411 — پیش‌چاپ', ar: 'arXiv:2501.15411 — مسوَّدة' },
      url: 'https://arxiv.org/abs/2501.15411',
      tags: ['LLM', 'Supply Chain', 'Decision Making']
    },
    {
      type: 'preprint', year: '2025',
      title: 'Harnessing the Potential of Large Language Models in Modern Marketing Management: Applications, Future Directions, and Strategic Recommendations',
      authors: 'M. Aghaei, J. Vahidi et al.',
      venue: { en: 'arXiv:2501.10685 — preprint', fa: 'arXiv:2501.10685 — پیش‌چاپ', ar: 'arXiv:2501.10685 — مسوَّدة' },
      url: 'https://arxiv.org/abs/2501.10685',
      tags: ['LLM', 'Marketing', 'Strategy']
    },
    {
      type: 'journal', year: '2024',
      title: 'An end-to-end multi-task deep learning framework for bronchoscopy image classification',
      authors: 'R. Setayeshi, J. Vahidi, E. Kozegar, T. Tan',
      venue: { en: 'Multimedia Systems (Springer)', fa: 'Multimedia Systems (اشپرینگر)', ar: 'Multimedia Systems (شپرينغر)' },
      url: 'https://doi.org/10.1007/s00530-024-01579-3',
      tags: ['Medical Imaging', 'Deep Learning', 'Multi-task']
    },
    {
      type: 'journal', year: '2024',
      title: 'A SAR Image Despeckling Method Based on an Extended Adaptive Wiener Filter and Extended Guided Filter',
      authors: 'J. Vahidi et al.',
      venue: { en: 'Remote Sensing (MDPI)', fa: 'Remote Sensing (MDPI)', ar: 'Remote Sensing (MDPI)' },
      url: 'https://dblp.org/pid/42/8867.html',
      tags: ['SAR', 'Image Restoration', 'Adaptive Filtering']
    },
    {
      type: 'journal', year: '2023',
      title: 'Credit card fraud detection using ensemble data mining methods',
      authors: 'S. Bakhtiari, Z. Nasiri, J. Vahidi',
      venue: { en: 'Multimedia Tools and Applications (Springer)', fa: 'Multimedia Tools and Applications (اشپرینگر)', ar: 'Multimedia Tools and Applications (شپرينغر)' },
      url: 'https://doi.org/10.1007/s11042-023-14698-2',
      tags: ['Fraud Detection', 'Ensemble Learning', 'Data Mining']
    },
    {
      type: 'journal', year: '2023',
      title: 'Removal of Speckle Noises from Ultrasound Images Using Parallel Convolutional Neural Network',
      authors: 'H. Salehi, J. Vahidi',
      venue: { en: 'Circuits, Systems, and Signal Processing (Springer)', fa: 'Circuits, Systems, and Signal Processing (اشپرینگر)', ar: 'Circuits, Systems, and Signal Processing (شپرينغر)' },
      url: 'https://doi.org/10.1007/s00034-023-02349-8',
      tags: ['Ultrasound', 'CNN', 'Denoising']
    },
    {
      type: 'journal', year: '2023',
      title: 'Morphology of composition functions in Persian sentences through a newly proposed classified fuzzy method and center of gravity defuzzification method',
      authors: 'J. Vahidi et al.',
      venue: { en: 'Journal of Intelligent &amp; Fuzzy Systems (IOS Press)', fa: 'Journal of Intelligent &amp; Fuzzy Systems', ar: 'Journal of Intelligent &amp; Fuzzy Systems' },
      url: 'https://dblp.org/pid/42/8867.html',
      tags: ['Fuzzy Logic', 'NLP', 'Defuzzification']
    },
    {
      type: 'journal', year: '2020',
      title: 'An Ultrasound Image Despeckling Method Based on Weighted Adaptive Bilateral Filter',
      authors: 'H. Salehi, J. Vahidi',
      venue: { en: 'International Journal of Image and Graphics 20(2), 2050020', fa: 'International Journal of Image and Graphics ۲۰(۲)', ar: 'International Journal of Image and Graphics 20(2)' },
      url: 'https://doi.org/10.1142/S0219467820500205',
      tags: ['Ultrasound', 'Bilateral Filter', 'Denoising']
    },
    {
      type: 'journal', year: '2018',
      title: 'A Robust Hybrid Filter Based on Evolutionary Intelligence and Fuzzy Evaluation',
      authors: 'H. Salehi, J. Vahidi, H. Motameni',
      venue: { en: 'International Journal of Image and Graphics 18(4), 1850023', fa: 'International Journal of Image and Graphics ۱۸(۴)', ar: 'International Journal of Image and Graphics 18(4)' },
      url: 'https://doi.org/10.1142/S0219467818500237',
      tags: ['Evolutionary Computing', 'Fuzzy Systems', 'Image Filtering']
    }
  ],

  /* ---------------- Books ----------------
     Left intentionally empty. The Iranketab catalogue could not be reached
     from the build environment, and inventing titles would misrepresent the
     author's work. Add verified entries here in the same shape as above:

       { en: { t: 'Title', s: 'Publisher · Year' },
         fa: { t: 'عنوان', s: 'ناشر · سال' },
         ar: { t: 'العنوان', s: 'الناشر · السنة' } }

     While this array is empty the Books section shows a link to Iranketab
     instead of a card grid.                                                */
  books: [],

  /* ---------------- Teaching ---------------- */
  courses: {
    en: ['Discrete Mathematics', 'Linear Algebra', 'Numerical Analysis', 'Differential Equations',
         'Design and Analysis of Algorithms', 'Theory of Computation', 'Optimization Methods',
         'Machine Learning and Deep Learning', 'Cryptography and Network Security', 'Fuzzy Systems and Soft Computing'],
    fa: ['ریاضیات گسسته', 'جبر خطی', 'آنالیز عددی', 'معادلات دیفرانسیل',
         'طراحی و تحلیل الگوریتم‌ها', 'نظریه محاسبات', 'روش‌های بهینه‌سازی',
         'یادگیری ماشین و یادگیری عمیق', 'رمزنگاری و امنیت شبکه', 'سیستم‌های فازی و محاسبات نرم'],
    ar: ['الرياضيات المتقطعة', 'الجبر الخطي', 'التحليل العددي', 'المعادلات التفاضلية',
         'تصميم الخوارزميات وتحليلها', 'نظرية الحوسبة', 'طرق الأمثلية',
         'تعلّم الآلة والتعلّم العميق', 'التعمية وأمن الشبكات', 'الأنظمة الضبابية والحوسبة المرنة']
  },

  supervision: {
    en: ['Supervision of doctoral (Ph.D.) dissertations in computer science and applied mathematics',
         'Supervision and advising of master&rsquo;s theses across optimization, machine learning and information security',
         'Direction of undergraduate final-year research projects',
         'Mentoring of research assistants and laboratory teams',
         'Peer review for international journals and conference programme committees'],
    fa: ['راهنمایی رساله‌های دکتری در علوم کامپیوتر و ریاضیات کاربردی',
         'راهنمایی و مشاوره پایان‌نامه‌های کارشناسی ارشد در حوزه بهینه‌سازی، یادگیری ماشین و امنیت اطلاعات',
         'هدایت پروژه‌های پژوهشی پایانی دوره کارشناسی',
         'راهبری دستیاران پژوهشی و تیم‌های آزمایشگاهی',
         'داوری مقالات نشریات بین‌المللی و عضویت در کمیته‌های علمی کنفرانس‌ها'],
    ar: ['الإشراف على أطروحات الدكتوراه في علوم الحاسوب والرياضيات التطبيقية',
         'الإشراف على رسائل الماجستير وتقديم المشورة فيها في مجالات الأمثلية وتعلّم الآلة وأمن المعلومات',
         'توجيه مشاريع البحث النهائية لطلبة البكالوريوس',
         'إرشاد مساعدي البحث وفرق المختبرات',
         'تحكيم الأبحاث للمجلات الدولية والعضوية في اللجان العلمية للمؤتمرات']
  },

  /* ---------------- Academic profiles ---------------- */
  profiles: [
    { icon:'orbit',    name:'Scopus',           meta:'ID 9245209700',     url:'https://www.scopus.com/authid/detail.uri?authorId=9245209700' },
    { icon:'cap',      name:'Google Scholar',   meta:'fyeiLYMAAAAJ',      url:'https://scholar.google.com/citations?user=fyeiLYMAAAAJ&hl=en' },
    { icon:'flask',    name:'ResearchGate',     meta:'Javad Vahidi',      url:'https://www.researchgate.net/profile/Javad-Vahidi' },
    { icon:'db',       name:'DBLP',             meta:'pid 42/8867',       url:'https://dblp.org/pid/42/8867.html' },
    { icon:'chip',     name:'IEEE Xplore',      meta:'ID 38468035600',    url:'https://ieeexplore.ieee.org/author/38468035600' },
    { icon:'doc',      name:'Civilica',         meta:'Researcher 184491', url:'https://civilica.com/p/184491/' },
    { icon:'building', name:'IUST Portal',      meta:'its.iust.ac.ir',    url:'https://its.iust.ac.ir/profile/jvahidi' },
    { icon:'sigma2',   name:'IUST Mathematics', meta:'math.iust.ac.ir',   url:'https://math.iust.ac.ir/page/19603/%D8%AF%DA%A9%D8%AA%D8%B1-%D8%AC%D9%88%D8%A7%D8%AF-%D9%88%D8%AD%DB%8C%D8%AF%DB%8C' },
    { icon:'book',     name:'Iranketab',        meta:'Books',             url:'https://www.iranketab.ir/profile/50245-%D8%AC%D9%88%D8%A7%D8%AF-%D9%88%D8%AD%DB%8C%D8%AF%DB%8C' },
    { icon:'cap',      name:'Academia.edu',     meta:'javadvahidi',       url:'https://iust.academia.edu/javadvahidi' }
  ]
};

/* ---------------- Inline SVG icon set ---------------- */
const ICONS = {
  brain:   '<path d="M9.5 3.4a2.6 2.6 0 0 0-2.6 2.6 2.6 2.6 0 0 0-1.6 4.6A2.8 2.8 0 0 0 6.6 15a2.6 2.6 0 0 0 2.9 2.5V3.4Z"/><path d="M14.5 3.4A2.6 2.6 0 0 1 17.1 6a2.6 2.6 0 0 1 1.6 4.6A2.8 2.8 0 0 1 17.4 15a2.6 2.6 0 0 1-2.9 2.5V3.4Z"/><path d="M12 3.4v17.2"/>',
  target:  '<circle cx="12" cy="12" r="8.4"/><circle cx="12" cy="12" r="4.6"/><circle cx="12" cy="12" r="1.1"/>',
  sigma:   '<path d="M17.5 4.6h-11L12 12l-5.5 7.4h11"/>',
  function:'<path d="M4.2 19.4c2.4 0 3-1.6 3.4-4.2l1.8-9.2c.4-2 1.3-2.6 2.6-2.6"/><path d="M6.4 10.6h6.6"/><path d="M13.6 10.8 19.8 18"/><path d="m19.8 10.8-6.2 7.2"/>',
  lock:    '<rect x="4.4" y="10.4" width="15.2" height="10.2" rx="2.2"/><path d="M8 10.4V7.6a4 4 0 0 1 8 0v2.8"/><circle cx="12" cy="15.4" r="1.3"/>',
  image:   '<rect x="3.2" y="4.6" width="17.6" height="14.8" rx="2.4"/><circle cx="8.6" cy="10" r="1.8"/><path d="m4.4 17.6 4.6-4.4 3.4 3 3-2.6 4.2 4"/>',
  fuzzy:   '<circle cx="7.4" cy="8" r="3.4"/><circle cx="16.6" cy="16" r="3.4"/><path d="M10.4 9.6c3.4 1 4.6 2.8 5 4.8"/><path d="M4.2 16.4h4.6M15.2 4.6h4.6"/>',
  atom:    '<circle cx="12" cy="12" r="2.1"/><ellipse cx="12" cy="12" rx="9.2" ry="4" /><ellipse cx="12" cy="12" rx="9.2" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.2" ry="4" transform="rotate(120 12 12)"/>',
  orbit:   '<path d="M4 12a8 8 0 0 1 8-8"/><path d="M20 12a8 8 0 0 1-8 8"/><circle cx="12" cy="12" r="2.6"/>',
  cap:     '<path d="M12 3 1.8 8.4 12 13.9l10.2-5.5L12 3Z"/><path d="M5.6 10.6v4.9c0 1.9 2.9 3.4 6.4 3.4s6.4-1.5 6.4-3.4v-4.9"/>',
  flask:   '<path d="M9.4 3.2h5.2"/><path d="M10.4 3.2v6L5.2 18a2.2 2.2 0 0 0 1.9 3.3h9.8A2.2 2.2 0 0 0 18.8 18l-5.2-8.8v-6"/><path d="M7.6 14.6h8.8"/>',
  db:      '<ellipse cx="12" cy="6.2" rx="7.6" ry="3"/><path d="M4.4 6.2v11.6c0 1.7 3.4 3 7.6 3s7.6-1.3 7.6-3V6.2"/><path d="M4.4 12c0 1.7 3.4 3 7.6 3s7.6-1.3 7.6-3"/>',
  chip:    '<rect x="7" y="7" width="10" height="10" rx="1.8"/><path d="M10 3.4v3.6M14 3.4v3.6M10 17v3.6M14 17v3.6M3.4 10H7M3.4 14H7M17 10h3.6M17 14h3.6"/>',
  doc:     '<path d="M14 3.2H7.4A2.2 2.2 0 0 0 5.2 5.4v13.2a2.2 2.2 0 0 0 2.2 2.2h9.2a2.2 2.2 0 0 0 2.2-2.2V8.2Z"/><path d="M14 3.2v5h4.8"/><path d="M8.6 13h6.8M8.6 16.6h4.6"/>',
  building:'<path d="M4 20.6V6.4a1.8 1.8 0 0 1 1.8-1.8h8.4A1.8 1.8 0 0 1 16 6.4v14.2"/><path d="M16 10.4h2.2A1.8 1.8 0 0 1 20 12.2v8.4"/><path d="M2.8 20.6h18.4"/><path d="M7.4 8.4h1.8M7.4 12h1.8M7.4 15.6h1.8M11.6 8.4h1.8M11.6 12h1.8M11.6 15.6h1.8"/>',
  sigma2:  '<path d="M17.5 4.6h-11L12 12l-5.5 7.4h11"/>',
  book:    '<path d="M4.2 4.8A2 2 0 0 1 6.2 2.8h13.6v14.4H6.2a2 2 0 0 0-2 2Z"/><path d="M4.2 19.2a2 2 0 0 0 2 2h13.6v-4"/><path d="M8 7h7.4"/>',
  arrow:   '<path d="M5.4 12h13.2"/><path d="m13 6.4 5.6 5.6-5.6 5.6"/>'
};
