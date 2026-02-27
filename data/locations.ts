export interface Suburb {
  slug: string;
  name: string;
  zone: string;
  businessTypes: string;
  venueTypes: string[];
  localContextText: string;
  nearbySuburbs: string[];
}

export interface CityData {
  slug: string;
  name: string;
  regionDescription: string;
  stats: { label: string; value: string }[];
  zones: string[];
  suburbs: Suburb[];
  sampleSuburbs: string[];
}

export const cities: CityData[] = [
  {
    slug: "brisbane",
    name: "Brisbane",
    regionDescription: "From the CBD to the northern suburbs — Shelair keeps Brisbane's commercial and residential air conditioning running 24/7.",
    sampleSuburbs: ["Deception Bay", "North Lakes", "Chermside", "Aspley", "Kelvin Grove"],
    zones: ["Northern Brisbane", "Inner Brisbane", "Southern Brisbane"],
    stats: [
      { value: "24/7", label: "Emergency Service" },
      { value: "5yr", label: "Workmanship Guarantee" },
      { value: "30+", label: "Years Experience" },
      { value: "ARC", label: "Approved & Authorised" },
    ],
    suburbs: [
      {
        slug: "deception-bay",
        name: "Deception Bay",
        zone: "Northern Brisbane",
        businessTypes: "Retail, offices, light industrial",
        venueTypes: ["Retail", "Offices", "Light Industrial", "Residential"],
        localContextText: "Deception Bay is home to Shelair's headquarters at Unit 3, 9–11 Imboon Street. Our local team services air conditioning installations and repairs across the suburb and surrounding Moreton Bay region.",
        nearbySuburbs: ["North Lakes", "Murrumba Downs", "Burpengary", "Narangba"],
      },
      {
        slug: "north-lakes",
        name: "North Lakes",
        zone: "Northern Brisbane",
        businessTypes: "Shopping centres, offices, medical",
        venueTypes: ["Shopping Centres", "Medical Centres", "Offices", "Residential"],
        localContextText: "North Lakes is one of Brisbane's fastest-growing commercial precincts. Shelair services the area's retail centres, medical facilities and office complexes with reliable HVAC installation and maintenance.",
        nearbySuburbs: ["Mango Hill", "Murrumba Downs", "Deception Bay", "Kallangur"],
      },
      {
        slug: "chermside",
        name: "Chermside",
        zone: "Northern Brisbane",
        businessTypes: "Retail, medical, hospitality",
        venueTypes: ["Shopping Centres", "Medical Centres", "Hospitality", "Offices"],
        localContextText: "Chermside is a major commercial hub anchored by Westfield Chermside. Shelair provides air conditioning installation and servicing for the area's large retail, medical and hospitality operators.",
        nearbySuburbs: ["Aspley", "Kedron", "Nundah", "Wavell Heights"],
      },
      {
        slug: "aspley",
        name: "Aspley",
        zone: "Northern Brisbane",
        businessTypes: "Retail, offices, light commercial",
        venueTypes: ["Retail", "Offices", "Light Commercial"],
        localContextText: "Aspley's mix of retail strips and commercial properties rely on effective air conditioning to stay comfortable year-round. Shelair provides fast, reliable HVAC servicing and installation across the suburb.",
        nearbySuburbs: ["Chermside", "Bridgeman Downs", "Zillmere", "Boondall"],
      },
      {
        slug: "bridgeman-downs",
        name: "Bridgeman Downs",
        zone: "Northern Brisbane",
        businessTypes: "Offices, medical, residential",
        venueTypes: ["Medical Centres", "Offices", "Residential"],
        localContextText: "Bridgeman Downs is a leafy northern suburb with a growing commercial and medical precinct. Shelair services the area with expert air conditioning installation and preventative maintenance.",
        nearbySuburbs: ["Aspley", "Chermside", "Albany Creek", "Eatons Hill"],
      },
      {
        slug: "boondall",
        name: "Boondall",
        zone: "Northern Brisbane",
        businessTypes: "Industrial, logistics, retail",
        venueTypes: ["Industrial", "Logistics", "Retail"],
        localContextText: "Boondall's industrial and logistics precinct has significant HVAC demands. Shelair provides commercial air conditioning solutions for warehouses, factories and retail operators in the area.",
        nearbySuburbs: ["Aspley", "Zillmere", "Bracken Ridge", "Taigum"],
      },
      {
        slug: "bracken-ridge",
        name: "Bracken Ridge",
        zone: "Northern Brisbane",
        businessTypes: "Retail, offices, residential",
        venueTypes: ["Retail", "Offices", "Residential"],
        localContextText: "Bracken Ridge is a northern Brisbane suburb with busy retail and commercial strips. Shelair provides HVAC installation and service for businesses and residents throughout the area.",
        nearbySuburbs: ["Boondall", "Taigum", "Zillmere", "Deception Bay"],
      },
      {
        slug: "banyo",
        name: "Banyo",
        zone: "Northern Brisbane",
        businessTypes: "Industrial, offices, aviation-related",
        venueTypes: ["Industrial", "Offices", "Aviation-Related"],
        localContextText: "Banyo sits close to Brisbane Airport with a strong industrial and commercial base. Shelair services the area's offices, warehouses and light industrial facilities with expert HVAC solutions.",
        nearbySuburbs: ["Nudgee", "Nundah", "Northgate", "Hendra"],
      },
      {
        slug: "murrumba-downs",
        name: "Murrumba Downs",
        zone: "Northern Brisbane",
        businessTypes: "Residential, retail, small commercial",
        venueTypes: ["Residential", "Retail", "Small Commercial"],
        localContextText: "Murrumba Downs is a growing residential and retail suburb north of Brisbane. Shelair provides split system installations and servicing for homes and small businesses throughout the area.",
        nearbySuburbs: ["North Lakes", "Kallangur", "Deception Bay", "Mango Hill"],
      },
      {
        slug: "kelvin-grove",
        name: "Kelvin Grove",
        zone: "Inner Brisbane",
        businessTypes: "Education, medical, residential",
        venueTypes: ["University", "Medical", "Residential", "Retail"],
        localContextText: "Kelvin Grove is home to QUT and a growing urban village precinct. Shelair's Kelvin Grove office at 20 Bishop Street serves the inner-north's commercial, educational and residential HVAC needs.",
        nearbySuburbs: ["Red Hill", "Herston", "Newmarket", "Windsor"],
      },
    ],
  },
  {
    slug: "gold-coast",
    name: "Gold Coast",
    regionDescription: "From Surfers Paradise to Coolangatta — fast air conditioning service and installation for the Coast's booming hospitality, retail and residential sector.",
    sampleSuburbs: ["Surfers Paradise", "Broadbeach", "Southport", "Robina", "Burleigh Heads"],
    zones: ["Northern Gold Coast", "Central Gold Coast", "Southern Gold Coast"],
    stats: [
      { value: "24/7", label: "Emergency Service" },
      { value: "5yr", label: "Workmanship Guarantee" },
      { value: "30+", label: "Years Experience" },
      { value: "ARC", label: "Approved & Authorised" },
    ],
    suburbs: [
      {
        slug: "surfers-paradise",
        name: "Surfers Paradise",
        zone: "Central Gold Coast",
        businessTypes: "Hotels, hospitality, retail, high-rise",
        venueTypes: ["Hotels", "Hospitality", "Retail", "High-Rise Residential"],
        localContextText: "Surfers Paradise is the Gold Coast's most intensive commercial and hospitality precinct. Shelair provides high-rise and commercial HVAC solutions for hotels, restaurants and retail operators in the area.",
        nearbySuburbs: ["Broadbeach", "Southport", "Bundall", "Chevron Island"],
      },
      {
        slug: "broadbeach",
        name: "Broadbeach",
        zone: "Central Gold Coast",
        businessTypes: "Hospitality, retail, entertainment",
        venueTypes: ["Hospitality", "Retail", "Entertainment Venues"],
        localContextText: "Broadbeach is one of the Gold Coast's premier dining and entertainment hubs. Shelair services the area's restaurants, cafes and retail operators with reliable commercial HVAC installation and maintenance.",
        nearbySuburbs: ["Surfers Paradise", "Mermaid Beach", "Robina", "Bundall"],
      },
      {
        slug: "southport",
        name: "Southport",
        zone: "Northern Gold Coast",
        businessTypes: "Medical, offices, retail, legal",
        venueTypes: ["Medical Centres", "Offices", "Retail", "Legal"],
        localContextText: "Southport is the Gold Coast's CBD, home to major hospitals, law firms and government offices. Shelair provides expert commercial air conditioning for the area's professional and medical operators.",
        nearbySuburbs: ["Labrador", "Bundall", "Surfers Paradise", "Benowa"],
      },
      {
        slug: "robina",
        name: "Robina",
        zone: "Central Gold Coast",
        businessTypes: "Shopping centres, medical, offices",
        venueTypes: ["Shopping Centres", "Medical", "Offices", "Residential"],
        localContextText: "Robina is a major suburban hub anchored by Robina Town Centre. Shelair provides HVAC installation and servicing for the area's retail, medical and office operators.",
        nearbySuburbs: ["Varsity Lakes", "Mudgeeraba", "Broadbeach", "Burleigh Heads"],
      },
      {
        slug: "burleigh-heads",
        name: "Burleigh Heads",
        zone: "Southern Gold Coast",
        businessTypes: "Hospitality, retail, residential",
        venueTypes: ["Hospitality", "Retail", "Residential"],
        localContextText: "Burleigh Heads has one of the Gold Coast's most popular dining and retail strips. Shelair keeps local hospitality and retail businesses comfortable with reliable AC installation and service.",
        nearbySuburbs: ["Miami", "Palm Beach", "Robina", "Varsity Lakes"],
      },
      {
        slug: "coolangatta",
        name: "Coolangatta",
        zone: "Southern Gold Coast",
        businessTypes: "Tourism, hospitality, retail",
        venueTypes: ["Tourism", "Hospitality", "Retail", "Residential"],
        localContextText: "Coolangatta is the Gold Coast's southern gateway, with a vibrant mix of tourism, hospitality and retail. Shelair provides fast, reliable HVAC servicing for businesses across the southern corridor.",
        nearbySuburbs: ["Bilinga", "Kirra", "Tweed Heads", "Palm Beach"],
      },
    ],
  },
  {
    slug: "sunshine-coast",
    name: "Sunshine Coast",
    regionDescription: "Noosa to Caloundra — expert air conditioning installation and maintenance for the Sunshine Coast's growing hospitality, retail and commercial sector.",
    sampleSuburbs: ["Maroochydore", "Noosa Heads", "Caloundra", "Mooloolaba", "Nambour"],
    zones: ["Northern Sunshine Coast", "Central Sunshine Coast", "Southern Sunshine Coast"],
    stats: [
      { value: "24/7", label: "Emergency Service" },
      { value: "5yr", label: "Workmanship Guarantee" },
      { value: "30+", label: "Years Experience" },
      { value: "ARC", label: "Approved & Authorised" },
    ],
    suburbs: [
      {
        slug: "maroochydore",
        name: "Maroochydore",
        zone: "Central Sunshine Coast",
        businessTypes: "Retail, offices, medical, hospitality",
        venueTypes: ["Retail", "Offices", "Medical", "Hospitality"],
        localContextText: "Maroochydore is the Sunshine Coast's commercial capital. Shelair services the area's shopping centres, offices and hospitality venues with commercial air conditioning installation and maintenance.",
        nearbySuburbs: ["Mooloolaba", "Buderim", "Kawana", "Sippy Downs"],
      },
      {
        slug: "noosa-heads",
        name: "Noosa Heads",
        zone: "Northern Sunshine Coast",
        businessTypes: "Luxury hospitality, retail, tourism",
        venueTypes: ["Luxury Hotels", "Restaurants", "Retail", "Tourism"],
        localContextText: "Noosa Heads is one of Queensland's premier tourism destinations. Shelair provides premium HVAC solutions for the area's hotels, restaurants and boutique retailers.",
        nearbySuburbs: ["Noosaville", "Tewantin", "Cooroy", "Sunshine Beach"],
      },
      {
        slug: "caloundra",
        name: "Caloundra",
        zone: "Southern Sunshine Coast",
        businessTypes: "Retail, hospitality, residential",
        venueTypes: ["Retail", "Hospitality", "Residential", "Medical"],
        localContextText: "Caloundra is a popular southern Sunshine Coast destination with a strong retail and hospitality scene. Shelair provides reliable air conditioning installation and servicing for local businesses.",
        nearbySuburbs: ["Kawana", "Sippy Downs", "Pelican Waters", "Little Mountain"],
      },
      {
        slug: "mooloolaba",
        name: "Mooloolaba",
        zone: "Central Sunshine Coast",
        businessTypes: "Hospitality, tourism, retail",
        venueTypes: ["Hospitality", "Tourism", "Retail", "Residential"],
        localContextText: "Mooloolaba's Esplanade is one of the Sunshine Coast's busiest dining and retail strips. Shelair keeps local hospitality and retail businesses cool with fast, reliable HVAC servicing.",
        nearbySuburbs: ["Maroochydore", "Alexandra Headland", "Buderim", "Kawana"],
      },
      {
        slug: "nambour",
        name: "Nambour",
        zone: "Central Sunshine Coast",
        businessTypes: "Light industrial, retail, medical",
        venueTypes: ["Light Industrial", "Retail", "Medical", "Government"],
        localContextText: "Nambour is the Sunshine Coast's hinterland hub with a diverse mix of light industrial, retail and medical operators. Shelair provides commercial HVAC solutions across the area.",
        nearbySuburbs: ["Woombye", "Palmwoods", "Yandina", "Bli Bli"],
      },
      {
        slug: "caboolture",
        name: "Caboolture",
        zone: "Southern Sunshine Coast",
        businessTypes: "Retail, medical, industrial, residential",
        venueTypes: ["Retail", "Medical", "Industrial", "Residential"],
        localContextText: "Caboolture is a fast-growing regional centre between Brisbane and the Sunshine Coast. Shelair serves the area's expanding retail, medical and industrial sectors with expert HVAC installation and service.",
        nearbySuburbs: ["Morayfield", "Burpengary", "Narangba", "Deception Bay"],
      },
      {
        slug: "burpengary",
        name: "Burpengary",
        zone: "Southern Sunshine Coast",
        businessTypes: "Retail, residential, light industrial",
        venueTypes: ["Retail", "Residential", "Light Industrial"],
        localContextText: "Burpengary is a growing northern corridor suburb with significant residential and retail development. Shelair provides split system installations and HVAC servicing across the area.",
        nearbySuburbs: ["Narangba", "Caboolture", "Deception Bay", "North Lakes"],
      },
    ],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getSuburbBySlug(citySlug: string, suburbSlug: string): { city: CityData; suburb: Suburb } | undefined {
  const city = getCityBySlug(citySlug);
  if (!city) return undefined;
  const suburb = city.suburbs.find((s) => s.slug === suburbSlug);
  if (!suburb) return undefined;
  return { city, suburb };
}
