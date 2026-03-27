import { create } from 'zustand'

export type PlanetId = 'sun' | 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune' | 'blackhole'

interface StoreState {
  focusedPlanet: PlanetId | null
  setFocusedPlanet: (planet: PlanetId | null) => void
}

export const useStore = create<StoreState>((set) => ({
  focusedPlanet: null,
  setFocusedPlanet: (planet) => set({ focusedPlanet: planet }),
}))
