'use client'

import { useState, useCallback } from 'react'
import { filterVehicles, type VehicleFilters } from '@/lib/utils/filter-vehicles'
import type { Vehicle } from '@/types/vehicle'

const DEFAULT_FILTERS: VehicleFilters = {
  category: 'all',
  protectionLevel: 'all',
  status: 'all',
}

export function useFilter(allVehicles: Vehicle[]) {
  const [filters, setFilters] = useState<VehicleFilters>(DEFAULT_FILTERS)

  const filtered = filterVehicles(allVehicles, filters)

  const setCategory = useCallback((category: VehicleFilters['category']) => {
    setFilters((f) => ({ ...f, category }))
  }, [])

  const setProtectionLevel = useCallback((protectionLevel: string) => {
    setFilters((f) => ({ ...f, protectionLevel }))
  }, [])

  const setStatus = useCallback((status: VehicleFilters['status']) => {
    setFilters((f) => ({ ...f, status }))
  }, [])

  const reset = useCallback(() => setFilters(DEFAULT_FILTERS), [])

  return { filters, filtered, setCategory, setProtectionLevel, setStatus, reset }
}
