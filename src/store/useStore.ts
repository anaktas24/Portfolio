import { create } from 'zustand'

export type PlanetId = 'sun' | 'venus' | 'earth' | 'mars' | 'saturn' | 'uranus' | 'blackhole'

interface StoreState {
  focusedPlanet: PlanetId | null
  setFocusedPlanet: (planet: PlanetId | null) => void
}

export const useStore = create<StoreState>((set) => ({
  focusedPlanet: null,
  setFocusedPlanet: (planet) => set({ focusedPlanet: planet }),
}))
