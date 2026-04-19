const c = 'h-8 w-8 text-brand-700'

export function ServiceIcon({ id }) {
  switch (id) {
    case 'cleaning':
      return (
        <svg className={c} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.571.393M5 14.5l1.571-.393M19.8 15l1.679.464a1.125 1.125 0 0 1-1.314 1.314L19.8 15m0 0-1.314-1.314M5 14.5l-1.679.464a1.125 1.125 0 0 0 1.314 1.314L5 14.5m0 0 1.314 1.314"
          />
        </svg>
      )
    case 'whitening':
      return (
        <svg className={c} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      )
    case 'braces':
      return (
        <svg className={c} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m-9.75-7.5v15m-4.5-12 9 9m0-9-9 9"
          />
        </svg>
      )
    case 'root-canal':
      return (
        <svg className={c} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
          />
        </svg>
      )
    case 'implants':
      return (
        <svg className={c} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 21h16.5M4.5 3h15M6 3v18m12-18v18M9 9.75h6M9 15h6"
          />
        </svg>
      )
    case 'emergency':
      return (
        <svg className={c} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.122ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>
      )
    default:
      return (
        <svg className={c} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12" />
        </svg>
      )
  }
}
