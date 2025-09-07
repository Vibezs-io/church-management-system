import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Church Management System
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/dashboard" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              href="/features" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </Link>
            <Link 
              href="/support" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Support
            </Link>
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
