'use client'

export function DateTime() {
  return (
    <>
      {Intl.DateTimeFormat('pt-BR', {
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'America/Araguaina'
      }).format(new Date())} <span className="text-zinc-400">(UTC -03:00)</span>
    </>
  )
}