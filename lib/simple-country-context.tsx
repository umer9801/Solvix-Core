"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Country = 'canada' | 'pakistan' | 'usa' | 'uk' | 'australia' | 'germany' | 'france' | 'uae' | 'saudi-arabia' | 'kuwait' | 'qatar' | 'oman' | 'italy'

interface CountryConfig {
  whatsApp: string
  currency: string
  currencyName: string
  flag: string
  name: string
}

interface CountryContextType {
  country: Country
  setCountry: (country: Country) => void
  config: CountryConfig
}

const countryConfigs: Record<Country, CountryConfig> = {
  canada: {
    whatsApp: "14315335035",
    currency: "$",
    currencyName: "CAD",
    flag: "🇨🇦",
    name: "Canada"
  },
  pakistan: {
    whatsApp: "923205807054",
    currency: "PKR",
    currencyName: "PKR",
    flag: "🇵🇰",
    name: "Pakistan"
  },
  usa: {
    whatsApp: "14315335035",
    currency: "$",
    currencyName: "USD",
    flag: "🇺🇸",
    name: "United States"
  },
  uk: {
    whatsApp: "14315335035",
    currency: "£",
    currencyName: "GBP",
    flag: "🇬🇧",
    name: "United Kingdom"
  },
  australia: {
    whatsApp: "14315335035",
    currency: "$",
    currencyName: "AUD",
    flag: "🇦🇺",
    name: "Australia"
  },
  germany: {
    whatsApp: "14315335035",
    currency: "€",
    currencyName: "EUR",
    flag: "🇩🇪",
    name: "Germany"
  },
  france: {
    whatsApp: "14315335035",
    currency: "€",
    currencyName: "EUR",
    flag: "🇫🇷",
    name: "France"
  },
  uae: {
    whatsApp: "14315335035",
    currency: "AED",
    currencyName: "AED",
    flag: "🇦🇪",
    name: "UAE"
  },
  "saudi-arabia": {
    whatsApp: "14315335035",
    currency: "SAR",
    currencyName: "SAR",
    flag: "🇸🇦",
    name: "Saudi Arabia"
  },
  kuwait: {
    whatsApp: "14315335035",
    currency: "KWD",
    currencyName: "KWD",
    flag: "🇰🇼",
    name: "Kuwait"
  },
  qatar: {
    whatsApp: "14315335035",
    currency: "QAR",
    currencyName: "QAR",
    flag: "🇶🇦",
    name: "Qatar"
  },
  oman: {
    whatsApp: "14315335035",
    currency: "OMR",
    currencyName: "OMR",
    flag: "🇴🇲",
    name: "Oman"
  },
  italy: {
    whatsApp: "14315335035",
    currency: "€",
    currencyName: "EUR",
    flag: "🇮🇹",
    name: "Italy"
  }
}

const CountryContext = createContext<CountryContextType | undefined>(undefined)

export function SimpleCountryProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountryState] = useState<Country>('canada')
  const [isHydrated, setIsHydrated] = useState(false)

  // Load country from localStorage on mount (with error handling)
  useEffect(() => {
    setIsHydrated(true)
    if (typeof window !== 'undefined') {
      try {
        const savedCountry = localStorage.getItem('selectedCountry') as Country
        if (savedCountry && countryConfigs[savedCountry]) {
          setCountryState(savedCountry)
        }
      } catch (error) {
        // If localStorage fails, just use default
        console.log('localStorage not available, using default country')
      }
    }
  }, [])

  // Save country to localStorage when changed (with error handling)
  const setCountry = (newCountry: Country) => {
    setCountryState(newCountry)
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('selectedCountry', newCountry)
      } catch (error) {
        // If localStorage fails, still update state
        console.log('localStorage not available, country changed in memory only')
      }
    }
  }

  // Use current country config, fallback to canada if not hydrated
  const config = isHydrated ? countryConfigs[country] : countryConfigs['canada']

  return (
    <CountryContext.Provider value={{ country, setCountry, config }}>
      {children}
    </CountryContext.Provider>
  )
}

export function useCountry() {
  const context = useContext(CountryContext)
  if (context === undefined) {
    // Return default instead of throwing error
    return {
      country: 'canada' as Country,
      setCountry: () => {},
      config: countryConfigs['canada']
    }
  }
  return context
}

export { countryConfigs }
export type { Country, CountryConfig }