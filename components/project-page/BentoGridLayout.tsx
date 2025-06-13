'use client'

import React from 'react'
import { GlowingEffect } from './GlowingEffect'

type BentoGridLayoutProps = {
  items: React.ReactNode[] // 7 items attendus
}

const BentoGridLayout: React.FC<BentoGridLayoutProps> = ({ items }) => (
  <div className="w-full max-w-7xl mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-6 md:grid-rows-2 gap-4">
    {/* Ligne du haut : 1 case à gauche, 1 grande case fusionnée à droite */}
    <div
      id="card-1"
      className="relative h-[500px] rounded-2xl border p-2 md:col-span-2 lg:col-span-1"
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        variant="blue"
      />
      <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-sand-100 p-6">
        {items[0]}
      </div>
    </div>
    <div className="relative h-[500px] rounded-2xl border p-2 md:col-span-2">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        variant="purple"
      />
      <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-sand-100 p-6">
        {items[1]}
      </div>
    </div>

    {/* Ligne du bas */}
    {/* Case de gauche */}
    <div
      id="card-3"
      className="relative h-[500px] rounded-2xl border p-2 lg:row-start-2 lg:col-start-1"
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        variant="green"
      />
      <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-sand-100 p-6">
        {items[2]}
      </div>
    </div>
    {/* Case du milieu : mini-grid */}
    <div className="lg:row-start-2 lg:col-start-2 flex flex-col h-[500px] gap-4 overflow-hidden">
      {/* Mini-grid verticale */}
      <div className="relative flex-1 h-[80px] rounded-2xl border p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          variant="orange"
        />
        <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-sand-100 p-4">
          {items[3]}
        </div>
      </div>
      <div className="flex gap-4 flex-1 h-[80px] overflow-hidden">
        <div className="relative w-1/2 h-full rounded-2xl border p-2">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            variant="default"
          />
          <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-sand-100 p-4">
            {items[4]}
          </div>
        </div>
        <div className="relative w-1/2 h-full rounded-2xl border p-2">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            variant="green"
          />
          <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-sand-100 p-4">
            {items[5]}
          </div>
        </div>
      </div>
    </div>
    {/* Case de droite */}
    <div className="relative h-[500px] rounded-2xl border p-2 md:col-span-2 lg:row-start-2 lg:col-start-3">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        variant="blue"
      />
      <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-sand-100 p-6">
        {items[6]}
      </div>
    </div>
  </div>
)

export { BentoGridLayout }
