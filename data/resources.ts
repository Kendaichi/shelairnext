import { BookOpen, FileText, Video, type LucideIcon } from "lucide-react";

export interface ResourceSection {
  heading: string;
  content: string[];
}

export interface Resource {
  slug: string;
  type: "Guide" | "Article" | "Case Study" | "Video";
  icon: LucideIcon;
  title: string;
  desc: string;
  metaDescription: string;
  date: string;
  readTime: string;
  sections: ResourceSection[];
  relatedSlugs: string[];
}

export const resources: Resource[] = [
  {
    slug: "commercial-ac-system-guide",
    type: "Guide",
    icon: BookOpen,
    title: "How to Choose the Right Commercial Air Conditioning System",
    desc: "Split systems, ducted or VRF? A practical guide to selecting the right AC system for your business.",
    metaDescription:
      "A practical guide to choosing commercial air conditioning systems. Compares split systems, ducted AC and VRF/VRV, explains sizing requirements and what to look for in brands and warranties.",
    date: "Feb 2026",
    readTime: "8 min read",
    sections: [
      {
        heading: "Understanding Your Options",
        content: [
          "Commercial air conditioning covers a wide range of system types — and choosing the wrong one for your building can mean years of inadequate comfort, excessive running costs or expensive rectification work. The main categories are split systems, multi-split systems, ducted air conditioning and VRF/VRV systems. Each is suited to different building sizes, layouts and usage patterns.",
          "The distinction between commercial and residential AC is more than just scale. Commercial systems run 10–14 hours per day, often six or seven days a week, must handle higher occupancy loads and are expected to operate reliably for 12–15 years. Equipment selection, installation quality and ongoing maintenance all matter more in a commercial context than they do for a home system.",
        ],
      },
      {
        heading: "Split Systems and Multi-Split Systems",
        content: [
          "A split system consists of one indoor unit connected to one dedicated outdoor unit. It is the most common and cost-effective solution for individual rooms or small spaces — consulting rooms, small offices, retail shops under 100sqm, cafes and similar spaces. Quality inverter split systems from brands like Daikin, Mitsubishi Electric and Fujitsu can be installed for $1,500–$3,500 per unit and provide excellent efficiency and reliability.",
          "A multi-split system connects multiple indoor units — typically two to eight — to a single outdoor unit. This is useful for medium-sized buildings where you want independent control of each room without running a separate outdoor unit for every space. The trade-off compared to VRF is less flexibility and efficiency at larger scales, but the upfront cost is meaningfully lower for small to medium installations.",
        ],
      },
      {
        heading: "Ducted Air Conditioning",
        content: [
          "Ducted systems use a single ceiling-mounted (or under-floor) air handler to distribute conditioned air through concealed ductwork to multiple rooms via grilles. The main advantages are aesthetics — only slim grilles are visible — and the ability to condition large open-plan spaces uniformly from a single system. Zone dampers allow different areas to be set to different temperatures or turned off independently.",
          "Ducted is generally the right choice for large open-plan offices, restaurants, hospitality venues, showrooms and any space where a consistent, invisible finish is important. Installation costs are higher than splits — typically $12,000–$40,000 depending on size and complexity — and the system is less suited to buildings where tenants will have separate metering requirements. It works best when planned into a new build or major fitout from the start.",
        ],
      },
      {
        heading: "VRF / VRV Systems",
        content: [
          "Variable Refrigerant Flow (VRF) or Variable Refrigerant Volume (VRV) systems are the most flexible and efficient option for larger commercial buildings. Multiple indoor units — potentially dozens — connect to shared outdoor plant, with each indoor unit individually controlled. Unlike ducted, there is no single point of failure for the whole building; unlike multiple split systems, outdoor equipment footprint is minimised.",
          "Advanced VRF systems support simultaneous heating and cooling — units on the south-facing side of a building can heat while units on the north side cool, with heat energy transferred between them rather than rejected to atmosphere. This heat recovery capability delivers significant energy savings in buildings with mixed internal conditions. VRF is ideal for hotels, medical centres, large office buildings and multi-tenancy commercial properties. Upfront costs are higher, but lifecycle operating costs are typically the lowest of any system type.",
        ],
      },
      {
        heading: "Getting the Sizing Right",
        content: [
          "An undersized system will run continuously without reaching setpoint, causing occupant discomfort and premature wear. An oversized system will short-cycle — reaching setpoint quickly, switching off, then restarting minutes later — which causes humidity problems, temperature swings and excessive compressor wear. Both scenarios are expensive and avoidable.",
          "Sizing requires a proper load calculation, not a rule of thumb. Key inputs include floor area, ceiling height, insulation quality, glazing area and orientation, internal heat loads from equipment and occupants, and the building's hours of use. In Queensland's climate, commercial spaces typically require 100–150W of cooling capacity per square metre, but this can vary significantly based on the factors above. Shelair conducts detailed load calculations as part of every commercial proposal.",
        ],
      },
      {
        heading: "Brand Selection, Efficiency and Warranties",
        content: [
          "The major commercial AC brands — Daikin, Mitsubishi Electric, Fujitsu, Actron and Samsung — are all well-supported across South East Queensland, with good parts availability and trained service networks. For commercial applications, prioritise brands with five-year or longer compressor warranties and a demonstrated service presence in your area.",
          "Energy efficiency ratings matter significantly over a system's operating life. Look for the COP (coefficient of performance) and EER (energy efficiency ratio) — higher numbers mean more cooling per watt consumed. Five-star or above energy ratings are recommended for any new commercial installation in Queensland. Shelair provides whole-of-life cost modelling across system options as part of our free site assessment and proposal process across Brisbane, Gold Coast and Sunshine Coast.",
        ],
      },
    ],
    relatedSlugs: ["split-system-vs-ducted", "inverter-ac-technology-guide", "reduce-ac-energy-costs"],
  },
  {
    slug: "reduce-ac-energy-costs",
    type: "Article",
    icon: FileText,
    title: "How to Reduce Commercial Air Conditioning Costs by Up to 40%",
    desc: "Practical strategies for cutting AC running costs without sacrificing comfort.",
    metaDescription:
      "Proven strategies to reduce commercial air conditioning energy costs by up to 40%. Covers thermostat settings, inverter upgrades, filter maintenance, coil cleaning, zoning and scheduling for Brisbane businesses.",
    date: "Jan 2026",
    readTime: "6 min read",
    sections: [
      {
        heading: "Why AC Is Your Biggest Energy Expense",
        content: [
          "Commercial air conditioning typically accounts for 40–60% of total building electricity consumption in Queensland — and with commercial electricity rates now exceeding $0.30/kWh for many SEQ businesses, an inefficient or poorly maintained AC system represents a significant and largely avoidable cost.",
          "The good news is that most commercial AC systems have substantial efficiency headroom. Energy audits consistently find savings of 25–40% are achievable without capital replacement — through a combination of operational adjustments, regular maintenance and low-cost upgrades. The strategies below can be applied in any order and the savings stack.",
        ],
      },
      {
        heading: "1. Set Your Thermostat Correctly",
        content: [
          "Every degree below 24°C increases cooling energy consumption by approximately 8–10%. If your office or retail space is set to 20°C, moving the setpoint to 24°C could reduce AC energy use by 30–40% immediately — with no capital expenditure and no reduction in comfort for most occupants. AIRAH (Australian Institute of Refrigeration, Air Conditioning and Heating) recommends 23–25°C as the optimal cooling range for occupied commercial spaces.",
          "Night setback is equally important. Raising setpoints to 28°C after hours, or using scheduling to switch systems off entirely when the building is unoccupied, eliminates energy waste during the hours when nobody benefits from cooling. In buildings where the AC runs 24 hours for habit rather than need, scheduling alone commonly saves 15–20% of total AC energy cost.",
        ],
      },
      {
        heading: "2. Upgrade to Inverter Technology",
        content: [
          "Non-inverter (fixed-speed) compressors cycle fully on and off to maintain temperature — consuming peak power on every start-up. Inverter compressors modulate their speed to match actual cooling demand, running at low output once the room reaches setpoint rather than shutting off and restarting repeatedly. The energy savings are consistent: inverter systems typically consume 30–40% less electricity than non-inverter equivalents under the same conditions.",
          "If your commercial AC is more than 10–12 years old and non-inverter, the energy savings from replacement often pay back the investment within 4–6 years in Queensland's climate — and the new system will then deliver ongoing savings for its entire operating life. Shelair can model the payback period for your specific system and usage pattern as part of a free assessment.",
        ],
      },
      {
        heading: "3. Clean Filters Every 4–6 Weeks",
        content: [
          "Dirty filters are the most common and most easily avoided cause of AC inefficiency. A heavily restricted filter forces the indoor unit's fan to work harder, reduces airflow across the evaporator coil, and can cause the coil to ice up — reducing system capacity by 20–30% while energy consumption remains constant or increases.",
          "In commercial environments with higher dust loads — retail with high foot traffic, workshops, kitchens — filter inspection every four weeks is recommended. Washable filters should be rinsed with warm water and dried completely before reinserting. In high-contamination environments, replacing disposable filters rather than washing them is often more practical. Shelair can demonstrate correct filter maintenance procedure during any service visit.",
        ],
      },
      {
        heading: "4. Schedule Annual Coil Cleaning",
        content: [
          "Even with regular filter maintenance, the indoor evaporator coil gradually accumulates a thin film of dust and bio-film that reduces heat transfer efficiency. Fouled coils can increase AC energy consumption by 15–25% and contribute to poor air quality and musty odours from the system.",
          "Professional coil cleaning during annual service restores full efficiency and should be a non-negotiable part of your maintenance schedule. Outdoor condenser coils in commercial environments — particularly near kitchens, loading docks or industrial areas — can block rapidly with grease and debris. A blocked condenser forces the compressor to work harder to reject heat, increasing energy consumption and dramatically shortening compressor life. Condenser coils in these environments should be inspected every three to six months.",
        ],
      },
      {
        heading: "5. Zone and Schedule Intelligently",
        content: [
          "Conditioning unoccupied spaces is pure waste. Zoning your building and programming your AC to match occupancy patterns — by day of week, time of day and area — is often the simplest and lowest-cost efficiency measure available. Modern commercial AC controllers allow occupancy scheduling with considerable precision; some of Shelair's clients have achieved 15–20% energy reductions through scheduling alone, with no capital expenditure on new equipment.",
          "Building automation systems can integrate AC scheduling with other building systems — lighting, access control, occupancy sensors — for more intelligent and responsive control. For businesses with variable or unpredictable occupancy, smart thermostats with occupancy sensing can deliver similar benefits at lower cost. Contact Shelair to discuss controls upgrades suitable for your system and budget.",
        ],
      },
    ],
    relatedSlugs: ["inverter-ac-technology-guide", "commercial-ac-maintenance-checklist", "commercial-ac-system-guide"],
  },
  {
    slug: "southport-medical-centre-case-study",
    type: "Case Study",
    icon: FileText,
    title: "Southport Medical Centre: Full VRF Upgrade Across Three Floors",
    desc: "How we replaced an ageing ducted system floor by floor — with zero disruption to patient services.",
    metaDescription:
      "Case study: Shelair replaces a 14-year-old ducted AC system at a Southport medical centre with a Daikin VRF system, staged across five weekends with zero clinic disruption and 38% projected energy savings.",
    date: "Dec 2025",
    readTime: "5 min read",
    sections: [
      {
        heading: "The Client",
        content: [
          "Southport Medical Centre is a multi-specialty private clinic occupying three floors of a commercial building in Southport, Gold Coast. The practice operates 24 consulting rooms, two procedure rooms, administrative offices, a pathology collection area and patient waiting areas across approximately 1,200sqm.",
          "Their existing ducted AC system was 14 years old, increasingly unreliable and generating frequent complaints from both staff and patients about inconsistent temperatures across the building. The practice was also facing rising energy costs and wanted a system that could be individually metered per floor to support a potential future sublease arrangement.",
        ],
      },
      {
        heading: "The Challenge",
        content: [
          "Replacing the entire AC system in an operating medical centre without disrupting patient appointments was the primary constraint. The existing ducted system served the whole building from a single air handler — a full cutover would have required closing the clinic for several days, which was not acceptable to the practice.",
          "Different areas of the clinic had fundamentally different requirements: consulting rooms needed individual temperature control, procedure rooms required stricter temperature and humidity tolerances, and the pathology collection area needed continuous cooling regardless of time of day. The building landlord also required that any new system support flexible zone-by-zone tenancy in the future — a requirement the existing ducted system could not meet.",
        ],
      },
      {
        heading: "Our Approach",
        content: [
          "Shelair proposed a Daikin VRV IV system, allowing each indoor unit to be individually controlled while sharing common outdoor plant — reducing the outdoor equipment footprint versus a split-system-per-room approach. The installation was staged across five weekends, with each floor completed over a single weekend to minimise clinic disruption. All weekday patient services continued without interruption throughout the project.",
          "Existing ceiling penetrations were utilised where practical to reduce make-good costs. New indoor units were specified from Daikin's compact cassette range to fit within the existing ceiling grid. Procedure rooms received individual humidity-sensing controllers with tighter setpoint tolerances; the pathology area was connected to an always-on circuit with a dedicated controller independent of the main building scheduling.",
        ],
      },
      {
        heading: "The Result",
        content: [
          "All three floors were commissioned and handed over within the contracted six-week schedule. Temperature variance across the building dropped from the 5–8°C range recorded in staff complaints to within 1–2°C of setpoint in all zones. Based on energy consumption data from the first quarter post-installation, the clinic is projecting a 38% reduction in AC-related electricity costs compared to the equivalent period in the prior year.",
          "The practice manager noted that patient complaints about temperature had effectively stopped — a first in several years. The new system also provides individual floor metering capability, satisfying the landlord's future tenancy requirement without any additional infrastructure work.",
        ],
      },
      {
        heading: "Key Outcomes",
        content: [
          "Six-week staged installation with zero disruption to weekday patient services. Floor-by-floor Daikin VRV system with individual zone control per room. 38% projected AC energy cost reduction. Stricter humidity and temperature control for procedure rooms and pathology. Individual floor metering for future tenancy flexibility. 5-year Shelair workmanship guarantee across all installed equipment.",
        ],
      },
    ],
    relatedSlugs: ["commercial-ac-system-guide", "split-system-vs-ducted", "reduce-ac-energy-costs"],
  },
  {
    slug: "split-system-vs-ducted",
    type: "Guide",
    icon: BookOpen,
    title: "Split System vs Ducted Air Conditioning: Which Is Right for Your Business?",
    desc: "A practical comparison to help you choose between split systems and ducted AC for your commercial space.",
    metaDescription:
      "Split system vs ducted air conditioning for commercial spaces. Compares costs, flexibility, aesthetics and suitability by building type — with guidance on when VRF/VRV is the better option.",
    date: "Nov 2025",
    readTime: "7 min read",
    sections: [
      {
        heading: "The Core Difference",
        content: [
          "A split system pairs one indoor unit with one dedicated outdoor unit to condition a single room or zone. A ducted system uses a single air handler — concealed in the ceiling or under the floor — to distribute conditioned air to multiple rooms through a network of ducts and grilles. Both can be zoned and scheduled; the right choice depends on your building type, layout, budget and how you use the space.",
          "Neither option is universally better. The same building might warrant splits for individual consulting rooms, ducted for an open-plan reception area and a VRF system for a multi-floor commercial tenancy. Understanding the strengths and limitations of each helps you make a cost-effective decision rather than defaulting to whichever system you've used before.",
        ],
      },
      {
        heading: "When Split Systems Make Sense",
        content: [
          "Split systems are the right choice for small to medium commercial spaces where individual room control matters more than a seamless aesthetic: medical consulting rooms, small offices, retail shops under 100sqm, cafes, hair salons and similar spaces. A quality inverter split system — Daikin, Mitsubishi Electric, Fujitsu — can be installed for $1,500–$3,500 per unit, making it the most accessible entry point for commercial cooling.",
          "Splits also suit tenanted buildings where separate metering is required, since each unit can be metered independently. They are the practical choice for refurbishments where running new ductwork through an existing ceiling is structurally or financially impractical. And for businesses on shorter leases, the lower upfront cost and ability to relocate units at the end of a lease reduces financial risk.",
        ],
      },
      {
        heading: "When Ducted Is the Better Choice",
        content: [
          "Ducted systems are the right choice for larger open-plan spaces where aesthetic consistency matters and the building supports concealed ductwork: offices over 200sqm, restaurants, hospitality venues, hotel lobbies, showrooms and retail flagships. The invisible finish — only slim grilles visible in the ceiling — is particularly important in premium or client-facing environments.",
          "Ducted systems with zone dampers provide excellent whole-building control and are highly effective when paired with a building automation system. Installation costs are higher — typically $12,000–$40,000 for a commercial space, depending on size and zone count — but the result is a uniform, professional environment that a collection of wall-mounted splits cannot replicate. Ducted is most cost-effective when planned into a new build or major fitout from the start, rather than retrofitted into an existing building.",
        ],
      },
      {
        heading: "The VRF/VRV Option for Larger Buildings",
        content: [
          "For medium to large commercial buildings that need the flexibility of individual room control at scale, VRF/VRV is often the right answer. Each indoor unit is independently controlled, but all share common outdoor plant — reducing the outdoor equipment footprint versus a split-system-per-room approach and providing more sophisticated system management.",
          "Advanced VRF systems support heat recovery — some indoor units can operate in heating mode while others cool simultaneously, transferring heat energy between zones rather than rejecting it to atmosphere. This is particularly efficient in buildings with mixed orientations or significant internal heat loads. The upfront cost is higher than either splits or a basic ducted system, but operating costs are typically the lowest of any system type over the system's life.",
        ],
      },
      {
        heading: "Cost Comparison",
        content: [
          "Split system (per room): $1,500–$3,500 installed for a quality inverter unit. Multi-split (one outdoor, two to eight indoor units): $6,000–$18,000 depending on capacity and configuration. Ducted system (whole building): $12,000–$40,000 or more depending on size, zone count and ceiling complexity. VRF/VRV system: $25,000–$80,000 or more for a full commercial installation.",
          "Operating costs often matter more than upfront cost for high-usage commercial environments. A ducted system that runs 12 hours per day, six days a week will accumulate significant energy costs over its lifetime — and a well-chosen, correctly-sized system can save tens of thousands of dollars in electricity compared to the wrong specification. Shelair provides detailed whole-of-life cost modelling as part of every commercial proposal.",
        ],
      },
      {
        heading: "Making the Right Decision",
        content: [
          "As a general guide: if you have one to four rooms to condition independently, start with split or multi-split systems. For larger open-plan spaces where aesthetics matter, ducted is usually the right choice. For complex multi-room buildings where you need individual control at scale — or buildings with simultaneous heating and cooling demands — VRF is worth the investment.",
          "There is rarely a single correct answer, and the best outcome often involves a hybrid approach — ducted in open areas, splits or VRF in private offices or specialist rooms. Shelair provides free site assessments and no-obligation proposals across Brisbane, Gold Coast and Sunshine Coast, covering all system types and helping you choose the right specification for your building and budget.",
        ],
      },
    ],
    relatedSlugs: ["commercial-ac-system-guide", "inverter-ac-technology-guide", "southport-medical-centre-case-study"],
  },
  {
    slug: "commercial-ac-maintenance-checklist",
    type: "Video",
    icon: Video,
    title: "Commercial AC Maintenance: What to Check Every Quarter",
    desc: "A practical quarterly maintenance checklist for business owners and facilities managers.",
    metaDescription:
      "Quarterly commercial air conditioning maintenance checklist for business owners and facilities managers. Covers filter checks, coil inspection, outdoor unit, controls review and when to call a professional.",
    date: "Oct 2025",
    readTime: "5 min read",
    sections: [
      {
        heading: "Why Quarterly Checks Matter",
        content: [
          "Commercial AC systems operate for 10–14 hours per day in most business environments — far more than residential systems. This duty cycle means maintenance issues develop faster: filters block in weeks rather than months, coils accumulate bio-film more rapidly, and component wear progresses quickly. The cost difference between catching a problem at the inspection stage versus the emergency repair stage is often an order of magnitude.",
          "The following checklist is designed for facilities managers and business owners — no technical knowledge is required. These are visual and operational checks that take 20–30 minutes per system. Anything that raises a concern should be reported to your HVAC contractor at the next scheduled service, or immediately if performance appears to be affected.",
        ],
      },
      {
        heading: "1. Filter Inspection and Cleaning",
        content: [
          "Locate the air filter in each indoor unit — in most wall-mounted splits and ceiling cassettes, the front panel lifts or slides to reveal the filters. Remove the filter and hold it up to a light source: if you cannot see light through it, it needs cleaning or replacement immediately. A fully blocked filter can reduce system capacity by 20–30% and cause the evaporator coil to freeze.",
          "Washable filters should be rinsed with warm water and allowed to dry completely before reinserting — never reinsert a wet filter. In high-dust commercial environments such as workshops, kitchens or high-traffic retail, consider replacing disposable filters at each quarterly check rather than washing them. The cost of replacement filters is minimal compared to the energy savings from unrestricted airflow.",
        ],
      },
      {
        heading: "2. Indoor Unit Visual and Smell Check",
        content: [
          "Inspect the indoor unit casing for signs of water leaks — staining or watermarks below the unit or on the ceiling beneath a cassette indicate a blocked condensate drain. This should be attended to promptly; a continuously dripping indoor unit can cause ceiling damage and create slip hazards.",
          "With the system running, stand near the indoor unit and briefly assess the airflow: it should feel strong and consistent. A noticeable reduction in airflow suggests a filter or coil issue. Smell the air briefly — a musty or mouldy odour indicates bio-film growth on the evaporator coil, which requires professional coil cleaning and sanitisation. Unusual noises from the indoor unit (rattling, grinding, squealing) indicate mechanical issues that should be investigated by a technician.",
        ],
      },
      {
        heading: "3. Outdoor Unit Inspection",
        content: [
          "Inspect the outdoor condensing unit for visible debris accumulation on the coil fins — leaves, dust, lint or grease depending on the environment. A blocked condenser is the most common cause of high-pressure trips and system failure during hot weather. Ensure there is clear airflow around the unit; a minimum of 500mm clearance on all sides is required for most commercial units.",
          "Check that the unit is level and securely mounted — vibration over time can cause outdoor units to shift on their mounting bracket. In Brisbane and Gold Coast environments, insects and spiders build nests inside outdoor unit enclosures during warmer months; a quick visual inspection of the electrical compartment cover can prevent damage to wiring and components. If the condenser coil looks significantly blocked, schedule a professional cleaning rather than attempting to clean it with a pressure washer, which can damage the delicate aluminium fins.",
        ],
      },
      {
        heading: "4. Controls and Scheduling Review",
        content: [
          "Check that all system controllers and thermostats are displaying correctly and responding to input. Verify that the programmed schedule reflects current occupancy patterns — office hours change, tenants move, businesses grow. An outdated schedule that conditions empty spaces overnight or on weekends wastes a disproportionate amount of energy.",
          "Check that setpoints are within the recommended efficiency range: 23–25°C for cooling, 20–22°C for heating. Each degree outside this range adds approximately 8–10% to AC energy consumption. If you have zone controls, confirm that all zones are operating as intended — a zone that is always on or always off often indicates a controls fault rather than a deliberate setting.",
        ],
      },
      {
        heading: "5. When to Call a Professional",
        content: [
          "The quarterly checks above are visual and operational — they do not substitute for annual professional maintenance. A full service by an ARC-licensed technician includes refrigerant level check, electrical component inspection, comprehensive coil cleaning, drain flushing, performance testing and documentation. Shelair recommends a minimum of one professional service per year for light commercial systems, and two per year for heavily used systems in hospitality, medical or retail environments.",
          "Signs that require immediate professional attention: visible ice on the indoor or outdoor unit, water leaking inside the building, complete loss of cooling or heating, or the system tripping its circuit breaker repeatedly. Contact Shelair for same-day emergency service across Brisbane, Gold Coast and Sunshine Coast — 24/7 for urgent breakdowns.",
        ],
      },
    ],
    relatedSlugs: ["reduce-ac-energy-costs", "commercial-ac-system-guide", "inverter-ac-technology-guide"],
  },
  {
    slug: "inverter-ac-technology-guide",
    type: "Article",
    icon: FileText,
    title: "Inverter vs Non-Inverter Air Conditioning: What Commercial Operators Need to Know",
    desc: "Why inverter AC systems use less energy, last longer and maintain more consistent temperatures.",
    metaDescription:
      "Inverter vs non-inverter air conditioning for commercial use. Explains how inverter technology works, quantifies energy savings, compares comfort levels and total cost of ownership for SE Queensland businesses.",
    date: "Sep 2025",
    readTime: "6 min read",
    sections: [
      {
        heading: "What Inverter Technology Actually Means",
        content: [
          "A standard non-inverter air conditioning compressor has two modes: fully on at 100% power, or completely off. It cycles between these states to maintain temperature — running at full output until the room reaches setpoint, shutting off, then restarting minutes later when the temperature rises again.",
          "An inverter compressor uses variable-speed drive technology to modulate its output continuously — typically between 20% and 100% of rated capacity. Rather than cycling on and off, an inverter system ramps down to a low, steady output once the room reaches setpoint, maintaining the temperature with minimal fluctuation. The compressor never fully shuts off during a cooling or heating cycle; it simply slows to the minimum output needed to hold the set temperature.",
        ],
      },
      {
        heading: "The Energy Savings: Real Numbers",
        content: [
          "The efficiency advantage of inverter technology is significant and well-documented. Inverter systems typically consume 30–40% less electricity than non-inverter equivalents operating under the same conditions. The savings are greatest during mild weather — when the cooling demand is low, an inverter compressor can run at 20–30% output continuously, consuming a fraction of the energy a fixed-speed system would use cycling on and off at full power.",
          "In Queensland's climate, where commercial AC runs for most of the year, these savings compound meaningfully. A single commercial split system running 10 hours per day could save $300–$600 per year in electricity compared to a non-inverter equivalent. At current SEQ commercial electricity rates of $0.30–$0.35/kWh, a ten-unit commercial installation with all inverter systems could realistically save $3,000–$6,000 annually versus non-inverter alternatives.",
        ],
      },
      {
        heading: "Comfort and Temperature Stability",
        content: [
          "Beyond energy savings, inverter systems provide measurably better comfort. Fixed-speed systems allow room temperature to fluctuate in a sawtooth pattern — dropping below setpoint as the compressor runs at full power, then rising again after it shuts off. In a well-designed system, this swing might be 2–3°C; in a poorly sized or maintained system, it can be wider.",
          "Inverter systems maintain temperature within 0.5°C of setpoint by modulating output continuously. In commercial settings — particularly medical centres, offices and hospitality environments — this stability translates to fewer occupant complaints, better productivity and a more consistent customer experience. For applications where temperature consistency is operationally important, inverter technology is not optional.",
        ],
      },
      {
        heading: "Upfront Cost vs Operating Cost",
        content: [
          "Inverter systems typically cost 15–30% more than non-inverter equivalents at the point of purchase. For a $2,500 split system, that premium might be $400–$600. However, the payback period from energy savings is short: typically two to four years for a standard commercial system in Queensland, depending on usage hours and the efficiency gap between the inverter and non-inverter alternatives being compared.",
          "Beyond payback, the inverter system continues to generate savings every year of its operating life — which for a quality unit from Daikin, Mitsubishi Electric or Fujitsu, installed by an ARC-licensed technician, is typically 12–15 years. Over a full system life, the total operating cost advantage of inverter technology is often three to five times the upfront price premium. When commissioning new AC, the question is not whether inverter is worth the premium, but what the whole-of-life cost comparison looks like — and Shelair provides this analysis as part of every commercial proposal.",
        ],
      },
      {
        heading: "Are There Cases Where Non-Inverter Makes Sense?",
        content: [
          "For applications where the system operates at or near full capacity continuously — certain industrial cooling scenarios, specialist process cooling or very high heat-load environments — the modulation advantage of inverter is less pronounced, since the compressor would be running near full speed regardless.",
          "In short-term tenancy situations where the tenant will not benefit from operating savings over a meaningful period, the upfront premium may not be warranted. For emergency replacement scenarios where an identical unit is needed quickly to minimise downtime, matching the existing non-inverter specification may be the practical short-term answer. Outside these specific scenarios, inverter technology is the right choice for virtually every new commercial AC installation in 2026.",
        ],
      },
      {
        heading: "What to Look for When Buying",
        content: [
          "Check the energy star rating: five stars or above is recommended for commercial AC in Queensland; some premium inverter units from Daikin and Mitsubishi Electric achieve six-star ratings. Review the published COP (coefficient of performance) and EER (energy efficiency ratio) — a higher number means more cooling per watt consumed, and these figures allow direct comparison between models.",
          "Confirm the warranty: quality inverter compressors from the major brands typically carry five-year manufacturer warranties; Shelair adds a five-year workmanship guarantee on top of this for all commercial installations. Ask your installer for an estimated annual running cost for your specific application — this should be a standard part of any reputable commercial AC proposal. If a quote does not include running cost modelling, ask for it.",
        ],
      },
    ],
    relatedSlugs: ["reduce-ac-energy-costs", "commercial-ac-maintenance-checklist", "split-system-vs-ducted"],
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
