import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crypto Scam Watch UK 2026 — Every Scam Type Explained | DigiTech Lifestyle",
  description: "The complete guide to crypto scams hitting UK investors in 2026. YouTube giveaway fraud, deepfakes, rug pulls, pig butchering, phone impersonation, police arrest scams, SIM swap — every type explained with real examples.",
  alternates: { canonical: "/scam-watch" },
  openGraph: {
    title: "Crypto Scam Watch UK 2026 — Every Scam Type Explained",
    description: "The complete guide to crypto scams hitting UK investors in 2026. YouTube giveaway fraud, deepfakes, rug pulls, pig butchering and more — with real examples and how to report.",
    url: "https://digitechlifestyle.com/scam-watch",
    type: "website",
    siteName: "DigiTech Lifestyle",
  },
};

const SCAM_TYPES = [
  {
    icon: "📺",
    title: "YouTube & Live Stream Giveaway Scams",
    desc: `Fake YouTube channels — often cloned from real accounts belonging to Ripple, Coinbase, MrBeast, Elon Musk, or Michael Saylor — run fake "crypto giveaway" live streams 24 hours a day. The stream typically shows old interview footage or recycled conference clips alongside text that reads: "Send 1,000 XRP to this address and receive 2,000 XRP back." It never works. Every token sent is stolen instantly.

These channels look completely authentic. They steal the real channel's name, profile picture, subscriber count (shown via a fake overlay), and video content. YouTube's verification tick can be faked in the stream thumbnail. In 2026, deepfake AI is now used to generate entirely synthetic presenter videos that show "Ripple CEO Brad Garlinghouse" or "Elon Musk" making the offer in real time.

XRP giveaway scams are among the most common. Scammers target XRP holders specifically because the Ripple brand is well-known and the XRP community is active. The same tactic is used with Bitcoin, Ethereum, Solana, and any token with a large following. Some streams have attracted over 100,000 simultaneous viewers — all fake, inflated by bots to create urgency.`,
    signs: [
      "Live stream shows a real celebrity or CEO apparently giving away crypto — this is always fake, no exceptions",
      "QR code or crypto address displayed on screen asking you to send funds to 'receive double back'",
      "Countdown timer or 'limited slots remaining' to pressure you to act fast",
      "Comments section shows people claiming they received their crypto — all bots",
      "Channel was created recently or has a different account ID to the official channel",
      "Stream title says 'LIVE', 'OFFICIAL', '2x EVENT', or uses the name of a real company",
    ],
    warning: "No legitimate company, celebrity, or crypto project ever runs a 'send crypto to get more back' promotion. This is a 100% guaranteed scam every single time. Report the stream to YouTube immediately via the flag icon.",
    article: { label: "Read: Crypto and AI Scams 2026 — Deepfakes and Fraud Guide", href: "/blog/crypto-ai-scams-2026-fake-calls-deepfakes-social-media" },
  },
  {
    icon: "🤖",
    title: "AI Deepfake Crypto Scams",
    desc: `Scammers now use AI tools to clone the voice, face, and mannerisms of real public figures — Elon Musk, Martin Lewis, Jeremy Clarkson, and popular crypto YouTubers are the most common targets. These deepfake videos are inserted into paid ads on YouTube, Facebook, Instagram, and TikTok, often promoting fake investment platforms or token launches.

The quality in 2026 has improved dramatically. Early deepfakes had obvious tells — unnatural blinking, lip sync issues, robotic voice. The latest generation fakes are nearly indistinguishable from real video without technical analysis. Martin Lewis has had to publicly deny being involved in crypto investments dozens of times due to the sheer volume of fakes using his face.

Beyond video ads, scammers use AI to generate personalised WhatsApp voice messages that sound exactly like a friend or family member — called voice cloning fraud. These messages typically claim the person is in trouble and needs cryptocurrency urgently. The calls are made with data harvested from social media and can be extremely convincing.`,
    signs: [
      "A celebrity or financial expert appears to endorse a specific crypto platform or token in a video ad",
      "Voice sounds slightly flat, robotic, or the mouth movements are slightly off from the audio",
      "The video was shared via social media ad — not on the celebrity's verified official channel",
      "You receive a voice message from a 'friend' or 'family member' asking for crypto urgently",
      "Promised returns are always large, specific, and guaranteed — real investing never works like this",
    ],
    warning: "Martin Lewis, Elon Musk, and every other celebrity you see promoting crypto in ads are deepfakes. No UK financial journalist or tech billionaire is running crypto investment promotions on social media.",
    article: { label: "Read: Crypto and AI Scams 2026 — Deepfakes and Fraud Guide", href: "/blog/crypto-ai-scams-2026-fake-calls-deepfakes-social-media" },
  },
  {
    icon: "🎣",
    title: "Phishing Attacks",
    desc: `Phishing remains the single most common way crypto is stolen in the UK. Scammers send emails, text messages, and WhatsApp messages impersonating major exchanges — Coinbase, Kraken, Binance, Ledger — as well as HMRC, banks, and even the FCA itself. The message contains a link to a cloned website that looks identical to the real one.

When you enter your login details, they are captured instantly. From that point the scammer can log into your real account, bypass two-factor authentication by intercepting your SMS code, and empty your holdings in minutes. More sophisticated attacks intercept your session token mid-login, meaning even 2FA doesn't protect you.

In 2026, AI generates phishing emails that are grammatically perfect, use your real name, reference your account details (harvested from data breaches), and include convincing fake transaction histories. Some phishing campaigns use lookalike domains that differ from the real URL by just one character — coinbbase.com, krakken.io, binancce.net. These are extremely easy to miss.`,
    signs: [
      "Email creates urgency — 'Your account has been compromised', 'Verify now or lose access', 'Suspicious login detected'",
      "Sender domain is one letter different from the real exchange (check carefully)",
      "Link destination URL is different from the real site — hover before clicking",
      "Message asks for your seed phrase, private key, or 2FA code — no legitimate service ever does this",
      "Text or WhatsApp from 'Coinbase' or 'Kraken' asking you to call a number or click a link",
    ],
    warning: "Never click links in unsolicited emails or texts. Always type exchange URLs directly into your browser from memory or a saved bookmark. No legitimate exchange, wallet provider, or HMRC will ever ask for your seed phrase under any circumstances.",
    article: { label: "Read: Top Security Risks in Digital Assets", href: "/blog/top-4-security-risks-in-digital-assets-and-how-to-avoid-them" },
  },
  {
    icon: "📲",
    title: "Social Media Impersonation Scams",
    desc: `Scammers create fake accounts on Twitter/X, Instagram, Telegram, and Facebook that closely mimic real crypto projects, exchanges, influencers, and customer support teams. They use identical profile pictures, similar usernames (swapping an 'l' for a '1' or adding an underscore), and copy recent posts from the real account.

The most dangerous version is fake customer support. Someone posts publicly on Twitter that they are having trouble withdrawing from Binance. Within minutes, a fake Binance support account replies offering to help — asking the user to share their login details or visit a support site to resolve the issue. The details are stolen instantly.

Fake project accounts are used to announce "exclusive early access" to token sales, NFT mints, or staking opportunities — always requiring you to connect your wallet to a malicious site. The moment you sign the transaction, a wallet drainer script empties your holdings.`,
    signs: [
      "Account has a very similar name to a real exchange or influencer but with subtle differences",
      "Account appears in replies to your post offering help within seconds",
      "DM offers exclusive opportunities, presales, or priority access to anything",
      "Account asks you to click a link and connect your wallet",
      "Profile was created recently or has very few posts despite a high follower count",
    ],
    warning: "Official crypto exchanges do not provide support via Twitter DMs, Instagram, or Telegram. Any unsolicited message claiming to be from an exchange, project, or influencer asking for login details is a scam.",
    article: null,
  },
  {
    icon: "🪤",
    title: "Rug Pulls",
    desc: `A rug pull is when developers of a crypto project — typically a new token or DeFi protocol — raise funds from investors through hype and marketing, then suddenly withdraw all liquidity and disappear. The token crashes to zero. It is called a rug pull because the developers literally pull the rug out from under investors.

The playbook is predictable. A new token is launched with a professional website, a whitepaper full of vague technical promises, and a Telegram group that grows rapidly via paid promotion. Influencers are paid (often undisclosed) to promote it. FOMO is engineered. Early investors see huge gains as the price pumps — then at a predetermined point, the developers dump their pre-allocated tokens, drain the liquidity pool, and shut down all communications.

Memecoin season in 2025–2026 produced hundreds of rug pulls per week. Many lasted less than 24 hours. Some pulled in millions before collapsing. The anonymous nature of blockchain development combined with the speed of social media hype makes rug pulls extremely difficult to prosecute.`,
    signs: [
      "Development team is anonymous with no verifiable LinkedIn, Twitter history, or real identities",
      "Smart contract has not been audited by a reputable independent firm (CertiK, Hacken, Trail of Bits)",
      "Large percentage of supply held by a single wallet or small group of wallets",
      "Promises of 1,000%+ returns within weeks or 'guaranteed' APY with no explanation of risk",
      "Influencers promoting the project without clear paid partnership disclosures",
      "Lock-up period for developer tokens is short or not publicly verifiable on-chain",
    ],
    warning: "Research the team thoroughly — if they are anonymous with no track record, treat it as high-risk. A third-party smart contract audit is the minimum acceptable standard. If the APY sounds too good to be true, it is a mechanism for transferring your money to someone else.",
    article: { label: "Read: Memecoins Explained — Risks and UK Tax", href: "/blog/memecoins-explained-what-they-are-why-they-boom-and-the-uk-tax-implications" },
  },
  {
    icon: "📈",
    title: "Fake Investment Platforms",
    desc: `These platforms are designed to look like professional trading dashboards. They display real-time price charts, portfolio growth figures, and transaction histories — all of it fabricated. Victims are shown impressive profits on screen that do not exist. When they attempt to withdraw, they are told they must first pay tax, a compliance fee, a wallet verification deposit, or a "trading insurance" fee. Each payment leads to another demand. No withdrawal ever arrives.

The platforms are hosted on slick websites with professional design, live chat support (staffed by scammers), and sometimes even fake regulatory certificates or FCA numbers that belong to legitimate businesses. The FCA number listed is cloned from a real firm — a practice called an 'authorised firm clone'.

UK victims of these platforms lose an average of £20,000 before they realise what has happened. Recovery is extremely difficult as funds are moved through multiple wallets and jurisdictions immediately. Examples flagged on this site include Lyndora, Aurum Foundation, and Robincapitaltrader.com.`,
    signs: [
      "Guaranteed fixed monthly returns (e.g. '8% per month', '40% in 30 days') — this does not exist",
      "Platform not found on the FCA register, or its FCA number belongs to a different firm",
      "You are asked to pay an upfront fee or 'tax' before you can make a withdrawal",
      "Pressure to recruit friends or family in exchange for commission",
      "Initial small withdrawal is approved to build trust, then larger withdrawals are blocked",
      "Customer support is only reachable by WhatsApp or Telegram, not a verifiable UK address",
    ],
    warning: "Check every platform on the FCA register before sending any money. Guaranteed returns do not exist. The moment a platform asks you to pay a fee to unlock a withdrawal, you are being scammed — the fee simply vanishes and they invent another reason you cannot withdraw.",
    links: [
      { label: "Is Lyndora a Scam?", href: "/blog/is-lyndora-a-scam-what-uk-investors-need-to-know-about-this-suspicious-site" },
      { label: "Is Aurum Foundation a Scam?", href: "/blog/is-aurum-foundation-a-scam-the-warning-signs-uk-investors-must-know" },
      { label: "Robincapitaltrader.com Red Flags", href: "/blog/nan0%9f%9a%a8-robincapitaltrader-com-high-risk-investment-platform-with-multiple-red-flags" },
    ],
  },
  {
    icon: "💬",
    title: "Romance Scams (Pig Butchering)",
    desc: `Pig butchering — the name comes from the practice of fattening a pig before slaughter — is one of the most psychologically devastating scams operating in the UK. A scammer builds a genuine-feeling relationship with a victim online over weeks or months. They are patient, attentive, and emotionally intelligent. The relationship feels completely real. Then, carefully, they introduce a crypto investment platform they claim to have made life-changing money from.

Scammers operating these schemes are often themselves trafficking victims, forced to work in scam compounds in Southeast Asia — particularly Myanmar, Cambodia, and Thailand. They work from scripts designed by professionals, and dozens of them may be simultaneously running the same playbook on hundreds of UK victims.

Once you invest on their platform, your "profits" grow rapidly. They encourage you to invest more. When you attempt to withdraw, the platform freezes your funds and demands taxes, fees, or verification payments — the same pattern as fake investment platforms. Victims typically lose £30,000–£250,000. This is one of the fastest-growing fraud types in the UK, with Action Fraud reporting a 40% increase year-on-year.`,
    signs: [
      "New online contact found via dating app, LinkedIn, WhatsApp, or random social media is unusually attentive and romantic quickly",
      "They are always too busy or too far away to meet in person — often claim to be working abroad",
      "After building trust over weeks, they casually mention a crypto investment platform that changed their life",
      "They offer to guide you through the platform personally and help you make your first investment",
      "The platform they recommend is not on the FCA register and cannot be found via normal Google searches",
      "They get emotionally upset or distant if you express doubt — designed to keep you emotionally invested",
    ],
    warning: "Be extremely sceptical of any online contact who eventually introduces you to an investment opportunity, no matter how long you have known them online. If the relationship started online and money is now involved, this is the number one warning sign of pig butchering. Talk to someone you trust before sending anything.",
    article: null,
  },
  {
    icon: "📱",
    title: "Fake Crypto Exchange Apps",
    desc: `Counterfeit apps appear in the Apple App Store and Google Play Store, as well as being distributed via WhatsApp, Telegram, and text message links. They impersonate real platforms — Coinbase, Binance, Kraken, MetaMask, Ledger Live — with near-identical icons, names, and interfaces. Once installed, they either steal your login credentials directly or ask you to import your seed phrase to "restore your wallet" — at which point your funds are drained immediately.

Some fake apps are so convincing they pass app store review by starting as legitimate utilities, then adding malicious functionality in a later update. Others appear high in search results when you search for the real app name, positioned above the genuine listing.

A more advanced variant involves a scammer building trust first — via social media or dating app — then sending a link to a "premium version" of a trading app that lets them access "exclusive investment pools". The app looks functional and shows growing profits, but all funds sent to it go directly to the scammer.`,
    signs: [
      "App was downloaded via a link in a message rather than by searching the official app store",
      "App reviews look fake — overly positive, short, from new accounts",
      "During setup, the app asks for your seed phrase or private key — legitimate wallets never ask for this after initial setup",
      "App icon, name, or interface has subtle differences from the real one (different shade, slightly different layout)",
      "A contact online has recommended a specific app link and is keen for you to invest through it",
    ],
    warning: "Only download exchange and wallet apps by searching the official exchange website first and following their link to the app store. Never install an app sent to you via a link in any message. Legitimate wallet apps never ask you to re-enter your seed phrase.",
    article: { label: "Read: Best Crypto Exchanges UK — Verified and Safe", href: "/blog/best-crypto-exchanges-uk-2025" },
  },
  {
    icon: "🎯",
    title: "Pump and Dump Schemes",
    desc: `Pump and dump is an old stock market fraud applied to crypto — and it is widespread. A coordinated group of traders buy a low-cap token in large quantities, artificially inflating the price. They then use Telegram groups, Discord servers, Twitter/X accounts, and TikTok to aggressively promote the token to retail investors, creating FOMO. When retail buyers drive the price up further, the coordinating group sells everything simultaneously — the "dump" — crashing the price and leaving retail investors with worthless tokens.

Some pump and dump schemes are marketed openly as "calls" in Telegram groups with thousands of subscribers. Members are told to buy a specific token at a specific time. The group organiser and a small inner circle always buy before the announcement and sell before the majority of members can exit. The public members always lose money — the gains go entirely to those who control the timing.

Influencer-driven pump and dump is common on TikTok and YouTube Shorts. A paid promotional post shows a token "mooning" with excited commentary, no risk disclosure, and a call to buy immediately. UK law requires influencers to declare paid crypto promotions, but enforcement is inconsistent.`,
    signs: [
      "Telegram or Discord group announces a 'buy signal' for a specific low-cap token at a specific time",
      "TikTok or YouTube video shows a token gaining 500%+ with urgent commentary to buy now",
      "The token has low trading volume normally but is suddenly being discussed everywhere at once",
      "Social media accounts with many followers are simultaneously posting about the same obscure token",
      "Influencer promotes a token without clear #ad or #sponsored disclosure",
    ],
    warning: "By the time you see a token being aggressively promoted, the people who matter have already bought and are about to sell to you. Pump and dump relies entirely on latecomers providing exit liquidity. Never buy a token based on a Telegram buy signal or viral social media post.",
    article: null,
  },
  {
    icon: "🪙",
    title: "Fake Airdrop and Wallet Drainer Scams",
    desc: `Scammers advertise fake token airdrops — free crypto distributed to wallet holders — that require you to connect your wallet to a malicious website. The moment you connect and sign the transaction, a smart contract called a wallet drainer is activated. It requests unlimited approval to transfer your tokens, and within seconds your entire wallet is emptied. The transaction looks routine if you do not read it carefully.

Fake airdrops are promoted via official-looking tweets from hacked accounts, Discord announcements, email campaigns, and paid ads. They mimic real projects — Uniswap, Blur, LayerZero, any high-profile protocol that has run genuine airdrops. The scam works because legitimate airdrops do exist, and crypto users are conditioned to look for them.

NFT-related drainers operate on the same principle. A message in a Discord server for a legitimate NFT project announces an "exclusive mint" with a link. The link goes to a fake minting site. Signing the transaction drains your wallet. These attacks have stolen hundreds of millions of dollars globally in 2025–2026.`,
    signs: [
      "You receive a notification about an airdrop from a project you hold or follow — but you did not sign up for it",
      "The site asks you to connect your wallet and sign a transaction to 'claim' your tokens",
      "The transaction requests approval to spend an unlimited amount of your tokens",
      "The URL is slightly different from the real project's official site",
      "The announcement came via DM, a new Discord account, or a recently created Twitter account",
    ],
    warning: "Never connect your main wallet to an airdrop claim site unless you have verified the URL character by character against the project's official website. Use a separate burner wallet for interacting with any new protocol. If a transaction asks for unlimited token approval, reject it.",
    article: null,
  },
  {
    icon: "📵",
    title: "SIM Swap Attacks",
    desc: `A SIM swap attack is when a scammer convinces your mobile network provider to transfer your phone number to a SIM card they control. Once they have your number, they can receive your SMS two-factor authentication codes, reset passwords on your email and exchange accounts, and drain your crypto holdings within minutes — even without ever knowing your passwords.

The information needed to perform a SIM swap — your name, address, date of birth, and sometimes the last four digits of an account number — is often available from data breaches or social media profiles. The scammer calls your mobile provider posing as you and claims their phone was lost or stolen. Customer service staff, under pressure to resolve issues quickly, sometimes grant the transfer with insufficient verification.

UK mobile networks have improved their processes but SIM swap fraud remains active. Anyone with significant crypto holdings using SMS-based 2FA is at risk. Several high-profile UK crypto holders have lost six and seven-figure sums to SIM swap in 2025–2026.`,
    signs: [
      "Your phone suddenly loses all signal and cannot make calls or use data — this can indicate your number has been ported",
      "You stop receiving SMS messages, especially 2FA codes",
      "You receive unexpected texts from your mobile provider about account changes you did not make",
      "Your exchange accounts generate 'new login' alerts from locations you do not recognise",
    ],
    warning: "Switch from SMS-based 2FA to an authenticator app (Google Authenticator, Authy) or hardware security key for all crypto and email accounts immediately. SMS 2FA can be intercepted via SIM swap — it is the weakest form of two-factor authentication.",
    article: null,
  },
  {
    icon: "🔁",
    title: "Crypto Recovery Scams",
    desc: `Recovery scams target people who have already been defrauded. After losing money to a crypto scam, victims often search online for help recovering their funds. Scammers monitor forums, social media, and search results for people in this situation, then contact them posing as crypto recovery specialists, blockchain investigators, or solicitors with experience in fraud recovery.

They claim to be able to trace stolen funds on the blockchain and work with exchanges or law enforcement to recover them. They charge upfront fees — typically £500–£5,000 — and provide convincing-looking reports and case references. After payment, they either disappear or invent further costs required before the funds can be released. The victim is scammed a second time.

Some recovery scammers are sophisticated enough to run fake review sites that show glowing testimonials from previous "clients" — all fabricated. They create WhatsApp groups with fake clients who vouch for the service. The reality is that crypto transactions on public blockchains can be traced, but actual recovery requires legal action in the jurisdiction where the scammer is based — a process that is genuinely difficult and rarely results in recovery.`,
    signs: [
      "Someone contacts you unsolicited after you posted about being scammed online",
      "They claim to specialise in blockchain tracing and crypto fraud recovery",
      "They ask for upfront fees before beginning any work",
      "They cannot provide a verifiable UK business address, Companies House number, or SRA registration",
      "They guarantee recovery — no legitimate firm can guarantee this",
    ],
    warning: "Legitimate fraud recovery does exist via solicitors and specialist firms, but you should find them through the Law Society website or Solicitors Regulation Authority — not via someone who contacted you. If they ask for money upfront and guarantee results, it is a second scam.",
    article: null,
  },
  {
    icon: "📞",
    title: "Telephone Impersonation Scams (Binance, Coinbase, and Blockchain Companies)",
    desc: `You receive an unexpected phone call from someone claiming to work for Binance, Coinbase, Kraken, or a generic "blockchain security team." They tell you that suspicious activity has been detected on your account — an unauthorised login from a foreign country, a large withdrawal attempt, or a flag from their fraud department. They sound professional, use correct terminology, and may even know your name and email address.

The call is designed to create immediate panic. They tell you your funds are at risk and that you must act now to protect them. Their solution always involves moving your crypto — to a "secure vault wallet" they provide, to a "verified escrow account," or sometimes by purchasing gift cards or Bitcoin at an ATM and sending it to an address they give you. The moment you send anything, it is gone.

These calls are often preceded by a spoofed caller ID that displays a real Binance or Coinbase phone number — the technology to fake caller ID is cheap and widely available. Some callers operate from UK numbers. The scammers may already have some of your personal details from data breaches, which they use to make the call feel legitimate. Binance and every other major exchange will never call you out of the blue and ask you to move your funds.`,
    signs: [
      "Unexpected call from someone claiming to be from an exchange's fraud or security team",
      "Caller ID shows a real exchange phone number — this can be faked with spoofing technology",
      "They know your name, email, or partial account details — this comes from data breaches, not your actual account",
      "Urgent claim that your account has been compromised and you must act within minutes",
      "They ask you to move crypto to a 'safe' wallet address they provide, buy Bitcoin from an ATM, or purchase gift cards",
      "They ask you to share a verification code sent to your phone or email — this is your 2FA code, giving them account access",
    ],
    warning: "No legitimate crypto exchange will ever call you out of the blue to tell you to move your funds. If you receive this call — hang up immediately. Log in directly to your account via the real website to check for any genuine alerts. Call the exchange's official support number from their website if concerned.",
    article: null,
  },
  {
    icon: "👮",
    title: "Police Arrest Impersonation Scams",
    desc: `One of the most psychologically powerful scams operating in the UK. You receive a call from someone claiming to be a police officer — sometimes with a badge number, a police station name, and a convincing authoritative manner. They tell you that they have recently made an arrest and, in searching the suspect's possessions or devices, they discovered your personal information: your name, address, National Insurance number, or financial details.

They claim this means your identity has been compromised. They say criminals may have already accessed your crypto wallets or bank accounts, and that you need to take immediate action to "secure" your assets. They instruct you to withdraw your crypto and transfer it to a "protected government wallet" or "secure escrow account" they control while the investigation is underway. They may tell you not to tell anyone — including your bank — because the investigation is sensitive and someone inside your bank could be involved.

The intimidation is deliberate and extremely effective. The caller may pretend to transfer you to a senior officer or even a fake "Financial Crimes Unit." Victims are often elderly but the scam targets all age groups. Real police officers in the UK will never ask you to transfer money, crypto, or any assets over the phone. The Metropolitan Police and Action Fraud have both issued specific warnings about this exact scam.`,
    signs: [
      "Unexpected call from someone claiming to be a police officer, detective, or financial crimes investigator",
      "They say your personal details were found on an arrested suspect and your accounts are at risk",
      "They instruct you to move crypto or cash to a 'safe account' or 'government wallet' they provide",
      "They tell you not to tell your bank, family, or friends because the investigation is confidential",
      "They apply extreme urgency — you must act within the hour or your funds will be lost",
      "They transfer you to a 'supervisor' or 'senior officer' to add authority — this is another scammer",
    ],
    warning: "Real police officers will never ask you to transfer money or crypto over the phone under any circumstances. The 'don't tell your bank' instruction is a specific tactic to prevent you from getting help. If you receive this call, hang up, wait five minutes (scammers can keep your line open briefly), and call 101 from a different phone or mobile to verify. Report to Action Fraud immediately.",
    article: null,
  },
  {
    icon: "🔐",
    title: "Exchange and Protocol Hacks",
    desc: `Even legitimate, well-funded exchanges and DeFi protocols are targeted by sophisticated hackers — often state-sponsored groups, most notably North Korea's Lazarus Group, which has stolen over $3 billion in crypto assets. When an exchange is hacked, user funds held in the exchange's custody can be lost or frozen for extended periods. In DeFi, smart contract exploits can drain protocol treasuries instantly.

In 2026, the Humanity Protocol suffered a $31 million exploit that crashed the H token by 80% within hours. ByBit lost $1.5 billion in February 2025 to a Lazarus Group attack — the largest single crypto theft in history. Radiant Capital and Ronin Network have also suffered nine-figure losses in recent years.

The key lesson is that funds held on exchanges and in DeFi protocols are exposed to counterparty risk. The safest storage for long-term crypto holdings is a hardware wallet you control, where you hold the private keys and no centralised entity can lose your funds.`,
    signs: [
      "Token price drops 50%+ suddenly with no news announcement",
      "The exchange or platform disables withdrawals without explanation",
      "Official social media channels go quiet or release vague statements",
      "Blockchain explorers show large, unusual transfers out of the protocol's main wallets",
      "Community discussion erupts in Telegram or Discord about missing funds or failed transactions",
    ],
    warning: "Keep long-term crypto holdings in a hardware wallet you control. Never hold more on any exchange than you can afford to lose entirely. Diversify across multiple storage solutions for significant holdings.",
    article: { label: "Read: Humanity Protocol $31M Hack Explained", href: "/blog/humanity-protocol-hack-31-million-stolen-h-token-crash-2026" },
  },
];

const SAFETY_CHECKLIST = [
  { text: "Use a hardware wallet (Ledger or Trezor) for all long-term crypto holdings — never leave significant amounts on an exchange", href: "/blog?category=Wallets" },
  { text: "Replace SMS two-factor authentication with an authenticator app (Google Authenticator, Authy) or hardware security key on every account", href: null },
  { text: "Never share your seed phrase with anyone, ever — not support staff, not a friend, not an app, not even if you think your account is at risk", href: null },
  { text: "Check every financial firm on the FCA register before sending any money — including the specific FCA number, not just the company name", href: "https://register.fca.org.uk" },
  { text: "Use a dedicated email address for crypto accounts — not your main email that is connected to your social media, shopping accounts, or employer", href: null },
  { text: "Verify URLs character by character before logging in to any exchange or wallet — bookmark the real URL and always use the bookmark", href: null },
  { text: "Keep the majority of your holdings in self-custody — if you do not hold the keys, you do not own the crypto", href: "/blog/self-custody-why-you-should-own-your-crypto-keys" },
  { text: "If you receive any unsolicited message about crypto — from a stranger, a contact online, or even a friend — treat it as a potential scam until you have verified it independently", href: null },
  { text: "Never click links in emails, texts, or WhatsApp messages that relate to your crypto accounts — always navigate directly to the site", href: null },
  { text: "Understand the psychological tricks scammers use — urgency, FOMO, authority, and false social proof are the main tools", href: "/blog/the-psychology-of-crypto-investing-avoiding-fomo-and-panic-selling" },
  { text: "Use a separate 'burner' wallet when interacting with new DeFi protocols or airdrop claims — never use your main wallet", href: null },
  { text: "Report any scam attempt to Action Fraud and the FCA — your report could prevent someone else from being defrauded", href: "https://www.actionfraud.police.uk" },
];

const ANCHOR_MAP = [
  "youtube-livestream-giveaway-scams",
  "ai-deepfake-crypto-scams",
  "phishing",
  "social-media-impersonation",
  "rug-pulls",
  "fake-platforms",
  "romance-scams",
  "fake-apps",
  "pump-and-dump",
  "fake-airdrops",
  "sim-swap",
  "recovery-scams",
  "telephone-impersonation-scams",
  "police-arrest-scams",
  "exchange-hacks",
];

export default function ScamWatchPage() {
  return (
    <main style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 20px 80px" }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Crypto Scam Watch UK 2026",
        description: "Complete guide to crypto scams targeting UK investors — YouTube giveaways, deepfakes, rug pulls, pig butchering, fake airdrops, SIM swap, recovery fraud.",
        url: "https://digitechlifestyle.com/scam-watch",
        author: { "@type": "Person", name: "Joe Robertson" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://digitechlifestyle.com" },
            { "@type": "ListItem", position: 2, name: "Scam Watch", item: "https://digitechlifestyle.com/scam-watch" },
          ],
        },
      }) }} />

      {/* Breadcrumb */}
      <nav style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "32px", display: "flex", gap: "6px", alignItems: "center" }}>
        <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>Home</Link>
        <span>›</span>
        <span style={{ color: "var(--fg)" }}>Scam Watch</span>
      </nav>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f87171", marginBottom: "12px" }}>
        🔒 DigiTech Lifestyle — Scam Watch
      </p>
      <h1 style={{ fontSize: "clamp(30px,5vw,46px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 20px" }}>
        Crypto Scam Watch UK 2026
      </h1>

      <p style={{ fontSize: "16px", color: "var(--fg)", lineHeight: 1.8, maxWidth: "680px", margin: "0 0 16px" }}>
        UK crypto investors lose an estimated <strong>£300 million to scams every year</strong>. The tactics are getting harder to spot. AI-generated deepfakes, fake YouTube live streams running 24 hours a day, romance scams that take months to execute, and sophisticated wallet drainers that empty your holdings in seconds — the range and complexity of fraud targeting UK investors in 2026 is unprecedented.
      </p>
      <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.8, margin: "0 0 16px" }}>
        This page covers every major scam type operating right now — what they are, how they work, the psychological tricks behind them, and exactly what to look for before you lose money. Whether you are a complete beginner or an experienced trader, understanding these patterns is the best protection you have.
      </p>
      <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.8, margin: "0 0 16px" }}>
        Each entry below includes real examples, specific warning signs, and links to full investigations published on this site. The safety checklist at the bottom covers the twelve most important steps you can take today to protect your holdings.
      </p>
      <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, margin: "0 0 32px" }}>
        By <strong style={{ color: "var(--fg)" }}>Joe Robertson</strong> — independent crypto writer and fraud researcher based in the UK. Writing about crypto since 2017. Last updated: July 2026.
      </p>

      {/* Stat bar */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px", marginBottom: "40px" }}>
        {[
          { stat: "£300m+", label: "Lost by UK investors to crypto fraud annually" },
          { stat: "13", label: "Distinct scam types covered on this page" },
          { stat: "40%", label: "Year-on-year increase in romance scam reports" },
          { stat: "£20k", label: "Average loss per fake investment platform victim" },
        ].map((item) => (
          <div key={item.stat} style={{ padding: "16px 18px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "10px", textAlign: "center" }}>
            <div style={{ fontSize: "22px", fontWeight: 900, color: "#f87171", marginBottom: "4px" }}>{item.stat}</div>
            <div style={{ fontSize: "11px", color: "var(--muted)", lineHeight: 1.45 }}>{item.label}</div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, marginBottom: "40px", padding: "16px 20px", background: "var(--bg-tint-red)", border: "1px solid oklch(55% 0.15 25 / 0.3)", borderRadius: "8px" }}>
        <strong style={{ color: "var(--fg)" }}>Disclaimer:</strong> This page is for educational purposes only and does not constitute financial or legal advice. If you have been a victim of fraud, report it to{" "}
        <a href="https://www.actionfraud.police.uk" target="_blank" rel="noopener noreferrer" style={{ color: "var(--amber)" }}>Action Fraud</a> (0300 123 2040) and the{" "}
        <a href="https://register.fca.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: "var(--amber)" }}>FCA</a>. If you are in immediate financial danger, contact your bank immediately and ask them to reverse any recent payments.
      </div>

      {/* Quick jump */}
      <div style={{ padding: "18px 22px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "10px", marginBottom: "48px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>Jump to scam type</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["YouTube Giveaways", "AI Deepfakes", "Phishing", "Social Media Fakes", "Rug Pulls", "Fake Platforms", "Romance Scams", "Fake Apps", "Pump & Dump", "Fake Airdrops", "SIM Swap", "Recovery Scams", "Phone Impersonation", "Police Scams", "Exchange Hacks", "Safety Checklist", "Report Fraud"].map((label, i) => (
            <a key={label} href={`#${i < 13 ? ANCHOR_MAP[i] : label.toLowerCase().replace(/[\s&]+/g,"-")}`}
              style={{ fontSize: "12px", fontWeight: 600, padding: "5px 12px", borderRadius: "20px", border: "1px solid var(--line)", color: "var(--muted)", textDecoration: "none" }}>
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Scam types */}
      <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", margin: "0 0 24px" }}>Every Crypto Scam Targeting UK Investors in 2026</h2>
      <div style={{ display: "grid", gap: "24px", marginBottom: "56px" }}>
        {SCAM_TYPES.map((s, i) => (
          <div key={s.title} id={ANCHOR_MAP[i]} style={{ padding: "26px 28px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <span style={{ fontSize: "28px", flexShrink: 0, marginTop: "3px" }}>{s.icon}</span>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "var(--fg)", margin: "0 0 14px" }}>{s.title}</h3>

                {s.desc.split("\n\n").map((para, pi) => (
                  <p key={pi} style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.8, margin: "0 0 14px" }}>{para.trim()}</p>
                ))}

                <div style={{ marginBottom: "16px" }}>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--fg)", margin: "0 0 8px" }}>Warning signs to look for:</p>
                  <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "6px" }}>
                    {s.signs.map((sign) => (
                      <li key={sign} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.65 }}>{sign}</li>
                    ))}
                  </ul>
                </div>

                <p style={{ fontSize: "13px", color: "#f87171", margin: "0 0 14px", padding: "12px 16px", background: "var(--bg-tint-red)", borderRadius: "8px", lineHeight: 1.65, borderLeft: "3px solid #f87171" }}>
                  ⚠️ {s.warning}
                </p>

                {"links" in s && s.links && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {s.links.map((l) => (
                      <Link key={l.href} href={l.href}
                        style={{ fontSize: "12px", fontWeight: 700, color: "var(--amber)", textDecoration: "none", padding: "7px 14px", border: "1px solid oklch(73% 0.17 78 / 0.3)", borderRadius: "6px" }}>
                        → {l.label}
                      </Link>
                    ))}
                  </div>
                )}

                {"article" in s && s.article && (
                  <Link href={s.article.href}
                    style={{ fontSize: "12px", fontWeight: 700, color: "var(--amber)", textDecoration: "none", padding: "7px 14px", border: "1px solid oklch(73% 0.17 78 / 0.3)", borderRadius: "6px", display: "inline-block" }}>
                    → {s.article.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Safety checklist */}
      <div id="safety-checklist" style={{ padding: "28px 30px", background: "var(--bg-tint-blue)", border: "1px solid oklch(55% 0.12 240 / 0.35)", borderRadius: "12px", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 800, color: "var(--fg)", margin: "0 0 6px" }}>🛡️ Your Crypto Security Checklist</h2>
        <p style={{ fontSize: "14px", color: "var(--muted)", margin: "0 0 22px", lineHeight: 1.65 }}>Twelve actions that will dramatically reduce your risk of losing money to crypto fraud. Work through these one by one if you have not already.</p>
        <div style={{ display: "grid", gap: "12px" }}>
          {SAFETY_CHECKLIST.map((item, idx) => (
            <div key={item.text} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 14px", background: "oklch(8% 0.015 240 / 0.5)", borderRadius: "8px" }}>
              <span style={{ color: "var(--amber)", fontWeight: 900, fontSize: "13px", flexShrink: 0, marginTop: "1px", minWidth: "20px" }}>{idx + 1}.</span>
              <span style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7 }}>
                {item.href ? (
                  item.href.startsWith("http") ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecorationColor: "oklch(73% 0.17 78 / 0.4)" }}>{item.text}</a>
                  ) : (
                    <Link href={item.href} style={{ color: "inherit", textDecorationColor: "oklch(73% 0.17 78 / 0.4)" }}>{item.text}</Link>
                  )
                ) : item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Report fraud */}
      <div id="report-fraud" style={{ padding: "24px 26px", background: "var(--bg-tint-red)", border: "2px solid oklch(55% 0.15 25 / 0.4)", borderRadius: "12px", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "19px", fontWeight: 800, color: "var(--fg)", margin: "0 0 8px" }}>Been scammed? Report it immediately.</h2>
        <p style={{ fontSize: "14px", color: "var(--muted)", margin: "0 0 20px", lineHeight: 1.75 }}>
          Reporting matters. It helps authorities identify patterns, share intelligence, and shut down operations before more people are harmed. The vast majority of crypto scam victims do not report — often from embarrassment or the belief that nothing can be done. Both are understandable, but reporting takes less than ten minutes and could prevent someone else from losing their savings.
        </p>
        <div style={{ display: "grid", gap: "12px" }}>
          {[
            { label: "Action Fraud — UK national fraud and cybercrime reporting centre", href: "https://www.actionfraud.police.uk", note: "Call 0300 123 2040 or report online at actionfraud.police.uk. Available 24/7." },
            { label: "FCA ScamSmart — report unauthorised firms and investment scams", href: "https://www.fca.org.uk/scamsmart", note: "Use the ScamSmart checker to verify any firm. Report cloned firms and fake platforms directly to the FCA." },
            { label: "FCA Register — verify any financial firm before investing", href: "https://register.fca.org.uk", note: "Search by firm name or FCA number. If a firm is not listed here, do not send them money under any circumstances." },
            { label: "Citizens Advice — free confidential fraud advice and next steps", href: "https://www.citizensadvice.org.uk", note: "Call 0808 223 1133 for free consumer advice. Can help you understand your rights and next steps after fraud." },
            { label: "National Cyber Security Centre — report online cybercrime and phishing", href: "https://www.ncsc.gov.uk/section/about-this-website/report-scam-website", note: "Report phishing websites, fake exchanges, and suspicious emails directly to NCSC." },
          ].map((link) => (
            <div key={link.href} style={{ padding: "14px 16px", background: "oklch(8% 0.01 25 / 0.4)", borderRadius: "8px" }}>
              <a href={link.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "14px", fontWeight: 700, color: "var(--amber)", textDecoration: "none", display: "block", marginBottom: "4px" }}>
                → {link.label}
              </a>
              <span style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.6 }}>{link.note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Related articles */}
      <h2 style={{ fontSize: "18px", fontWeight: 800, color: "var(--fg)", margin: "0 0 16px" }}>More DigiTech Scam &amp; Security Articles</h2>
      <div style={{ display: "grid", gap: "10px", marginBottom: "40px" }}>
        {[
          { label: "Top 4 Security Risks in Digital Assets and How to Avoid Them", href: "/blog/top-4-security-risks-in-digital-assets-and-how-to-avoid-them" },
          { label: "Crypto and AI Scams 2026: Fake Calls, Deepfakes and Social Media Fraud", href: "/blog/crypto-ai-scams-2026-fake-calls-deepfakes-social-media" },
          { label: "Is Lyndora a Scam? What UK Investors Need to Know", href: "/blog/is-lyndora-a-scam-what-uk-investors-need-to-know-about-this-suspicious-site" },
          { label: "Is Aurum Foundation a Scam? The Warning Signs UK Investors Must Know", href: "/blog/is-aurum-foundation-a-scam-the-warning-signs-uk-investors-must-know" },
          { label: "Humanity Protocol Hack: $31M Stolen and H Token Crashes 80%", href: "/blog/humanity-protocol-hack-31-million-stolen-h-token-crash-2026" },
          { label: "Self-Custody: Why You Should Own Your Crypto Keys", href: "/blog/self-custody-why-you-should-own-your-crypto-keys" },
          { label: "How to Recover Lost Crypto: Prevention and Solutions", href: "/blog/how-to-recover-lost-crypto-prevention-and-solutions" },
          { label: "The Psychology of Crypto Investing: Avoiding FOMO and Panic Selling", href: "/blog/the-psychology-of-crypto-investing-avoiding-fomo-and-panic-selling" },
        ].map((a) => (
          <Link key={a.href} href={a.href}
            style={{ fontSize: "13px", fontWeight: 600, color: "var(--fg)", textDecoration: "none", padding: "13px 16px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "8px", display: "block" }}>
            → {a.label}
          </Link>
        ))}
      </div>

      {/* Explore more */}
      <div style={{ padding: "18px 22px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "10px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>Explore More</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {[
            { label: "All Crypto Guides", href: "/blog?category=guides" },
            { label: "Exchange Reviews", href: "/reviews" },
            { label: "Wallet Safety Articles", href: "/blog?category=Wallets" },
            { label: "Resources Hub", href: "/resources" },
            { label: "Latest News", href: "/news" },
            { label: "About Joe Robertson", href: "/about" },
          ].map((l) => (
            <Link key={l.label} href={l.href}
              style={{ fontSize: "12px", fontWeight: 600, padding: "6px 12px", borderRadius: "20px", border: "1px solid var(--line)", color: "var(--muted)", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "48px", lineHeight: 1.6, opacity: 0.6 }}>
        Last updated: July 2026. DigiTech Lifestyle is an independent UK publication by Joe Robertson. Not affiliated with any exchange, regulator, or financial service. All scam examples are cited for educational purposes only.
      </p>
    </main>
  );
}
