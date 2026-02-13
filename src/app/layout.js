import './styles/globals.css'
import ActNavigation from '@/components/ActNavigation'

export const metadata = {
  title: "Silksong Lore Journey",
  description: "Explore Hornet's path through Pharloom via mandatory bosses.",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-gray-950 text-gray-100 font-sans'>
        {/* Header */}
        <header className='p-6 bg-gray-900 shadow-md'>
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className='text-xl font-bold text-indigo-400'>
            Silksong Lore Journey
            </h1>
            <ActNavigation />
          </div>
        </header>

        {/* Main Content */}
        <main className='max-w-5xl mx-auto p-6'>{children}</main>

        {/* Footer */}
        <footer className='p-6 bg-gray-900 mt-12 text-center text-sm text-gray-400'>
          <p>{new Date().getFullYear()} Silksong Lore Project</p>
        </footer>
        
      </body>
    </html>
  )
}