'use client'

import { useEffect, useState } from "react"

export default function JSEnabled() {
  const [jsEnabled, setJSEnabled] = useState(false)
  useEffect(() => {
    if (typeof document !== undefined) {
      document.cookie = "jsEnabled=true;samesite=strict;path=/;max-age=10"
    }
  }, [])
  return <></>
}