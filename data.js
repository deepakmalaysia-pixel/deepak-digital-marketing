/* ============================================================
   BrandPath data. Edit this file to add tracks, links, roles.
   Links are third-party: verify them before publishing, and
   re-check any threshold or programme rule on the official page.
   ============================================================ */
const DATA = {

  why: [
    { icon: "📊", title: "You think in data", text: "Performance marketing, attribution and A/B testing are engineering problems in disguise. Most marketers fear them. You will not." },
    { icon: "🤖", title: "You can build tools", text: "A scraper, a dashboard or an automation that saves a team ten hours a week gets you hired faster than any certificate." },
    { icon: "🧪", title: "You run experiments", text: "Brand building is hypothesis, test, measure, repeat. Your degree trained exactly that loop." },
    { icon: "🧭", title: "You are early", text: "Starting at 22 with a 15-year horizon means you can compound skills, audience and network while others are still deciding." }
  ],

  plan: [
    { phase: "Days 1–30: Foundations", items: [
      "Pick one niche you genuinely care about (fitness, gadgets, finance, food, study tips…)",
      "Finish a marketing fundamentals course and write a one-page summary",
      "Create a LinkedIn profile, a Gmail for work, and a free Notion or GitHub Pages portfolio",
      "Study five brands you admire. Write what their positioning is and who it targets",
      "Set up Google Analytics 4 on a simple site you built yourself",
      "Post 3 times a week on one platform. Quality does not matter yet, consistency does"
    ]},
    { phase: "Days 31–60: Pick two skills and go deep", items: [
      "Choose two tracks from Learning tracks (suggestion: Performance Marketing + YouTube or Instagram)",
      "Complete one free certification (Google Ads, Meta Blueprint or HubSpot)",
      "Publish 4 YouTube videos or 12 Instagram Reels in your niche",
      "Join one affiliate programme and place your first honest recommendation",
      "Run a ₹500–₹1,000 test ad campaign for a friend, a local shop or your own page",
      "Write down what worked, what failed, and what you will change"
    ]},
    { phase: "Days 61–90: Proof of work", items: [
      "Turn your best experiment into a one-page case study with numbers",
      "Pitch 10 small businesses or NGOs to run their social or ads for free for 30 days",
      "Apply to 15 internships or associate roles that mention digital, growth or brand",
      "Review analytics: which content type got the most watch time or saves?",
      "Share your 90-day report publicly on LinkedIn",
      "Plan the next 90 days with one measurable goal per track"
    ]}
  ],

  tracks: [
    {
      id: "foundations", short: "Foundations", emoji: "🧱", title: "Marketing & Brand Foundations", level: "Beginner",
      goal: "Understand how brands create value: positioning, audience, pricing, distribution and communication.",
      skills: ["Segmentation, targeting, positioning (STP)", "The 4Ps / 7Ps", "Brand equity and brand architecture", "Consumer psychology basics", "Writing a one-page brand brief"],
      resources: [
        { name: "Google Digital Garage: Fundamentals of Digital Marketing", url: "https://learndigital.withgoogle.com/digitalgarage", note: "Free, self-paced, certificate" },
        { name: "HubSpot Academy: Digital Marketing & Inbound", url: "https://academy.hubspot.com", note: "Free courses and certificates" },
        { name: "NPTEL (IIT/IIM courses on marketing)", url: "https://nptel.ac.in", note: "Search for marketing management and consumer behaviour" },
        { name: "Coursera / edX marketing courses", url: "https://www.coursera.org", note: "Audit for free, pay only if you want the certificate" }
      ],
      tasks: ["Write a brand teardown of a brand you use daily", "Create a positioning statement for an imaginary D2C brand", "Read two brand case studies a week and summarise each in 5 lines"],
      money: "Not directly monetisable, but it makes every other track pay more because you will understand why things work."
    },
    {
      id: "performance", short: "Performance", emoji: "🎯", title: "Performance Marketing", level: "Intermediate",
      goal: "Acquire customers profitably with paid channels and measure everything down to revenue.",
      skills: ["Google Ads (Search, Performance Max, YouTube)", "Meta Ads (Facebook and Instagram)", "Conversion tracking, UTM tagging, GA4", "CAC, ROAS, LTV, funnel maths", "Landing page testing", "Creative testing frameworks"],
      resources: [
        { name: "Google Skillshop (Ads, Analytics, Display & Video)", url: "https://skillshop.withgoogle.com", note: "Free official certifications" },
        { name: "Meta Blueprint", url: "https://www.facebook.com/business/learn", note: "Free courses and certification exams" },
        { name: "Semrush Academy", url: "https://www.semrush.com/academy/", note: "SEO, PPC and analytics courses" },
        { name: "Google Analytics help centre", url: "https://support.google.com/analytics", note: "Official GA4 documentation" }
      ],
      tasks: ["Run a ₹1,000 lead-generation campaign for a local business", "Build a Looker Studio dashboard for your own site", "Write a Python script that pulls ad data from a CSV export and computes CAC and ROAS by campaign"],
      money: "Freelance campaign management for small businesses, retainers from D2C brands, or a full-time performance marketer role. Entry roles are plentiful and a certification plus a case study opens doors."
    },
    {
      id: "affiliate", short: "Affiliate", emoji: "🤝", title: "Affiliate Marketing", level: "Beginner",
      goal: "Earn commissions by recommending products you have actually used, and learn how acquisition really works.",
      skills: ["Choosing a niche and an audience", "Honest review writing and comparison content", "SEO basics for product content", "Link tracking and disclosure rules", "Email list building"],
      resources: [
        { name: "Amazon Associates India", url: "https://affiliate-program.amazon.in", note: "Largest starter programme for Indian creators" },
        { name: "Programmes via networks (e.g. Impact, CJ, Admitad)", url: "https://impact.com", note: "Brand-direct programmes; search each network for current Indian brands" },
        { name: "Ahrefs blog: SEO for beginners", url: "https://ahrefs.com/blog/", note: "Practical, free guides" },
        { name: "Advertising Standards Council of India (ASCI)", url: "https://www.ascionline.in", note: "Read the influencer disclosure guidelines before you post" }
      ],
      tasks: ["Create a 5-product 'best under ₹X' page or video with real usage notes", "Disclose affiliate links clearly on every post", "Track clicks and conversions per post in a spreadsheet"],
      money: "Commissions vary by category and programme. Expect little in the first months. The real return is learning what makes people click and buy."
    },
    {
      id: "youtube", short: "YouTube", emoji: "▶️", title: "YouTube Creator & Partner Programme", level: "Intermediate",
      goal: "Build a channel that earns watch time, trust and eventually ad and sponsorship revenue.",
      skills: ["Topic research and titles that earn clicks honestly", "Scripting with hooks and retention", "Basic video editing (CapCut, DaVinci Resolve)", "Thumbnail design", "YouTube Studio analytics: CTR, average view duration, retention", "Shorts and long-form strategy"],
      resources: [
        { name: "YouTube Partner Programme overview and eligibility", url: "https://support.google.com/youtube/answer/72851", note: "Check the current subscriber and watch-hour thresholds here" },
        { name: "YouTube Creators", url: "https://www.youtube.com/creators/", note: "Official guidance for creators" },
        { name: "DaVinci Resolve (free editor)", url: "https://www.blackmagicdesign.com/products/davinciresolve", note: "Professional-grade, free version available" },
        { name: "Canva", url: "https://www.canva.com", note: "Thumbnails and channel art" }
      ],
      tasks: ["Publish one video a week for 12 weeks in a single niche", "Review retention graphs and rewrite your next hook", "Make a 'what I learned' video from your own affiliate or ads experiments"],
      money: "Monetisation starts only after you meet the YPP criteria, which Google changes from time to time. Plan for sponsorships, affiliates and your own services as supplements. Many creators reach brand-manager-grade skills long before they earn from AdSense."
    },
    {
      id: "instagram", short: "Instagram", emoji: "📸", title: "Instagram & Short-form Content", level: "Beginner",
      goal: "Build a content engine that attracts both audience and industry attention.",
      skills: ["Reels hooks and storytelling", "Content pillars and a posting calendar", "Caption copywriting", "Community management", "Insights: reach, saves, shares, profile visits", "Collaborations and UGC"],
      resources: [
        { name: "Instagram Creators", url: "https://creators.instagram.com", note: "Official tips and tools" },
        { name: "Meta Business Suite help", url: "https://www.facebook.com/business/help", note: "Scheduling and insights" },
        { name: "Later / Buffer blogs", url: "https://buffer.com/resources/", note: "Practical social media strategy articles" },
        { name: "Notion", url: "https://www.notion.so", note: "Build a content calendar template" }
      ],
      tasks: ["Define three content pillars and post 4 times a week for 8 weeks", "Study your top 3 Reels by saves and shares and replicate the structure", "Pitch a micro-collaboration with a small brand in your niche"],
      money: "Brand collaborations, UGC creator work (brands pay for content, not followers), affiliate links and selling your own digital product. The strongest outcome is a public track record that hiring managers can see."
    },
    {
      id: "seo-content", short: "SEO & Content", emoji: "✍️", title: "SEO, Copywriting & Content Strategy", level: "Intermediate",
      goal: "Earn attention that compounds: search traffic, email subscribers and writing that sells.",
      skills: ["Keyword research and search intent", "On-page and technical SEO basics", "Direct-response copywriting", "Email marketing and automation", "Content calendars"],
      resources: [
        { name: "Google Search Central", url: "https://developers.google.com/search/docs", note: "Official SEO documentation" },
        { name: "Google Search Console", url: "https://search.google.com/search-console", note: "Free tool to see how your site performs in search" },
        { name: "HubSpot Academy: Content Marketing", url: "https://academy.hubspot.com", note: "Free certification" },
        { name: "Mailchimp resources", url: "https://mailchimp.com/resources/", note: "Email marketing guides" }
      ],
      tasks: ["Launch a niche blog on GitHub Pages and publish 10 posts", "Verify the site in Search Console and track impressions weekly", "Write a 3-email welcome sequence for an imaginary brand"],
      money: "Freelance content and SEO retainers, newsletter sponsorships, affiliate revenue from ranking pages."
    },
    {
      id: "analytics", short: "Analytics", emoji: "📈", title: "Marketing Analytics & Automation (your edge)", level: "Advanced",
      goal: "Use your engineering skills to build the tools and insight that most marketers lack.",
      skills: ["SQL and Python (pandas) for marketing data", "Attribution models and incrementality", "Dashboards (Looker Studio, Power BI)", "APIs and automation (Google Sheets, Apps Script, Zapier or n8n)", "A/B test design and statistics", "Using AI tools responsibly for research and drafts"],
      resources: [
        { name: "Google Analytics Skillshop", url: "https://skillshop.withgoogle.com", note: "GA4 certification" },
        { name: "Looker Studio", url: "https://lookerstudio.google.com", note: "Free dashboards" },
        { name: "Kaggle Learn", url: "https://www.kaggle.com/learn", note: "Free Python, pandas and SQL courses" },
        { name: "freeCodeCamp", url: "https://www.freecodecamp.org", note: "Data analysis tutorials" }
      ],
      tasks: ["Build a dashboard that merges ad spend, GA4 sessions and sales", "Automate a weekly marketing report to email itself", "Publish the code on GitHub with a clear README"],
      money: "Marketing analyst and growth roles pay at a premium. Freelance dashboards and automations for small brands are a strong entry point."
    },
    {
      id: "brand-strategy", short: "Brand Strategy", emoji: "🏛️", title: "Brand Strategy & Management", level: "Advanced",
      goal: "Move from tactics to ownership of a brand's growth, positioning and P&L.",
      skills: ["Brand architecture and portfolio strategy", "Market research and insight generation", "Pricing and trade marketing", "Launch planning and go-to-market", "Agency and budget management", "Stakeholder communication"],
      resources: [
        { name: "Harvard Business Review marketing articles", url: "https://hbr.org/topic/subject/marketing", note: "Some articles are free; check your library access" },
        { name: "Marketing Week", url: "https://www.marketingweek.com", note: "Industry news and analysis" },
        { name: "exchange4media", url: "https://www.exchange4media.com", note: "Indian marketing and advertising news" },
        { name: "Think with Google", url: "https://www.thinkwithgoogle.com", note: "Consumer insight reports" }
      ],
      tasks: ["Write a complete brand plan for a real small business", "Build a launch calendar with a budget split by channel", "Interview two working brand managers and write up what you learned"],
      money: "This is the destination track. It maps to brand manager, senior brand manager and category head roles."
    }
  ],

  roadmap: [
    { years: "Year 0–1", title: "Explorer", points: ["Complete foundations and two certifications", "Publish content weekly and run small campaigns", "Land an internship or associate role in digital marketing"] },
    { years: "Year 1–3", title: "Specialist", points: ["Own channels: performance, social or content", "Reach a measurable result you can show (leads, revenue, growth)", "Consider an MBA, PGDM or specialised programme if the role you want requires it"] },
    { years: "Year 3–6", title: "Marketing Manager / Assistant Brand Manager", points: ["Plan campaigns end to end with budgets", "Work with agencies, sales and product teams", "Present results to leadership"] },
    { years: "Year 6–10", title: "Brand Manager / Senior Brand Manager", points: ["Own the brand's positioning, plan and P&L", "Lead a team and manage agencies", "Launch new products or variants"] },
    { years: "Year 10–15", title: "Group Brand Manager / Marketing Head", points: ["Run a portfolio of brands", "Set annual strategy and budgets", "Mentor future brand managers"] }
  ],

  opportunities: {
    "Get hired": [
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/", text: "Search 'digital marketing associate', 'growth', 'performance marketing' and 'brand executive'." },
      { name: "Internshala", url: "https://internshala.com", text: "Marketing and social media internships with stipends, many remote." },
      { name: "Naukri", url: "https://www.naukri.com", text: "Wide coverage of entry-level marketing roles in India." },
      { name: "Wellfound (startups)", url: "https://wellfound.com", text: "Startups value people who can build and market." },
      { name: "Management trainee programmes", url: "https://www.google.com/search?q=FMCG+management+trainee+programme+India", text: "Large FMCG and consumer companies run structured programmes. Check each company's careers page for dates and eligibility." },
      { name: "Marketing agencies", url: "https://www.google.com/search?q=digital+marketing+agency+careers+India", text: "Agencies teach quickly. Two years here accelerates your portfolio." }
    ],
    "Earn independently": [
      { name: "Freelance campaign management", url: "https://www.upwork.com", text: "Offer a fixed ad-setup package to small businesses." },
      { name: "Fiverr / Upwork gigs", url: "https://www.fiverr.com", text: "Start with narrow offers: GA4 setup, landing page audit, Reels editing." },
      { name: "UGC creation", url: "https://www.google.com/search?q=UGC+creator+platforms+India", text: "Brands pay for authentic content without you needing a large following." },
      { name: "Sell a digital product", url: "https://gumroad.com", text: "Templates, dashboards or playbooks built from your experiments." },
      { name: "Local business packages", url: "#projects", text: "Offer social and ads packages to clinics, coaching centres, restaurants." }
    ],
    "Build an audience": [
      { name: "YouTube Partner Programme", url: "https://support.google.com/youtube/answer/72851", text: "Check current eligibility, then focus on watch time and trust." },
      { name: "Instagram creator accounts", url: "https://creators.instagram.com", text: "Switch to a creator or professional account to unlock Insights." },
      { name: "Newsletter (Substack / beehiiv)", url: "https://substack.com", text: "An owned audience is the most durable asset you can build." },
      { name: "LinkedIn content", url: "https://www.linkedin.com", text: "Share case studies and weekly learnings. Recruiters and founders read it." },
      { name: "Affiliate programmes", url: "https://affiliate-program.amazon.in", text: "Pair content with honest recommendations." }
    ]
  },

  projects: [
    { title: "Brand teardown series", level: "Beginner", text: "Ten short posts or videos analysing the positioning, pricing and ads of Indian brands. Show your reasoning." },
    { title: "₹1,000 ad experiment", level: "Intermediate", text: "Run a small campaign, document targets, creatives, results and what you would change." },
    { title: "Niche affiliate site", level: "Intermediate", text: "A small site with honest comparisons, tracked clicks and a disclosure page." },
    { title: "Marketing dashboard", level: "Advanced", text: "Combine ad, analytics and sales data into one dashboard. Publish the code." },
    { title: "Channel from zero", level: "Intermediate", text: "A YouTube or Instagram account with 12 weeks of consistent posts and a public review of the numbers." },
    { title: "Launch plan for a real business", level: "Advanced", text: "A positioning, channel plan, budget and calendar for a local business. Present it to the owner." }
  ],

  habits: ["Learn 1 hour", "Create 1 piece of content", "Review analytics", "Reach out to 1 person", "Read 1 case study"]
};
